---
id: "cc_slot_module:GameEventManager:customization:override_points_matrix"
title: "GameEventManager API Consumption vs Override Matrix"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "customization", "override_matrix", "api"]
---

# 📊 GameEventManager API Consumption vs Override Matrix

## 1. Method Consumption Matrix

Because `GameEventManager` is a singleton service provided by `GameInit`, game developers consume its public API directly rather than overriding methods:

| Method Name | Safe to Override? | Consumption Role in New Games |
| :--- | :--- | :--- |
| **`on(event, listener, context)`** | `FORBIDDEN` | Subscribes custom UI/VFX handlers to custom game topics. |
| **`off(event, listener, context)`** | `FORBIDDEN` | Removes specific event subscriber callback. |
| **`emit(event, ...args)`** | `FORBIDDEN` | Asynchronously broadcasts game events to all subscribers in parallel. |
| **`targetOff(context)`** | `FORBIDDEN` | **Mandatory call** inside `onDestroy()` of every subscriber component. |
| **`setLogger(logger, tag)`** | `FORBIDDEN` | Invoked by `GameInit` to configure console prefix filter. |
| **`destroy()`** | `FORBIDDEN` | Invoked automatically on scene teardown by `GameInit.onDestroy()`. |
