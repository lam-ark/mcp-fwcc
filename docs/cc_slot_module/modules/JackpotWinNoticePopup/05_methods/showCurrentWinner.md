---
id: "cc_slot_module:JackpotWinNoticePopup:methods:showCurrentWinner"
title: "JackpotWinNoticePopup.showCurrentWinner Method"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "methods", "showCurrentWinner"]
---

# 📖 `JackpotWinNoticePopup.showCurrentWinner()`

---

## 1. Method Overview & Signature

```typescript
public showCurrentWinner(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showCurrentWinner(): void {
	if (this._listWinJP.length === 0) {
		eno.setOpacity(this.node, 0);
		this.node.active = false;
		return;
	}
	this._currentState = STATE.MOVING;
	this._currentAward = this._listWinJP.pop();

	this.node.active = true;
	eno.setOpacity(this.node, 0);
	eno.fadeIn(this.node, this.fadeTime);

	this.showInfo();
	tween(this.node)
		.delay(this.fadeTime)
		.call(() => {
			this._currentState = STATE.IDLE;
		})
		.delay(this.delayTime)
		.call(() => {
			this.hideCurrentWinner();
		})
		.start();
}
```
