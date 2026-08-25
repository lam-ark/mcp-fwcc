---
id: "cc_slot_module:JackpotWinNoticePopup:methods:onLoadExtend"
title: "JackpotWinNoticePopup.onLoadExtend Method"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `JackpotWinNoticePopup.onLoadExtend()`

---

## 1. Method Overview & Signature

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
	this.setupObserver();
	this.node.active = false;
}
```
