---
id: "cc_slot_module:BetHistoryModule:methods:onUpdateMessage"
title: "BetHistoryModule.onUpdateMessage Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "onUpdateMessage"]
---

# 📖 `BetHistoryModule.onUpdateMessage()`

---

## 1. Method Overview & Signature

Updates text on messageLabel.

```typescript
public onUpdateMessage(value: string): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Triggered by modelData.messageText observer.
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
onUpdateMessage(value: string): void {
	this.messageLabel.string = "" + value;
}
```
