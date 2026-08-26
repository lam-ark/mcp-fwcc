---
id: "transfer-ark:feature:multi_milestone_big_win:02_state_machine"
title: "Multi-Milestone Big Win - State Machine & Lifecycle Flow"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["WinEffectModule", "BaseCutscene"]
tags: ["state_machine", "lifecycle", "sequence_diagram", "touch_skip", "debounce"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 2. 🔄 State Machine & Lifecycle Flow

---

## 2.1 State Machine Specification

```typescript
export enum WinPopupState {
    IDLE = 0,               // Popup closed, uninitialized
    COUNTING = 1,           // Active money count-up tween in progress
    COUNTING_COMPLETED = 2, // Counting finished, in 1.0s debounce or 3.0s auto-close
    CLOSING = 3             // Teardown in progress, resolving callback
}
```

```mermaid
stateDiagram-v2
    [*] --> IDLE
    IDLE --> COUNTING: enter() -> showEffectWin() -> startUpdateWinAmount()
    
    state COUNTING {
        [*] --> Milestone_1
        Milestone_1 --> Milestone_2: Step complete OR Tap (skipMilestone)
        Milestone_2 --> Milestone_3: Step complete OR Tap (skipMilestone)
        Milestone_3 --> [*]: Final target reached
    }

    COUNTING --> COUNTING_COMPLETED: finishCounting()
    
    state COUNTING_COMPLETED {
        [*] --> LockTouch_1s: Start 1.0s Debounce Tween
        LockTouch_1s --> AllowClickToClose: 1.0s Elapsed (_canClickToClose = true)
        LockTouch_1s --> AutoClose_3s: Start 3.0s Auto-Close Timer
    }

    COUNTING_COMPLETED --> CLOSING: User Click (after debounce) OR 3.0s Timeout
    CLOSING --> IDLE: exit() -> cleanupTweens() -> fireCutsceneClose()
    CLOSING --> [*]
```

---

## 2.2 Sequence Diagram of Full Celebration Flow

```mermaid
sequenceDiagram
    autonumber
    participant D as Director / Writer
    participant CC as CutsceneController
    participant W as WinEffectModule9666
    participant Sp as Spine Skeleton
    participant Snd as SoundPlayer

    D->>CC: PLAY_CUTSCENE (BIG_WIN, winAmount, totalBet)
    CC->>W: play(content, callback)
    W->>W: enter() -> showEffectWin()
    W->>Snd: playMusic('BGM_BIGWIN')
    W->>W: setupMilestones(totalBet) -> IMilestone[]

    loop For each Milestone Tier (1 to N)
        W->>W: moveToNextMilestone()
        W->>Snd: playSfx(`BIGWIN_LEVEL${level}`)
        W->>Sp: setAnimation(0, `win_${level}_in`, false)
        W->>Sp: setCompleteListener -> setAnimation(0, `win_${level}_loop`, true)
        W->>W: Tween _bigWinProgress from startVal to targetAmount
        opt User Taps Screen During Count
            User->>W: onClick() -> skipMilestone()
            W->>W: Fast-forward to targetAmount & advance
        end
    end

    W->>W: finishCounting()
    W->>Snd: playSfx('BIGWIN_END')
    W->>W: Start 1.0s Debounce (_canClickToClose = false)
    W->>W: Start 3.0s Auto-Close Timer

    alt User Taps After 1.0s Debounce
        User->>W: onClick()
        W->>W: closePopup() -> exit()
    else 3.0s Auto-Close Timer Expires
        W->>W: closePopup() -> exit()
    end

    W->>Snd: resumeMainBGM()
    W->>CC: callback() [Resolves Promise]
    CC-->>D: Big Win Cutscene Finished
```

---

## 2.3 Interactive Touch Rules
1. **Click Throttling**:
   - `now - this._lastClickTime < 300ms`: Ignored to prevent rapid-fire multi-touch gestures from glitching tweens.
2. **During `COUNTING`**:
   - Tapping immediately jumps current display value to `currentMilestone.targetAmount`.
   - Advances to next milestone if available, or immediately calls `finishCounting()`.
3. **During `COUNTING_COMPLETED`**:
   - First **1.0 second**: `_canClickToClose = false`. Taps are ignored to protect against accidental tap-throughs.
   - After **1.0 second**: `_canClickToClose = true`. Tapping instantly closes the popup.
   - After **3.0 seconds**: Auto-close executes if no player interaction occurs.
