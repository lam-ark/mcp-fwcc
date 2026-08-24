---
id: "cc_slot_module:GameEventManager:events:scoped_module_events"
title: "GameEventManager Relationship with Scoped Node Events"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "events", "scoped_events"]
---

# 📡 GameEventManager Relationship with Scoped Node Events

## 1. Global Bus vs Scoped Bus

`GameEventManager` is the **Global Bus** (`this.eventManager`), distinct from the local node event bus (`this.node.emit` / `this.moduleEvent`):

| Comparison Vector | `GameEventManager` (`this.eventManager`) | Scoped Node Bus (`this.moduleEvent`) |
| :--- | :--- | :--- |
| **Scope** | Entire application lifecycle | Local mode container (`moduleList`) |
| **Async Support** | Fully async via `await emit()` + `Promise.all()` | Synchronous standard Cocos Creator event tree |
| **Memory Cleanup** | `targetOff(context)` inside `onDestroy()` | Automatic on Node destruction |
