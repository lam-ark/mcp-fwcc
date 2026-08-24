---
id: "cc_slot_module:JackpotModule:methods:onLoadExtend"
title: "JackpotModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `JackpotModule.onLoadExtend()`

---

## 1. Method Overview & Signature

Binds event handlers and initializes observers for data models.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.eventManager.on(GameUIEvents.JACKPOT.PAUSE_JACKPOT, this.pauseJackpot, this);
    this.eventManager.on(GameUIEvents.JACKPOT.RESUME_JACKPOT, this.resumeJackpot, this);
    this.eventManager.on(GameUIEvents.JACKPOT.UPDATE_JACKPOT_VALUE, this.updateJackpotValue, this);

    this.jackpotData = this.gameLogic.getDataModel()[this.modelName];
    this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;

    this.setupJackpotObserver();
    this.setupObserver();
}
```
