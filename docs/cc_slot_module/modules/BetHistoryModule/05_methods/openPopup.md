---
id: "cc_slot_module:BetHistoryModule:methods:openPopup"
title: "BetHistoryModule.openPopup Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "openPopup"]
---

# 📖 `BetHistoryModule.openPopup()`

---

## 1. Method Overview & Signature

Emits INIT_BET_HISTORY with itemPerPage config to fetch first page.

```typescript
public openPopup(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Invoked in showBetHistory completion callback.
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
openPopup(): void {
	const data = { itemPerPage: this.itemPerPage };
	this.gameLogic.emit(GameLogicUIEvents.INIT_BET_HISTORY, data);
}
```
