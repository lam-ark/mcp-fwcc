---
id: "cc_slot_module:GameInit:events:global_event_bus"
title: "GameInit Global Event Bus Interactions"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "events", "global_events", "eventManager", "GameEventManager"]
---

# 🌐 GameInit Global Event Bus Interactions

## 1. Global Event Bus Setup

`GameInit` creates the master `GameEventManager` singleton during `onLoad()`:

```typescript
setupEventManager(): void {
    this._eventManager = new GameEventManager();
    this._eventManager.setLogger(this._logger, '[EventManager]');
}
```

---

## 2. Event Registry Lifecycle

* **Instantiation**: Created in `setupEventManager()` on Frame 0.
* **Service Provision**: Registered into the IoC Container via `provide(GameEventManager, this._eventManager, gameId)`.
* **Teardown**: Destroyed on `GameInit.onDestroy()` with `this._eventManager.destroy()`.
