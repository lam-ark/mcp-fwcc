---
id: "cc_slot_module:JackpotWinModule:overview:architecture_and_role"
title: "JackpotWinModule Architectural Role & Celebration Flow"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "overview", "architecture", "jackpot"]
---

# 🏛️ JackpotWinModule Architectural Role & Celebration Flow

---

## 1. Architectural Mission

`JackpotWinModule` is the modal cutscene controller for Grand, Major, Minor, and Mini Jackpot triumphs. Extending `BaseCutscene`, it manages high-intensity particle bursts (`CoinsEffect`), rolling jackpot count-ups (`MoneyTween.runNumber`), one-tap skip fast forwarding (accelerating the count to a $1.0\text{s}$ finish), and audio ducking.

```mermaid
graph TD
    Writer[Mode Writer / ScriptExecutor] -->|PLAY_CUTSCENE: JACKPOT_WIN| CC[CutsceneController]
    CC --> JWM[JackpotWinModule]
    JWM -->|enter()| Init[initValue & startParticle & startUpdateWinAmount]
    Init --> Tween[MoneyTween.runNumber(animDuration: 10s)]
    
    alt Player Tap
        Player[User Tap] -->|onClick()| Skip[Runs 1s accelerated MoneyTween]
    else Natural Count Completion
        Tween --> Finish[finish() -> Formats Money -> delayHideTime -> exit()]
    end
```

---

## 2. Key Responsibilities

1. **Unskippable Grace Period (`bindQuickShow`)**:
   - Locks interaction for `delayShowTime` ($2.0\text{s}$) to force initial visual appreciation.
2. **Smooth Tap-to-Accelerate**:
   - Unlike Big Win which snaps immediately, tapping in Jackpot runs an accelerated $1.0\text{s}$ tween count before resolving.
3. **Sound Ducking & Restoration**:
   - Mutes main music for jackpot fanfare, invoking `resumeMainBGM()` upon `exit()`.
