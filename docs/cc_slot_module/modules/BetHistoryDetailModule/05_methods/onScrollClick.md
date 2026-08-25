---
id: "cc_slot_module:BetHistoryDetailModule:methods:onScrollClick"
title: "BetHistoryDetailModule.onScrollClick Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "onScrollClick"]
---

# 📖 `BetHistoryDetailModule.onScrollClick()`

---

## 1. Method Overview & Signature

Emits REQUEST_BET_DETAIL_DATA_PAGE for selected tab index.

```typescript
public onScrollClick(index: number): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Triggered by ON_SCROLL_CLICK event from tab item.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
onScrollClick(index: number): void {
	if (index === this.betHistoryDetailData.currentIndex) {
		return;
	}
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this._resetBetDetailView();
	this.gameLogic.emit(GameLogicUIEvents.REQUEST_BET_DETAIL_DATA_PAGE, index);
}
```
