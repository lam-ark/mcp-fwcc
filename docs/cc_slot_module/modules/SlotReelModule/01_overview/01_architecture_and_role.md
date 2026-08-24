---
id: "cc_slot_module:SlotReelModule:overview:architecture_and_role"
title: "SlotReelModule Architectural Role & Column Physics"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "overview", "architecture", "reel_physics", "scrolling"]
---

# 🎰 SlotReelModule Architectural Role & Column Physics

---

## 1. Architectural Purpose & System Boundary

`SlotReelModule` (`assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotReelModule.ts`) is the **Single Column Reel Scrolling Engine** in the `cc-common` Slot Framework.

Extending `cc.Component` and implementing `IReelComponent`, each reel instance is dynamically spawned and managed by `SlotTableModule`. It coordinates vertical pixel translation, continuous symbol recycling during rolling, buffer boundary wrapping, near-win anticipation extensions, and bounce-landing easing animations (`easeBackOut`).

```mermaid
graph TD
    Table[SlotTableModule] -->|Instantiates & Triggers| Reel[SlotReelModule Column]
    Reel -->|Manages Steps & Speed| ReelMgr[ReelManager FSM State]
    Reel -->|Checks Out & Recycles| Pool[SlotSymbolManager NodePool]
    Reel -->|Translates Downwards| Symbols[SlotSymbolModule Nodes Array]
```

---

## 2. Core Responsibilities

1. **Reel FSM Lifecycle (`ReelManager`)**: Manages 4 states (`IDLE`, `START`, `SHOWING_RESULT`, `STOPPED`).
2. **Infinite Wrapping & Recycling (`recycleSymbol` & `spawnReelSymbol`)**: Pops symbols scrolling beyond the bottom buffer and instantiates/recycles new symbols at the top buffer.
3. **Landing Physics (`playStopAnimation`)**: Executes two-phase bounce overshoot and landing easing (`getPositionStopStep()`).
4. **Anticipation Extension (`extendTimeToStop`)**: Delays column deceleration for near-win scatter tension.
5. **Symbol Grid Extraction (`getRealSymbols`, `getSymbolByRow`)**: Filters out offscreen top/bottom buffer rows to provide clean visible symbol node references.
