---
id: "cc_slot_module:JackpotWinNoticePopup:methods:showNextWinner"
title: "JackpotWinNoticePopup.showNextWinner Method"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "methods", "showNextWinner"]
---

# 📖 `JackpotWinNoticePopup.showNextWinner()`

---

## 1. Method Overview & Signature

```typescript
public showNextWinner(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showNextWinner(): void {
	this.scheduleOnce(this.showCurrentWinner, this.delayNextWinner);
}
```
