---
id: "cc_slot_module:FreeOptionDirectorModule:overview:scene_and_prefabs"
title: "FreeOptionDirectorModule Scene Hierarchy & Inspector Layout"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "overview", "scene"]
---

# 🌳 FreeOptionDirectorModule Scene Hierarchy & Inspector Layout

## 1. Scene Hierarchy Placement

Attached under `Canvas/Director/GameMode/FreeOptionDirector`:

```text
Canvas/Director/GameMode/FreeOptionDirector
├── FreeOptionDirectorModule (Component)
├── OptionContainer
│   ├── Option_1 (cc.Button, optionId: "1" - e.g. 15 Spins, 2x Multiplier)
│   ├── Option_2 (cc.Button, optionId: "2" - e.g. 10 Spins, 3x Multiplier)
│   ├── Option_3 (cc.Button, optionId: "3" - e.g. 5 Spins, 5x Multiplier)
│   └── Option_Mystery (cc.Button, optionId: "4" - Random Choice)
└── CountDownLabel (cc.Label - "Auto select in 15s")
```

---

## 2. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Role |
| :--- | :--- | :--- | :--- |
| **`options`** | `SlotCustomFreeGameOption[]` | `[]` | Array of objects `{ optionNode: cc.Node, optionId: string }`. |
| **`countDownText`** | `cc.Label` | `null` | Target label node for rendering the timer message. |
| **`countdownTime`** | `number` | `15` | Total countdown duration in seconds before auto-picking. |
