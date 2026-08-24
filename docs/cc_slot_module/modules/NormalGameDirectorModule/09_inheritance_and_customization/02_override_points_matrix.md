---
id: "cc_slot_module:NormalGameDirectorModule:customization:override_points_matrix"
title: "NormalGameDirectorModule Extension Points Matrix"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 NormalGameDirectorModule Extension Points Matrix

## 1. Extension Points Matrix

| Method Name | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`onJoinGameSuccess(data)`** | Emits `JOIN_GAME_SUCCESS` | `YES` | `MANDATORY` | Hook custom user level checks or welcome banners. |
| **`_normalGameRestart()`** | Resolves immediately | `YES` | None (Virtual) | Reset custom round flags and local multipliers. |
| **`onBackToGameMode(fromMode)`** | Plays BGM | `YES` | `MANDATORY` | Reset streak counters and progressive multipliers. |
