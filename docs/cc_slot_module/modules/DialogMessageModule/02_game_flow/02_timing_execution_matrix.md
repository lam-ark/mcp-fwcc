---
id: "cc_slot_module:DialogMessageModule:game_flow:timing_execution_matrix"
title: "DialogMessageModule Timing Matrix"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "game_flow", "timing"]
---

# 📊 DialogMessageModule Timing Matrix

---

## 1. Timing Table

| Action | Invoker | Method | State Mutation |
| :--- | :--- | :--- | :--- |
| **Show Alert** | Network Socket / Logic | `showDialog(true)` | `node.active = true` |
| **Confirm** | User Click | `onConfirmPressed()` | Emits `ON_ACTION_OK` |
| **Cancel** | User Click | `onCancelPressed()` | Emits `ON_ACTION_CANCEL` |
