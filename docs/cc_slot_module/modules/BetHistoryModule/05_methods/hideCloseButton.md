---
id: "cc_slot_module:BetHistoryModule:methods:hideCloseButton"
title: "BetHistoryModule.hideCloseButton Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "hideCloseButton"]
---

# 📖 `BetHistoryModule.hideCloseButton()`

---

## 1. Method Overview & Signature

Hides closeBtn when loaded inside standalone history scene.

```typescript
public hideCloseButton(isFromHistoryScene: boolean): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Triggered by modelData.isFromHistoryScene observer.
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
hideCloseButton(isFromHistoryScene: boolean): void {
	this.closeBtn.node.active = !isFromHistoryScene;
}
```
