---
id: "cc_slot_module:SlotReelModule:overview:lifecycle_flowchart"
title: "SlotReelModule Lifecycle & State Transitions"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "overview", "lifecycle", "flowchart", "state_machine"]
---

# 🔄 SlotReelModule Lifecycle & State Transitions

---

## 1. Reel State Machine Transitions

`ReelManager` coordinates state progression across the 4 spin states:

```mermaid
stateDiagram-v2
    [*] --> IDLE: initReel()
    IDLE --> START: runReelSpin(mode)
    START --> START: Continuous Pixel Roll & recycleSymbol()
    START --> SHOWING_RESULT: showResult(symbols) / step < totalSymbol
    SHOWING_RESULT --> STOPPED: stop >= totalSymbol
    STOPPED --> IDLE: playStopAnimation() -> resetReel()
```

---

## 2. Granular Frame-by-Frame Execution Flow

```mermaid
sequenceDiagram
    autonumber
    participant Table as SlotTableModule
    participant Reel as SlotReelModule
    participant ReelMgr as ReelManager
    participant Pool as SlotSymbolManager

    Table->>Reel: runReelSpin(mode)
    Reel->>ReelMgr: changeState(ReelSpinState.START)
    Reel->>Reel: spinAction() loops cc.tween down by SYMBOL_HEIGHT
    loop Each Step
        Reel->>Pool: Pop bottom symbol & recycle
        Reel->>Pool: spawnSymbol (Blur Sprite) at top buffer
    end
    Table->>Reel: showResult(symbols, stopCB, preStopCB)
    Reel->>Reel: updateReelResult() pre-fills result buffer
    loop Showing Results
        Reel->>Pool: spawnSymbol (Static Target Symbols)
    end
    Reel->>ReelMgr: changeState(ReelSpinState.STOPPED)
    Reel->>Reel: playStopAnimation() -> easeBackOut bounce
    Reel->>Table: Invokes reelStopCB(reelIndex)
```
