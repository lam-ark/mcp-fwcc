---
id: "transfer-ark:feature:total_win_celebration:02_state_machine"
title: "Total Win Celebration - State Machine & Lifecycle Flow"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["TotalWinModule", "BaseCutscene"]
tags: ["state_machine", "lifecycle", "sequence_diagram", "in_loop_out", "debounce"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 2. 🔄 State Machine & Lifecycle Flow

---

## 2.1 State Machine Specification

```typescript
enum TotalWinState {
    IDLE = 0,               // Uninitialized, inactive
    COUNTING = 1,           // Spine 'in' playing, money count tween running
    COUNTING_COMPLETED = 2, // Spine 'loop' playing, 1.0s debounce & 3.0s auto-close
    CLOSING = 3             // Spine 'out' playing, preparing to resolve callback
}
```

```mermaid
stateDiagram-v2
    [*] --> IDLE
    IDLE --> COUNTING: enter() -> playSkeletonAnim('in') & startCountingMoney()
    
    COUNTING --> COUNTING_COMPLETED: Tween finish OR User Tap (skipCounting)
    
    state COUNTING_COMPLETED {
        [*] --> LockTouch_1s: Start 1.0s Debounce Tween
        LockTouch_1s --> AllowClickToClose: 1.0s Elapsed (_canClickToClose = true)
        LockTouch_1s --> AutoClose_3s: Start 3.0s Auto-Close Timer
    }

    COUNTING_COMPLETED --> CLOSING: User Click (after debounce) OR 3.0s Timeout -> closePopup()
    
    state CLOSING {
        [*] --> PlayOutAnim: Spine setAnimation('out')
        PlayOutAnim --> FinishExit: 'out' completeListener fires
        PlayOutAnim --> ImmediateExit: User taps again during 'out'
    }

    CLOSING --> IDLE: exit() -> cleanupTweens() -> fireCutsceneClose()
    CLOSING --> [*]
```

---

## 2.2 Sequence Diagram

```mermaid
sequenceDiagram
    autonumber
    participant FGD as FreeGameDirector
    participant CC as CutsceneController
    participant TWM as TotalWinModule9666
    participant Sp as totalWinSkeleton (Spine)
    participant Snd as SoundPlayer

    FGD->>CC: PLAY_CUTSCENE (TOTAL_WIN, totalWinAmount)
    CC->>TWM: play(content, callback)
    TWM->>TWM: enter()
    TWM->>Snd: playMusic('BGM_TOTAL_WIN', true)
    
    par Play In Animation & Track Bone
        TWM->>Sp: setAnimation(0, 'in', false)
        TWM->>TWM: update() -> syncMoneyToSlot() [Tracks slot_money bone]
        Sp-->>TWM: onComplete('in') -> setAnimation(0, 'loop', true)
    and Count Up Win Amount
        TWM->>TWM: Tween money from 0 to _targetWinAmount (7.0s)
        opt User Taps Screen
            User->>TWM: onClick() -> skipCounting()
            TWM->>TWM: Fast-forwards to target amount
        end
    end

    TWM->>TWM: finishCounting()
    TWM->>Snd: playSfx('BIGWIN_END')
    TWM->>TWM: Start 1.0s Debounce (_canClickToClose = false)
    TWM->>TWM: Start 3.0s Auto-Close Timer

    alt User Clicks after 1.0s Debounce OR 3.0s Auto-Close Fires
        TWM->>TWM: closePopup()
        TWM->>Sp: setAnimation(0, 'out', false)
        opt User Clicks Again During 'out'
            User->>TWM: onClick() -> exit() immediately
        end
        Sp-->>TWM: onComplete('out') -> exit()
    end

    TWM->>Snd: resumeMainBGM()
    TWM->>CC: callback() [Resolves Promise]
    CC-->>FGD: Transition to Normal Game
```

---

## 2.3 Interactive Touch Rules (`onClick`)

```typescript
public onClick(): void {
    if (this._popupState === TotalWinState.COUNTING) {
        // 1. Skip count-up immediately to target amount
        this.playSoundSkip();
        this.skipCounting();
    } else if (this._popupState === TotalWinState.COUNTING_COMPLETED) {
        // 2. Trigger 'out' transition if 1.0s debounce has elapsed
        if (this._canClickToClose) {
            this.closePopup();
        }
    } else if (this._popupState === TotalWinState.CLOSING) {
        // 3. User taps during 'out' animation -> force instant exit
        this.exit();
    }
}
```
