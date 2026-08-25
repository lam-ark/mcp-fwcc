---
id: "cc_slot_module:BetHistoryDetailModule:methods:hideCloseButton"
title: "BetHistoryDetailModule.hideCloseButton Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "hideCloseButton"]
---

# 📖 `BetHistoryDetailModule.hideCloseButton()`

---

## 1. Method Overview & Signature

Conditionally hides closeButton if loaded inside standalone history scene.

```typescript
public hideCloseButton(isFromHistoryScene: boolean): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Triggered by isFromHistoryScene observer.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
hideCloseButton(isFromHistoryScene: boolean): void {
	this.closeButton.node.active = !isFromHistoryScene;
}
```
