---
id: "cc_slot_module:JackpotWinModule:overview:lifecycle_flowchart"
title: "JackpotWinModule Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 JackpotWinModule Lifecycle Sequence Flowchart

---

## 1. Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant CC as CutsceneController
    participant JWM as JackpotWinModule
    participant MT as MoneyTween
    participant Sound as Sound Hooks

    CC->>JWM: play(content, callback)
    JWM->>JWM: enter()
    JWM->>Sound: playSoundStart()
    JWM->>MT: runNumber(animDuration: 10s)
    JWM->>JWM: bindQuickShow() (locks skip for 2s)
    
    alt Player Taps After 2s
        Player->>JWM: onClick()
        JWM->>Sound: playSoundSkip()
        JWM->>MT: runNumber(duration: 1s, jackpotValue)
        MT-->>JWM: onComplete()
    else Natural Roll Completion
        MT-->>JWM: onComplete()
    end
    
    JWM->>Sound: playSoundCountingEnd() & playSoundEnd()
    JWM->>JWM: finish()
    JWM->>JWM: delay(1s) -> exit()
    JWM->>Sound: resumeMainBGM()
    JWM->>CC: callback()
```
