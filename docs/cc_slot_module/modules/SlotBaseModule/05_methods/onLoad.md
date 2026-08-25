---
id: "cc_slot_module:SlotBaseModule:methods:onLoad"
title: "SlotBaseModule.onLoad Method"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "methods", "onLoad"]
---

# 📖 `SlotBaseModule.onLoad()`

---

## 1. Method Overview & Signature

Base engine initialization lifecycle method that discovers the game ID, injects services via `applyInjections`, listens to `RESET_ALL_EFFECT_AND_TASKS`, and delegates to `onLoadExtend()` and `registerEvents()`.

```typescript
public onLoad(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoad(): void {
    const gameId = NodeUtils.getGameIdFromNode(this.node);
    applyInjections(this, gameId);
    if (this.gameLogic) {
        this.gameLogic.on("RESET_ALL_EFFECT_AND_TASKS", this.resetAllEffectAndTasks, this);
    }
    
    this.onLoadExtend();
    this.registerEvents();
}
```
