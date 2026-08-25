---
id: "cc_slot_module:JackpotWinNoticePopup:methods:setupObserver"
title: "JackpotWinNoticePopup.setupObserver Method"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `JackpotWinNoticePopup.setupObserver()`

---

## 1. Method Overview & Signature

```typescript
public setupObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
	this.jackpotData = this.gameLogic.getDataModel()[this.modelName];
	this.observer.watch(this.jackpotData, "notifyJackpotInfo", this.showWinNotice.bind(this), this);
}
```
