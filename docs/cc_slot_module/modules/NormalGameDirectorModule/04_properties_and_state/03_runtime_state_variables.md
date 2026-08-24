---
id: "cc_slot_module:NormalGameDirectorModule:properties:runtime_state_variables"
title: "NormalGameDirectorModule Runtime State Variables"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "properties", "runtime_state"]
---

# 💾 NormalGameDirectorModule Runtime State Variables

## 1. Runtime State Variables Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`forceToExitMode`** | `boolean` | `false` | `forceToExit()` | Halts regular base game spin loops immediately. |
| **`isResume`** | `boolean` | `false` | `onStateUpdate()` | Tracks whether current turn is resuming an unfinished round. |
