---
id: "cc_slot_module:SlotTablePaylineModule:overview:scene_and_prefabs"
title: "SlotTablePaylineModule Scene Hierarchy & Component Tree"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "overview", "scene_prefabs"]
---

# 🏛️ SlotTablePaylineModule Scene Hierarchy & Component Tree

---

## 1. Canonical Hierarchy Placement

`SlotTablePaylineModule` sits inside `BoardG` alongside `Table`:

```text
Canvas
└── Canvas/Director
    └── Canvas/Director/GameMode
        └── BoardG
            ├── Table (SlotTableModule)
            └── Payline (SlotTablePaylineModule, PaylineConfig, SlotTablePaylineData, SlotPaylineSchedule)
                ├── WinSymbolsLayer (PaylineSymbolModule)
                ├── WinFramesLayer (PaylineWinFrameModule)
                ├── LineDrawingLayer (PaylineLineModule)
                └── LineNumberLayer (PaylineNumberModule)
```

---

## 2. Component Composition

| Component | Class Type | Role |
| :--- | :--- | :--- |
| **`SlotTablePaylineModule`** | `SlotBaseModule` | Orchestrator holding `payLineEmitter` and routing `SETUP_PAYLINES`. |
| **`PaylineConfig`** | `cc.Component` | Configuration specifying `PAYLINE_TYPE` (Lines, AllWays, Cluster, ScatterPay), `TABLE_CONFIG`, `PAY_LINE_MATRIX`. |
| **`SlotTablePaylineData`** | `BaseDataModule` | Reactive store parsing `payLines`, `rightPayLines`, `jackpotPayline`, and `matrix`. |
| **`SlotPaylineSchedule`** | `BasePaylineComponent` | Controls the step timer iterating through individual paylines during idle states. |
| **`PaylineSymbolModule`** | `BasePaylineComponent` | Highlights and animates winning symbols on top of the reel table. |
| **`PaylineWinFrameModule`**| `BasePaylineComponent` | Draws decorative borders around winning coordinate cells. |
| **`PaylineLineModule`** | `BasePaylineComponent` | Draws vector lines connecting symbol positions across the matrix. |
| **`PaylineNumberModule`** | `BasePaylineComponent` | Activates payline index numbers on the left and right borders of the reel window. |
