---
id: "cc_slot_module:PaylineSymbolModule:overview:architecture_and_role"
title: "PaylineSymbolModule Architecture & Role"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "overview", "architecture", "symbol_win_animation"]
---

# 🏛️ PaylineSymbolModule Architecture & Role

---

## 1. Architectural Purpose

`PaylineSymbolModule` (`assets/cc-common/cc-slot-module/BaseModule/Payline/PaylineModule/scripts/PaylineSymbolModule.ts`) is the **Symbol Win Presentation Engine** in the `cc-common` Payline subsystem.

It dynamically reparents winning `SlotSymbolModule` instances into a top-level `container` layer above the reel mask, triggers Spine skeleton win animations (`PLAY_ANIMATION_WIN`), dims non-winning symbols (`SHOW_STATIC`, `DISABLE_HIGHLIGHT`), and re-sorts z-indices via `SlotSymbolManager.updateSymbolSiblingIndex()`.

```mermaid
graph TD
    Emitter[payLineEmitter EventTarget] -->|PAYLINE_BLINK_ALL / PAYLINE_SHOW_LINE| PSM[PaylineSymbolModule]
    PSM -->|getSymbolByIndex| SSM[SlotSymbolManager Factory]
    PSM -->|changeParent to container| TopLayer[Win Symbols Layer - Above Reel Masks]
    PSM -->|symbol.emit: PLAY_ANIMATION_WIN| SymNode[Winning SlotSymbolModule Nodes]
    PSM -->|symbol.emit: DISABLE_HIGHLIGHT| DimNode[Non-Winning Dimmed Nodes]
    PSM -->|updateSymbolSiblingIndex| SSM
```

---

## 2. Core Responsibilities

1. **Symbol Mapping (`mapSymbolToPayLine`)**: Bridges matrix coordinates `[reel][row]` to active pooled symbol instances from `SlotSymbolManager`.
2. **Win Animation Orchestration (`showListWinSymbols`)**: Dimms unhit symbols and activates win loops/spines for participating hit symbols.
3. **Z-Ordering & Parent Transfer**: Reparents symbols into `this.container` or `disableHighlightContainer` ensuring win animations are never clipped by column mask rects.
4. **Lifecycle Recycling (`clearAll`)**: Returns reparented symbols safely to `SlotSymbolManager` and resets highlight flags.
