---
id: "cc_slot_module:BetHistoryDetailPortrait:methods:onNextRespinBtnClick"
title: "BetHistoryDetailPortrait.onNextRespinBtnClick Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailPortrait", "bethistorydetailportrait", "cc_slot_module", "methods", "onNextRespinBtnClick"]
---

# 📖 `BetHistoryDetailPortrait.onNextRespinBtnClick()`

---

## 1. Method Overview & Signature

```typescript
public onNextRespinBtnClick(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onNextRespinBtnClick(): void {
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.resetGameModeRespin();
	this.gameLogic.emit(GameLogicUIEvents.BET_DETAIL_RESPIN_NEXT_PAGE);
}
```
