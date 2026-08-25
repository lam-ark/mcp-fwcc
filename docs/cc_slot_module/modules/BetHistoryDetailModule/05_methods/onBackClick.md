---
id: "cc_slot_module:BetHistoryDetailModule:methods:onBackClick"
title: "BetHistoryDetailModule.onBackClick Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "onBackClick"]
---

# 📖 `BetHistoryDetailModule.onBackClick()`

---

## 1. Method Overview & Signature

Plays click SFX and emits CLOSE_BET_HISTORY_DETAIL_PANEL.

```typescript
public onBackClick(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: User click on closeButton.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
onBackClick(): void {
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.gameLogic.emit(GameLogicUIEvents.CLOSE_BET_HISTORY_DETAIL_PANEL);
}
```
