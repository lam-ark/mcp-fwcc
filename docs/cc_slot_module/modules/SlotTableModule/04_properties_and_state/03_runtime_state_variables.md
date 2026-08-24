---
id: "cc_slot_module:SlotTableModule:properties:runtime_state_variables"
title: "SlotTableModule Runtime State Variables"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "properties", "runtime_state"]
---

# 💾 SlotTableModule Runtime State Variables

## 1. Runtime State Reference Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Role |
| :--- | :--- | :--- | :--- | :--- |
| **`state`** | `TableSpinState` | `READY` (`0`) | `onChangeState()` | Active spinning state machine flag. |
| **`reels`** | `(cc.Component & IReelComponent)[]` | `[]` | `initTable()` | Array of instantiated column reel controllers. |
| **`_matrix`** | `string[][]` | `[]` | `stopSpin()`, `syncTable()` | 2D matrix array of target symbol IDs. |
| **`_lastMatrix`** | `string[][]` | `[]` | `stopSpin()`, `syncTable()` | Prior spin snapshot used for resume and diff calculations. |
| **`reelCount`** | `number` | `0` | `onReelStop()`, `startSpin()` | Number of stopped columns during active deceleration phase. |
| **`_tableStopCB`**| `Function` | `null` | `stopSpin()`, `onReelStop()` | Resolve callback for the `stopSpin()` Promise. |
| **`START_X`** | `number` | `0` | `initTable()` | Horizontal centering offset for column 0. |
| **`TOTAL_COLS`** | `number` | `5` | `getConfigValue()` | Number of columns declared in `TABLE_FORMAT`. |
| **`SYMBOL_WIDTH`**| `number` | `140` | `getConfigValue()` | Pitch distance in pixels between reel columns. |
