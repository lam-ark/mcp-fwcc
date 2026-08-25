---
id: "cc_slot_module:BetHistoryDetailPortrait:methods:onPreviousRespinBtnClick"
title: "BetHistoryDetailPortrait.onPreviousRespinBtnClick Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailPortrait", "bethistorydetailportrait", "cc_slot_module", "methods", "onPreviousRespinBtnClick"]
---

# 📖 `BetHistoryDetailPortrait.onPreviousRespinBtnClick()`

---

## 1. Method Overview & Signature

```typescript
public onPreviousRespinBtnClick(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onPreviousRespinBtnClick(): void {
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.resetGameModeRespin();
	this.gameLogic.emit(GameLogicUIEvents.BET_DETAIL_RESPIN_PREVIOUS_PAGE);
}
```
