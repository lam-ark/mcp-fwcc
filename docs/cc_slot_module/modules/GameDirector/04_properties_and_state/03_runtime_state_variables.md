---
id: "cc_slot_module:GameDirector:properties:runtime_state_variables"
title: "GameDirector Runtime State Variables"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "properties", "runtime_state"]
---

# 💾 GameDirector Runtime State Variables

## 1. Runtime State Reference Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Role |
| :--- | :--- | :--- | :--- | :--- |
| **`currentModes`** | `GameModeType[]` | `[]` | `onSwitchGameMode()`, `onExitGameMode()` | LIFO stack storing the hierarchy of active and previous game modes. |
| **`appHide`** | `boolean` | `false` | `onEventHide()`, `onEventShow()` | Flag indicating whether the browser game tab is currently hidden. |
| **`_currentRunningTargets`** | `any[]` | `[]` | `pauseRunningActions()` | Snapshot of active action targets paused when tab is hidden. |
