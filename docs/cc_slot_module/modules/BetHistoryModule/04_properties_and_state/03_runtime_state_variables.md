---
id: "cc_slot_module:BetHistoryModule:properties:runtime_state_variables"
title: "BetHistoryModule Runtime State Variables"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 BetHistoryModule Runtime State Variables

---

## 1. State Table

| Field Name | Type | Default | Mutation Moment | Purpose & Guard Role |
| :--- | :--- | :--- | :--- | :--- |
| `modelData` | `any` | `null` | `setupObserver()` | Cached reference to `gameLogic.getDataModel().BetHistoryData`. |
| `isInit` | `boolean` | `false` | Component initialization | Guard flag preventing repeated init execution. |
| `popupBehavior` | `PopupBehavior` | `null` | `onLoadExtend()` (Base class) | Handles tween fade and modal scaling transitions. |
| `currentIsActive`| `boolean` | `false` | `togglePopup()` | Prevents redundant open/close tween executions. |
