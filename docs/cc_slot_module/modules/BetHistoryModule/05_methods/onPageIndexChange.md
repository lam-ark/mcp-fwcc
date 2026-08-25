---
id: "cc_slot_module:BetHistoryModule:methods:onPageIndexChange"
title: "BetHistoryModule.onPageIndexChange Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "onPageIndexChange"]
---

# 📖 `BetHistoryModule.onPageIndexChange()`

---

## 1. Method Overview & Signature

Sets pageIndexNode active when index > 0 and updates pageIndexLabel string.

```typescript
public onPageIndexChange(index: number): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Triggered by modelData.pageIndex observer.
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
onPageIndexChange(index: number): void {
	this.pageIndexNode.active = index > 0;
	this.pageIndexLabel.string = "" + index;
}
```
