---
id: "cc_slot_module:BetHistoryDetailModule:properties:runtime_state_variables"
title: "BetHistoryDetailModule Runtime State Variables"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 BetHistoryDetailModule Runtime State Variables

---

## 1. State Table

| Field Name | Type | Default | Purpose & Guard Role |
| :--- | :--- | :--- | :--- |
| `scrollPool` | `cc.NodePool` | `null` | Zero-allocation pool for `ScrollModeItem` tab nodes. |
| `usingScrollItem`| `cc.Node[]` | `[]` | List of currently active tab nodes mounted in `scrollContent`. |
| `betHistoryData` | `any` | `null` | Cached reference to `BetHistoryData`. |
| `betHistoryDetailData`| `any` | `null` | Cached reference to `BetHistoryDetailData`. |
