---
id: "game-implement:9666:stack_wild:architecture"
title: "Red Cliff (g9666) Stack Wild Subsystem Architecture & Data Model"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "StackWildModule", "StackWildModuleData", "StackWildModuleConfig", "K2", "architecture"]
---

# 🌲 Red Cliff (g9666) Stack Wild Subsystem Architecture & Data Model

---

## 1. Subsystem Overview & Symbol Code `K2`

In Red Cliff (`g9666`), the **Stack Wild** (Expanding Wild) is represented by symbol code **`K2`**:
- **Trigger Location**: Only appears on the Top Horizontal Reel (columns 2, 3, 4, 5).
- **Core Mechanism**: When `K2` lands on top reel index $i \in [0, 1, 2, 3]$, it triggers a full-column vertical expansion covering all rows of the corresponding main vertical reel ($i + 1 \in [1, 2, 3, 4]$) with Wild symbols (`K`).

```mermaid
graph TD
    A[Top Horizontal Reel Lands 'K2'] --> B[HorizontalTableModule9666 emits STACK_WILD_LANDED]
    B --> C[StackWildModule._runStackWildLanded]
    C --> D[StackWildModuleData.getStackWildIndexes -> Top Reel Index 0..3]
    D --> E[Column Center Position Calculation]
    E --> F[Play Column Spine Effect 'in' -> 'loop']
    F --> G[Instantiate 'K' Symbols Row by Row]
    G --> H[Play Column Spine Effect 'out']
    H --> I[Sync with SlotTableModule9666 via SYNC_STACK_WILD_TO_TABLE]
```

---

## 2. Key Component Breakdown

| Component | Source File | Responsibilities |
| :--- | :--- | :--- |
| **`StackWildModule`** | [`StackWildModule.ts`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Table/StackWildModule.ts) | Main controller managing lifecycle, Spine column animations, row reveal pacing, and sync events. |
| **`StackWildModuleData`** | [`StackWildModuleData.ts`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Table/StackWildModuleData.ts) | Maps top reel indices to main table columns, calculates symbol coordinate bounds and center points. |
| **`StackWildModuleConfig`** | [`StackWildModuleConfig.ts`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Table/StackWildModuleConfig.ts) | Timing parameters (`STACK_WILD_DELAY`, `STACK_WILD_DURATION`, Turbo multipliers). |
