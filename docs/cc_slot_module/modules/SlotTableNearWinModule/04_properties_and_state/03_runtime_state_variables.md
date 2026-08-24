---
id: "cc_slot_module:SlotTableNearWinModule:properties:runtime_state_variables"
title: "SlotTableNearWinModule Runtime State Variables"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 SlotTableNearWinModule Runtime State Variables

---

## 1. Internal Variables Table

| Field Name | Type | Default | Mutation Moment | Purpose & Guard Role |
| :--- | :--- | :--- | :--- | :--- |
| `_isSkipEffect` | `boolean` | `false` | `setupNearWin` | Set to `true` when Turbo mode is active, bypassing overlay playback. |
| `config` | `TableModuleConfig` | `null` | `onLoadExtend` | Reference to sibling configuration component. |
| `_startX` | `number` | `0` | `initNearWinValue` | Starting X coordinate for column index `0`. |
| `_countScatter` | `number` | `0` | `setupNearWin`, `resetNearWin` | Cumulative Scatter count in evaluated matrix. |
| `_countBonus` | `number` | `0` | `setupNearWin`, `resetNearWin` | Cumulative Bonus count in evaluated matrix. |
| `_countJp` | `number` | `0` | `setupNearWin`, `resetNearWin` | Cumulative Jackpot count in evaluated matrix. |
| `_nearWinData` | `any[]` | `[]` | `setupNearWin`, `resetNearWin` | Per-column anticipation data matrix (`{ isNearWin, ... }`). |
| `_nearWinAnim` | `any` | `null` | `_getAnimNearWin` | Cached `sp.Skeleton` or `cc.Animation` instance. |
| `_nearWinSymbols`| `cc.Node[]`| `[]` | `initNearWinValue` | Cached symbol node references. |
