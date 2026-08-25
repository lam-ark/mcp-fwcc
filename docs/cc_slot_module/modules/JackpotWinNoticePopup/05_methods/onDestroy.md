---
id: "cc_slot_module:JackpotWinNoticePopup:methods:onDestroy"
title: "JackpotWinNoticePopup.onDestroy Method"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `JackpotWinNoticePopup.onDestroy()`

---

## 1. Method Overview & Signature

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
	this.observer.releaseAll(this.jackpotData, this);
	this.unscheduleAllCallbacks();
	this.node.stopAllActions();
}
```
