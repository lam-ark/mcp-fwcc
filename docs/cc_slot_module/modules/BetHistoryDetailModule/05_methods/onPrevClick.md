---
id: "cc_slot_module:BetHistoryDetailModule:methods:onPrevClick"
title: "BetHistoryDetailModule.onPrevClick Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "onPrevClick"]
---

# 📖 `BetHistoryDetailModule.onPrevClick()`

---

## 1. Method Overview & Signature

Plays click SFX and emits BET_DETAIL_PREVIOUS_PAGE.

```typescript
public onPrevClick(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: User click on btnPrev.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
onPrevClick(): void {
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this._resetBetDetailView();
	this.gameLogic.emit(GameLogicUIEvents.BET_DETAIL_PREVIOUS_PAGE);
}
```
