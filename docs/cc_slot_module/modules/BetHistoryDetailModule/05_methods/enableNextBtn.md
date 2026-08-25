---
id: "cc_slot_module:BetHistoryDetailModule:methods:enableNextBtn"
title: "BetHistoryDetailModule.enableNextBtn Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "enableNextBtn"]
---

# 📖 `BetHistoryDetailModule.enableNextBtn()`

---

## 1. Method Overview & Signature

Sets btnNext interactable property.

```typescript
public enableNextBtn(isEnableNext: boolean): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Triggered by isEnableNext observer.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
enableNextBtn(isEnableNext: boolean): void {
	this.btnNext.interactable = isEnableNext;
}
```
