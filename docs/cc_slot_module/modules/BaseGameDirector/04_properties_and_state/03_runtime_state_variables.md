---
id: "cc_slot_module:BaseGameDirector:properties:runtime_state_variables"
title: "BaseGameDirector Runtime State Variables"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "properties", "runtime_state", "variables", "executor", "writer"]
---

# 💾 BaseGameDirector Runtime State Variables

## 1. Runtime Variables Reference Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Purpose & Role |
| :--- | :--- | :--- | :--- | :--- |
| **`director`** | `any` | `null` | `init()` | Reference to the director instance (`this.node["director"]`). |
| **`writer`** | `any` | `null` | `init()` | Reference to the companion script writer (`this.node["writer"]`). |
| **`executor`** | `ScriptExecutor` | `null` | `init()` | The active asynchronous script step queue processor. |
| **`scripts`** | `script[]` | `undefined` | `executor` | Active list of command steps currently executing. |
| **`forceToExitMode`** | `boolean` | `false` | `forceToExit()` | Flag indicating whether the mode is currently aborting. |
| **`callBackWhenHide`** | `any` | `null` | Director | Callback invoked when the director node is deactivated. |
