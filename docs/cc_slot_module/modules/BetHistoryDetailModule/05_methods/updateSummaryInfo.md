---
id: "cc_slot_module:BetHistoryDetailModule:methods:updateSummaryInfo"
title: "BetHistoryDetailModule.updateSummaryInfo Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "updateSummaryInfo"]
---

# 📖 `BetHistoryDetailModule.updateSummaryInfo()`

---

## 1. Method Overview & Signature

Clears infoLabel text during summary view.

```typescript
public updateSummaryInfo(_data: any): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Called in onRenderDataView when isActiveSummary is true.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
updateSummaryInfo(_data: any): void {
	this.infoLabel.string = "";
}
```
