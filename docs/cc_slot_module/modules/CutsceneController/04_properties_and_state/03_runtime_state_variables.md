---
id: "cc_slot_module:CutsceneController:properties_and_state:runtime_state_variables"
title: "CutsceneController Runtime State Variables"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 CutsceneController Runtime State Variables

---

## 1. Internal State Map

| Field Name | Type | Initial | Purpose |
| :--- | :--- | :--- | :--- |
| `cutScenes` | `Map<number, BaseCutscene>` | `new Map()` | Map associating `CUTSCENE_TYPE_ENUM` values with instances. |
