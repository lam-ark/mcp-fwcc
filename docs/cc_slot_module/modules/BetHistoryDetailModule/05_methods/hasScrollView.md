---
id: "cc_slot_module:BetHistoryDetailModule:methods:hasScrollView"
title: "BetHistoryDetailModule.hasScrollView Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "hasScrollView"]
---

# 📖 `BetHistoryDetailModule.hasScrollView()`

---

## 1. Method Overview & Signature

Returns true if scrollView, scrollContent, and scrollItem prefab are all bound.

```typescript
public hasScrollView(): boolean
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Helper method called before tab operations.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
hasScrollView(): boolean {
	return !!(this.scrollView && this.scrollContent && this.scrollItem);
}
```
