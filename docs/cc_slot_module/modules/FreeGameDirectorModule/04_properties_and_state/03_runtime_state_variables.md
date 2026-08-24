---
id: "cc_slot_module:FreeGameDirectorModule:properties:runtime_state_variables"
title: "FreeGameDirectorModule Runtime State Variables"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "properties", "runtime_state"]
---

# 💾 FreeGameDirectorModule Runtime State Variables

## 1. Runtime State Variables Reference Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Role |
| :--- | :--- | :--- | :--- | :--- |
| **`isFirstAutoSpin`** | `boolean` | `false` | `enter()`, `_beforeSpinStart()` | Bypasses `delayAutoSpin` on the initial free spin. |
| **`spinTimes`** | `cc.Node` | `null` | `setUpSpinTimes()` | Reference to the SpinTimes HUD badge node. |
| **`slotButton`** | `cc.Node` | `null` | `setUpSlotButton()` | Reference to the spin button control node. |
