---
id: "cc_slot_module:BaseUIPopup:properties_and_state:runtime_state_variables"
title: "BaseUIPopup Runtime State Variables"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 BaseUIPopup Runtime State Variables

---

## 1. Runtime State

| Variable | Type | Initial | Description |
| :--- | :--- | :--- | :--- |
| `popupBehavior` | `PopupBehavior` | `null` | Reference to animation behavior component. |
| `isClose` | `boolean` | `false` | Tracks whether the popup is in closed state. |
| `currentIsActive`| `boolean` | `false` | Tracks active toggle state to prevent redundant transitions. |
