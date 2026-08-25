---
id: "cc_slot_module:BetHistoryModule:methods:openBetDetail"
title: "BetHistoryModule.openBetDetail Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "openBetDetail"]
---

# 📖 `BetHistoryModule.openBetDetail()`

---

## 1. Method Overview & Signature

Emits OPEN_BET_HISTORY_DETAIL_PANEL with selected record item payload.

```typescript
public openBetDetail(data: any): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Dispatched when OPEN_BET_DETAIL event fires.
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
openBetDetail(data: any): void {
	this.gameLogic.emit(GameLogicUIEvents.OPEN_BET_HISTORY_DETAIL_PANEL, data);
}
```
