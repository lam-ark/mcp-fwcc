---
id: "cc_slot_module:BetHistoryModule:methods:start"
title: "BetHistoryModule.start Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "start"]
---

# 📖 `BetHistoryModule.start()`

---

## 1. Method Overview & Signature

Sets recordView active, detailView inactive, localizes text, and resets buttons.

```typescript
public start(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Standard Cocos component start callback.
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
start(): void {
	this.recordView.active = true;
	this.detailView.active = false;
	this.localizeText();
	this.resetBetHistory();
}
```
