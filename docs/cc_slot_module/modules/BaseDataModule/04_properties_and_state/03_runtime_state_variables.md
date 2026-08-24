---
id: "cc_slot_module:BaseDataModule:properties:runtime_state_variables"
title: "BaseDataModule Runtime State Variables"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "properties", "runtime_state"]
---

# 💾 BaseDataModule Runtime State Variables

## 1. Runtime State Variables Reference Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Role |
| :--- | :--- | :--- | :--- | :--- |
| **`isRegistered`** | `boolean` | `false` | `GameDataStore.registerModule()` | Tracks if this instance is actively registered in the data store. |
| **`gameMode`** | `number` | `undefined` | `onLoad()` | Game mode constant copied from `this.baseMode.gameMode`. |
| **`[key: string]`** | `any` | `null` | `onDataUpdate()`, `clearData()` | Dynamic storage slots for all registered key values. |
