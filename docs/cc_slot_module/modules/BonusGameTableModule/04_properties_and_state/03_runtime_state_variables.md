---
id: "cc_slot_module:BonusGameTableModule:properties:runtime_state_variables"
title: "BonusGameTableModule Runtime State Variables"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "properties", "runtime_state"]
---

# 💾 BonusGameTableModule Runtime State Variables

## 1. Runtime State Reference Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Role |
| :--- | :--- | :--- | :--- | :--- |
| **`listBoxes`** | `cc.Node[]` | `[]` | `initBoxes()` | Array of instantiated chest nodes. |
| **`resultList`** | `any[]` | `[]` | `updateCurrentMatrix()` | Pool distribution tracker for calculating unpicked prize allocations. |
| **`boxValues`** | `any[]` | `[]` | `setBoxValues()` | Prize pool templates (`REWARD_BOX_VALUE`, `JACKPOT_BOX_VALUE`). |
| **`startX` / `startY`**| `number` | `0` | `initBoxes()` | Top-left centering offset coordinates. |
