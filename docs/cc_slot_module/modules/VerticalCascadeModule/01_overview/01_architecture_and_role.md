---
id: "cc_slot_module:VerticalCascadeModule:overview:architecture_and_role"
title: "VerticalCascadeModule Architectural Role & Physics Engine"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "overview", "architecture", "avalanche", "drop_engine"]
---

# 🏛️ VerticalCascadeModule Architectural Role & Physics Engine

---

## 1. Architectural Mission

`VerticalCascadeModule` is the master controller for the Cascade / Avalanche gameplay loop. It manages the removal of eliminated winning tiles, computes gravity fall trajectories for surviving symbols, spawns fresh top incoming symbols, and drives physics-based `cc.tween` drops with bounce easing and turbo awareness.

```mermaid
graph TD
    Writer[Mode Writer / ScriptExecutor] -->|moduleEvent: TABLE_START_RESPIN| VCM[VerticalCascadeModule]
    VCM -->|Removes winning tiles| SM[SlotSymbolManager]
    
    Writer -->|moduleEvent: TABLE_STOP_RESPIN| VCM
    VCM -->|Calculates shift offsets| Math[Physics Math Engine]
    VCM -->|Spawns new top symbols| SM
    VCM -->|Launches cubicIn + bounce tweens| Tween[cc.tween Fall Animation]
    VCM -->|Resolves Promise after CASCADING_TIME_COMPLETED| Resume[ScriptExecutor Pipeline]
```

---

## 2. Key Responsibilities

1. **Two-Phase Respin Lifecycle**:
   - `startRespin()`: Eliminates hit symbols based on `traceWay`.
   - `stopRespin()`: Calculates drop offsets, spawns incoming symbols, and executes downward fall animations.
2. **Variable-Height & Mega Symbol Physics**:
   - Accurately tracks symbols spanning multiple cells (`size > 1`) and offsets landing positions.
3. **Turbo / Fast-to-Result Scaling**:
   - Halves falling duration and compresses bounce intervals when `gameSettings.isTurboActive` is true.
4. **Resilient Interrupt Handling (`resetAllEffectAndTasks`)**:
   - Reconstructs exact visual matrix state if the player initiates a new spin or triggers reconnect during an active drop.
