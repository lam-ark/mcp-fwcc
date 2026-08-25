---
id: "cc_slot_module:BetHistoryDetailModule:methods:enablePreviousBtn"
title: "BetHistoryDetailModule.enablePreviousBtn Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "enablePreviousBtn"]
---

# 📖 `BetHistoryDetailModule.enablePreviousBtn()`

---

## 1. Method Overview & Signature

Sets btnPrev interactable property.

```typescript
public enablePreviousBtn(isEnablePrev: boolean): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Triggered by isEnablePrev observer.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
enablePreviousBtn(isEnablePrev: boolean): void {
	this.btnPrev.interactable = isEnablePrev;
}
```
