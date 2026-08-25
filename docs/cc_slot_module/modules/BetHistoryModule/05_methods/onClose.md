---
id: "cc_slot_module:BetHistoryModule:methods:onClose"
title: "BetHistoryModule.onClose Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "onClose"]
---

# 📖 `BetHistoryModule.onClose()`

---

## 1. Method Overview & Signature

Plays click audio and emits CLOSE_BET_HISTORY_PANEL.

```typescript
public onClose(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: User click on closeBtn.
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
onClose(): void {
	if (this.popupBehavior && this.popupBehavior.isPlaying()) {
		return;
	}
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.gameLogic.emit(GameLogicUIEvents.CLOSE_BET_HISTORY_PANEL);
}
```
