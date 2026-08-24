---
id: "cc_slot_module:GameEventManager:methods:index"
title: "GameEventManager Methods & API Index"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "methods", "api", "index"]
---

# 🚀 GameEventManager Methods & API Index

## 1. Master Method Index

| Method Signature | Visibility | Return Type | Brief Purpose |
| :--- | :--- | :--- | :--- |
| **[`on(event, listener, context): void`](./on.md)** | `public` | `void` | Registers a listener callback for a specific event topic with optional context. |
| **[`off(event, listener, context): void`](./off.md)** | `public` | `void` | Removes a specific listener matching callback function and context. |
| **[`emit(event, ...args): Promise<void>`](./emit.md)** | `public` | `Promise<void>` | Asynchronously dispatches event to all subscribers and awaits `Promise.all()`. |
| **[`targetOff(context): void`](./targetOff.md)** | `public` | `void` | Removes all registered listeners bound to a target context object across all topics. |
| **[`setLogger(logger, logTag): void`](./setLogger.md)** | `public` | `void` | Injects custom logger instance and registers debug log prefix filter. |
| **[`destroy(): void`](./destroy.md)** | `public` | `void` | Clears all internal event topic subscriber tables. |
