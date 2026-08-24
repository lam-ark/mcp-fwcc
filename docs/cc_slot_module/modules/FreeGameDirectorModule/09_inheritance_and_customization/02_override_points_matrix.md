---
id: "cc_slot_module:FreeGameDirectorModule:customization:override_points_matrix"
title: "FreeGameDirectorModule Extension Points Matrix"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 FreeGameDirectorModule Extension Points Matrix

## 1. Extension Points Matrix

| Method Name | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`enter()`** | Starts Free BGM & syncs spin times | `EXTEND_ONLY` | `MANDATORY` | Trigger intro banner effects and reset progressive feature multipliers. |
| **`syncSpinTimes()`** | Reads `playSession` & emits `UPDATE_SPINTIMES` | `YES` | `RECOMMENDED` | Format special localized spin counter labels. |
| **`_decreaseFreeGameSpinTimes()`**| Decrements `freeSpinTimes` state | `YES` | `MANDATORY` | Animate spin countdown coin burns or flame pulses. |
| **`_gameExit()`** | Clears paylines & syncs table | `EXTEND_ONLY` | `MANDATORY` | Broadcast `RESET_MULTIPLIER` and transition BGM back to Base Game. |
