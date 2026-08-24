---
id: "cc_slot_module:FreeOptionDirectorModule:overview:scene_and_prefabs"
title: "FreeOptionDirectorModule Scene Hierarchy & Inspector Properties"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "overview", "scene", "prefabs"]
---

# 🌳 FreeOptionDirectorModule Scene Hierarchy & Inspector Properties

## 1. Scene Graph Hierarchy

Mounted under `Canvas/Director/GameMode/FreeOption`:

```text
Canvas (cc.Canvas)
└── Canvas/Director
    └── Canvas/Director/GameMode
        └── FreeOption ➔ [Mounted: FreeOptionDirectorModule]
            ├── BG_Overlay (Darkened backdrop)
            ├── CountDownText (cc.Label - countdown string)
            └── OptionsContainer
                ├── Option_0 (cc.Node + cc.Button - High Spins / Low Multiplier)
                ├── Option_1 (cc.Node + cc.Button - Low Spins / High Multiplier)
                └── Option_Mystery (cc.Node + cc.Button - Mystery Volatility)
```

---

## 2. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Purpose |
| :--- | :--- | :--- | :--- |
| **`options`** | `SlotCustomFreeGameOption[]` | `[]` | Array mapping `optionId` strings to target `optionNode` references. |
| **`countDownText`** | `cc.Label` | `null` | Label node rendering countdown strings (e.g. "Auto choose in 14s"). |
| **`countdownTime`** | `number` | `15` | Timeout duration in seconds before random selection triggers. |
