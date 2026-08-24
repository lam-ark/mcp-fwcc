---
id: "cc_slot_module:SlotPaylineSchedule:overview:scene_and_prefabs"
title: "SlotPaylineSchedule Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ SlotPaylineSchedule Scene Node Placement & Prefab Structure

---

## 1. Inspected Scene Node Placement

`SlotPaylineSchedule` is attached to `SlotTablePaylineModule` or mounted directly as a companion component on the `Payline` controller node:

```text
Canvas/Director/GameMode/MainGamePrefab
└── SlotTablePaylineModule [Node with Components]
    ├── SlotTablePaylineModule
    ├── PaylineConfig
    ├── SlotTablePaylineData
    ├── SlotPaylineSchedule (Component: SlotPaylineSchedule)
    └── SlotModuleEditorTag
```

---

## 2. Configuration Linkage

In `setConfig()`, `SlotPaylineSchedule` captures `this.timelineConfig = config.TIMELINE_CONFIG`, defining the interval (in seconds) per payline cycle step.
