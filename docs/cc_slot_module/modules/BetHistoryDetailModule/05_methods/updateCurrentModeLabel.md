---
id: "cc_slot_module:BetHistoryDetailModule:methods:updateCurrentModeLabel"
title: "BetHistoryDetailModule.updateCurrentModeLabel Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "updateCurrentModeLabel"]
---

# 📖 `BetHistoryDetailModule.updateCurrentModeLabel()`

---

## 1. Method Overview & Signature

Sets uppercase mode name on currentModeLabel.

```typescript
public updateCurrentModeLabel(data: any): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Called by onRenderDataView.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
updateCurrentModeLabel(data: any): void {
	if (this.currentModeLabel) {
		const currentData = this.getCurrentData();
		if (!currentData) {
			cc.warn('currentData is null');
			return;
		}
		
		const { gameMode } = currentData;
		const modeName = gameMode || '';
		this.currentModeLabel.string = modeName.toUpperCase();
	}
}
```
