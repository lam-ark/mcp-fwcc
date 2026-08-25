---
id: "cc_slot_module:BetHistoryDetailModule:methods:_clearScrollItem"
title: "BetHistoryDetailModule._clearScrollItem Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "_clearScrollItem"]
---

# 📖 `BetHistoryDetailModule._clearScrollItem()`

---

## 1. Method Overview & Signature

Emits RESET on using items and recycles them back into scrollPool.

```typescript
public _clearScrollItem(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Internal pool cleanup helper.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
_clearScrollItem(): void {
	this.usingScrollItem.forEach((item) => {
		item.emit("RESET");
		this.scrollPool.put(item);
	});
	this.usingScrollItem = [];
}
```
