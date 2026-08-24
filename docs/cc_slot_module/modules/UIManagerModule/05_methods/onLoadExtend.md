---
id: "cc_slot_module:UIManagerModule:methods:onLoadExtend"
title: "UIManagerModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `UIManagerModule.onLoadExtend()`

---

## 1. Method Overview & Signature

Binds `UPDATE_GAME_MODE_UI` event listener, acquires data models, and initializes state observers.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.eventManager.on(GameUIEvents.UI_MANAGER.UPDATE_GAME_MODE_UI, this.updateGameModeUI, this);
    this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
    this.promotionDataModel = this.gameLogic.getDataModel().PromotionData;
    this.setupObserver();
}
```
