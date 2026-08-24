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

## 2. Key Responsibilities & Subsystem Interactions

1. **Shared Node Pool with `SlotSymbolManager` (`SymbolOwnerType.CASCADE_SYMBOL`)**:
   - Borrows and recycles symbol nodes zero-allocation. Fetches by existing index (`getSymbolByIndex(index, CASCADE_SYMBOL)`) or retrieves available pool node (`getSymbolByIndex(UNUSED, CASCADE_SYMBOL)`).
2. **Direct Coordination with `SlotSymbolModule`**:
   - Invokes `SlotSymbolModule.getModuleComponent(symbol)` to configure `init(code, Vec2(1, size))`, `changeToSymbol(code)`, and emits `SHOW_STATIC` / `PLAY_ANIMATION_APPEAR`.
3. **Global Coordinate Re-Indexing (`setIndex`)**:
   - When surviving symbols drop to lower rows, mandatory invocation of `symbolComp.setIndex(this.getSymbolIndex(col, currentIndex))` ensures downstream win evaluations (`SlotTablePaylineModule`, `PaylineWinFrameModule`) identify winning coordinates accurately.
4. **Display Ownership Handover with Table (`SlotTableModule`)**:
   - `SlotTableModule` renders base rolling and initial spin stop ➔ `VerticalCascadeModule` assumes exclusive control over tumble animations inside `this.container` ➔ Safely restores state on interruption via `resetAllEffectAndTasks()`.
5. **Turbo / Fast-to-Result Scaling**:
   - Dynamically scales falling durations and bounce easing ($+10\text{px}$) according to `gameSettings.isTurboActive`.
