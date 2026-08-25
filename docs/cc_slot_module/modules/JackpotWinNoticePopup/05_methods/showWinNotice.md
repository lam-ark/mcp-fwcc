---
id: "cc_slot_module:JackpotWinNoticePopup:methods:showWinNotice"
title: "JackpotWinNoticePopup.showWinNotice Method"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "methods", "showWinNotice"]
---

# 📖 `JackpotWinNoticePopup.showWinNotice()`

---

## 1. Method Overview & Signature

```typescript
public showWinNotice({ jpInfo, isMe }: { jpInfo: NotifyJackpotWinInfo[], isMe: boolean }): void
```

---

## 2. Complete Source Code Implementation

```typescript
showWinNotice({ jpInfo, isMe }: { jpInfo: NotifyJackpotWinInfo[], isMe: boolean }): void {
	if (!jpInfo || !jpInfo.length) {
		return;
	}
	this._listWinJP = jpInfo.filter((user) => user.dn !== this.gameLogic.getUserDisplayName());
	if (this._currentState === STATE.CLOSED && this._listWinJP.length > 0) {
		this.showCurrentWinner();
	}
}
```
