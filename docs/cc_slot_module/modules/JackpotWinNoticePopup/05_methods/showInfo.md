---
id: "cc_slot_module:JackpotWinNoticePopup:methods:showInfo"
title: "JackpotWinNoticePopup.showInfo Method"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "methods", "showInfo"]
---

# 📖 `JackpotWinNoticePopup.showInfo()`

---

## 1. Method Overview & Signature

```typescript
public showInfo(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showInfo(): void {
	this.displayNameLb.string = this._currentAward.dn;
	this.textWin.string = this.gameLogic.getGameText("NOTIFY_JP_WON");
	this.winAmountLb.string = this.moneyFormatter.formatMoney(this._currentAward.amt);
}
```
