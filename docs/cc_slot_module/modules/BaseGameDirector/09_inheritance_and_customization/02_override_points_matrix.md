---
id: "cc_slot_module:BaseGameDirector:customization:override_points_matrix"
title: "BaseGameDirector Extension Points & Override Matrix"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 BaseGameDirector Extension Points & Override Matrix

## 1. Extension Points Matrix

| Method Name | Base Class Implementation | Safe to Override? | Required `super` Call | Customization Purpose in New Game |
| :--- | :--- | :--- | :--- | :--- |
| **`onExtendedLoad()`** | Empty virtual hook | `YES (Recommended)` | None (Virtual) | Resolve child node components and wire sub-directors. |
| **`init()`** | Binds writer & creates `ScriptExecutor` | `YES` | `MANDATORY` | Initialize additional game-specific sub-controllers. |
| **`runAction(actionName, data)`** | Delegates to `executor.runAction` | `EXTEND_ONLY` | `MANDATORY` | Hook pre-action or post-action logging / analytics. |
| **`forceToExit(script)`** | Delegates to `executor.forceToExit` | `YES` | `MANDATORY` | Abort additional game-specific tweens and particle emitters. |
| **`onDestroy()`** | Calls `executor.destroy()` | `YES` | `MANDATORY` | Release custom singleton listeners. |
