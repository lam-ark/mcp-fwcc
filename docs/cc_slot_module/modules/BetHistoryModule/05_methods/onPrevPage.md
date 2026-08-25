---
id: "cc_slot_module:BetHistoryModule:methods:onPrevPage"
title: "BetHistoryModule.onPrevPage Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "onPrevPage"]
---

# 📖 `BetHistoryModule.onPrevPage()`

---

## 1. Method Overview & Signature

Plays click audio and emits BET_HISTORY_PREVIOUS_PAGE to fetch preceding page.

```typescript
public onPrevPage(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: User click on backBtn.
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
onPrevPage(): void {
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.gameLogic.emit(GameLogicUIEvents.BET_HISTORY_PREVIOUS_PAGE);
}
```
