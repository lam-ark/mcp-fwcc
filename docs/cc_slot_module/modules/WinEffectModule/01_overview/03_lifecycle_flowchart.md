---
id: "cc_slot_module:WinEffectModule:overview:lifecycle_flowchart"
title: "WinEffectModule Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 WinEffectModule Lifecycle Sequence Flowchart

---

## 1. Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant CC as CutsceneController
    participant WEM as WinEffectModule
    participant MT as MoneyTween
    participant Coins as CoinsEffect
    participant Sound as Sound Hooks

    CC->>WEM: play(content, callback)
    WEM->>WEM: enter()
    alt Is Turbo / Fast-To-Result
        WEM->>WEM: showFastEffectWin()
        WEM->>Coins: startParticle()
        WEM->>CC: callback() immediately
        WEM->>WEM: delay 3s -> exit()
    else Normal Celebration
        WEM->>WEM: showEffectWin()
        WEM->>Sound: playSoundStart() & playSoundCounting()
        WEM->>Coins: emit("SHOW_COINS_EFFECT")
        WEM->>MT: runBigWinNumber()
        
        loop During Money Count
            MT-->>WEM: onUpdate(value)
            WEM->>WEM: updateCurrentTitle() (Big -> Mega -> Super)
        end
        
        MT-->>WEM: onComplete()
        WEM->>WEM: finish()
        WEM->>WEM: delay(delayHideTime) -> exit()
        WEM->>CC: callback()
    end
```
