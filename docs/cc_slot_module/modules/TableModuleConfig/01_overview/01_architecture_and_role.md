---
id: "cc_slot_module:TableModuleConfig:overview:architecture_and_role"
title: "TableModuleConfig Grid Geometry & Speed Profiles Architecture"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "overview", "architecture", "table_format", "symbol_indexes", "speed_modes"]
---

# 🏛️ TableModuleConfig Grid Geometry & Speed Profiles Architecture

## 1. Executive Summary & Purpose

`TableModuleConfig` (`assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/TableModuleConfig.ts`) is the **Central Geometric, Speed Tuning & Matrix Index Configuration Authority** for the Table Subsystem in the `cc-common` Slot SDK.

Attached to the Table root node (`Canvas/Director/GameMode/BoardG/Table`), it defines the physical grid format (`TABLE_FORMAT`), symbol bounding dimensions (`SYMBOL_WIDTH`, `SYMBOL_HEIGHT`), buffer rendering bounds (`BUFFER_TOP`, `BUFFER_BOT`), spinning speed profiles (`MODES.NORMAL`, `MODES.TURBO`), special symbol identifiers (`SCATTER_SYMBOL`, `WILD_SYMBOL`, `BONUS_SYMBOL`), Near-Win anticipation delay intervals, and automatically generates coordinate index mappings (`SYMBOL_INDEXES`).

```mermaid
graph TD
    Config[TableModuleConfig Component] -->|TABLE_FORMAT [3,3,3,3,3]| Indexes[SYMBOL_INDEXES Coordinate Mapping Matrix]
    Config -->|SYMBOL_WIDTH, SYMBOL_HEIGHT| Grid[Grid Dimensions & Column Positioning]
    Config -->|MODES.NORMAL / MODES.TURBO| Speeds[Reel Deceleration Curves & Step Timings]
    Config -->|RANDOM_MATRIX / BEAUTY_MATRIX| Fallbacks[Fallback Matrix Providers]

    Indexes -->|Index Coordinates 0..14| SymbolMgr[SlotSymbolManager]
    Indexes -->|Coordinate Lookup| Paylines[SlotTablePaylineModule]
    Speeds -->|Speed & Easing Configs| Reels[SlotReelModule Columns]
    Grid -->|Column Offsets| Table[SlotTableModule]
```

---

## 2. Core Responsibilities

1. **Grid Geometry Definition (`TABLE_FORMAT`, `SYMBOL_WIDTH`, `SYMBOL_HEIGHT`)**: Establishes the column counts and row heights (e.g. `[3, 3, 3, 3, 3]`), governing column instantiation and layout in `SlotTableModule`.
2. **Matrix Index Calculation (`SYMBOL_INDEXES`)**: Lazily calculates and caches a 2D integer matrix of sequential symbol indices using `eno.SlotUtils.generateSymbolIndexes(TABLE_FORMAT)`.
3. **Spinning Physics & Speed Presets (`MODES`)**: Calibrates speed constants, deceleration steps (`stepStop`), easing durations (`easingTimeStop`), and slowdown factors for Normal vs Turbo modes.
4. **Special Symbol Cataloging (`SCATTER_SYMBOL`, `WILD_SYMBOL`, etc.)**: Declares token constants for feature symbols used across Near-Win evaluation and payline matching.
5. **Attract & Fallback Matrix Generation (`getRandomMatrix`, `getRandomBeautyMatrix`)**: Provides randomized symbol grids for disconnected states and beauty matrices for initial scene load.
