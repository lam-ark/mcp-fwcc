---
id: "cc_slot_module:BetHistoryDetailModule:methods:_reset"
title: "BetHistoryDetailModule._reset Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "_reset"]
---

# 📖 `BetHistoryDetailModule._reset()`

---

## 1. Method Overview & Signature

Complete reset clearing tab items, views, and session groups.

```typescript
public _reset(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Called on initDetailView.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
_reset(): void {
	this._clearScrollItem();
	this._resetBetDetailView();
	this.resetSessionGroup();
	this.summaryView.active = false;
}
```
