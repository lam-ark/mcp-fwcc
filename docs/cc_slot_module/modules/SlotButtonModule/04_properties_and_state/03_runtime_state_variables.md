---
id: "cc_slot_module:SlotButtonModule:properties_and_state:runtime_state_variables"
title: "SlotButtonModule Runtime State Variables"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 SlotButtonModule Runtime State Variables

---

## 1. Runtime State Variables

| Variable | Type | Initial | Purpose |
| :--- | :--- | :--- | :--- |
| `touchNode` | `cc.Node` | `null` | Resolved touch area (`spinButtonTouch` or `display`). |
| `modelName` | `string` | `"SpinButton"`| Key used to locate data model in GameLogic. |
| `buttonModel` | `any` | `null` | Observed reactive data model instance. |
