---
id: "cc_slot_module:JackpotWinNoticePopup:methods:onClosePopup"
title: "JackpotWinNoticePopup.onClosePopup Method"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "methods", "onClosePopup"]
---

# 📖 `JackpotWinNoticePopup.onClosePopup()`

---

## 1. Method Overview & Signature

```typescript
public onClosePopup(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onClosePopup(): void {
	if (this._currentState === STATE.IDLE) {
		this.hideCurrentWinner();
	}
}
```
