---
id: "cc_slot_module:BaseDataModule:overview:scene_and_prefabs"
title: "BaseDataModule Scene Placement & Co-Location Architecture"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "overview", "scene"]
---

# 🌳 BaseDataModule Scene Placement & Co-Location Architecture

## 1. Co-Location Pattern

`BaseDataModule` subclasses are **always co-located** on the same scene node as their corresponding `SlotBaseModule` UI controller:

```text
Table Node (Canvas/Director/GameMode/BoardG/Table)
├── SlotTableModule (UI presentation & reel scrolling)
├── TableModuleConfig (Geometry parameters)
└── SlotTableData (BaseDataModule subclass: registeredKeys = ['matrix'])

Payline Node (Canvas/Director/GameMode/BoardG/Payline)
├── SlotTablePaylineModule (Visual line drawing)
└── SlotTablePaylineData (BaseDataModule subclass: registeredKeys = ['payLines', 'winAmount'])
```

---

## 2. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Role |
| :--- | :--- | :--- | :--- |
| **`registeredKeys`** | `string[]` | `[]` | Array of keys in `playSession` that this module subscribes to. |
| **`baseMode`** | `SlotBaseModule` | `null` | Sibling UI component reference auto-resolved in `onLoad()`. |
| **`gameMode`** | `number` | `undefined` | Inherited from `this.baseMode.gameMode`. |
| **`isRegistered`** | `boolean` | `false` | Registration flag tracked by `GameDataStore`. |
