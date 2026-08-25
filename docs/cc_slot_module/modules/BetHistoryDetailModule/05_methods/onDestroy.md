---
id: "cc_slot_module:BetHistoryDetailModule:methods:onDestroy"
title: "BetHistoryDetailModule.onDestroy Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `BetHistoryDetailModule.onDestroy()`

---

## 1. Method Overview & Signature

Releases observers from betHistoryDetailData and betHistoryData.

```typescript
public onDestroy(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Component destruction callback.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
onDestroy(): void {
	if (this.betHistoryDetailData) {
		this.observer.releaseAll(this.betHistoryDetailData, this);
	}
	if (this.betHistoryData) {
		this.observer.releaseAll(this.betHistoryData, this);
	}
}
```
