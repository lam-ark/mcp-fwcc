---
id: "cc_slot_module:BetHistoryModule:methods:onNextPage"
title: "BetHistoryModule.onNextPage Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "onNextPage"]
---

# 📖 `BetHistoryModule.onNextPage()`

---

## 1. Method Overview & Signature

Plays click audio and emits BET_HISTORY_NEXT_PAGE to fetch subsequent page.

```typescript
public onNextPage(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: User click on nextBtn.
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
onNextPage(): void {
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.gameLogic.emit(GameLogicUIEvents.BET_HISTORY_NEXT_PAGE);
}
```
