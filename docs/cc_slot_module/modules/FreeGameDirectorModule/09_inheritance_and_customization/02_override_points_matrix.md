---
id: "cc_slot_module:FreeGameDirectorModule:customization:override_points_matrix"
title: "FreeGameDirectorModule Extension Points Matrix"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 FreeGameDirectorModule Extension Points Matrix

## 1. Extension Points Matrix

| Method Name | Default Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`enter()`** | Plays BGM, syncs badges, renders table | `YES` | `MANDATORY` | Initialize feature multipliers or custom intro VFX. |
| **`_showWinPayline(data)`**| Displays cumulative `winAmountPS` | `YES` | `RECOMMENDED` | Ingesting escalating multiplier animations. |
| **`delayAutoSpin()`** | 0.5s pause | `YES` | None | Adjusting speed between consecutive free spins. |
| **`_gameExit()`** | Clears paylines & syncs table | `YES` | `RECOMMENDED` | Outro animations before returning to Base Game. |
