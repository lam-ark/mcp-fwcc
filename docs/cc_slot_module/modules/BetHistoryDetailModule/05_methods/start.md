---
id: "cc_slot_module:BetHistoryDetailModule:methods:start"
title: "BetHistoryDetailModule.start Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "start"]
---

# 📖 `BetHistoryDetailModule.start()`

---

## 1. Method Overview & Signature

Calls setupObserver during start phase.

```typescript
public start(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Standard Cocos start callback.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
start(): void {
	this.setupObserver();
}
```
