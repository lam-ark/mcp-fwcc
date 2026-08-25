---
id: "cc_slot_module:JackpotWinNoticePopup:methods:hideCurrentWinner"
title: "JackpotWinNoticePopup.hideCurrentWinner Method"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "methods", "hideCurrentWinner"]
---

# 📖 `JackpotWinNoticePopup.hideCurrentWinner()`

---

## 1. Method Overview & Signature

```typescript
public hideCurrentWinner(): void
```

---

## 2. Complete Source Code Implementation

```typescript
hideCurrentWinner(): void {
	this._currentState = STATE.CLOSED;
	eno.fadeOut(this.node, this.fadeTime);
	this.showNextWinner();
}
```
