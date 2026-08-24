---
id: "cc_slot_module:TurboButton:methods:onLoadExtend"
title: "TurboButton.onLoadExtend Method"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `TurboButton.onLoadExtend()`

---

## 1. Method Overview & Signature

Initializes `TurboButtonData` model, event listeners, observers, and input bindings.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.eventManager.on(GameUIEvents.TURBO.LOAD_CACHE_TURBO, this.loadCacheTurbo, this);
    this.turboModel = this.gameLogic.getDataModel().TurboButtonData;
    this.setupObserver();
    this.listenEvents();
}
```
