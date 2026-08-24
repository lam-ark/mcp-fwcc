---
id: "cc_slot_module:BonusGameDirectorModule:properties:runtime_state_variables"
title: "BonusGameDirectorModule Runtime State Variables"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "properties", "runtime_state"]
---

# 💾 BonusGameDirectorModule Runtime State Variables

## 1. Runtime State Reference Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Role |
| :--- | :--- | :--- | :--- | :--- |
| **`openedBoxes`** | `number[]` | `[]` | `onClickItem()`, `_clearCurrentBonusGameData()` | List of chest indices already selected to prevent duplicate touches. |
| **`countdownTime`**| `number` | `0` | `startCountDown()`, `resetCountDown()` | Current countdown timer value in seconds. |
| **`selectedBox`** | `number` | `0` | `onClickItem()` | Index of most recently tapped chest. |
| **`isAutoOpen`** | `boolean` | `false` | `setAutoOpen()` | Flag indicating whether current reveal was auto-triggered on timeout. |
| **`isInit`** | `boolean` | `false` | `initBonusGame()` | Prevents re-instantiating pick grid on multiple entries. |
