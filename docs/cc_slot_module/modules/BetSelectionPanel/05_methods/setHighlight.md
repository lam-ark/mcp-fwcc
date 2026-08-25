---
id: "cc_slot_module:BetSelectionPanel:methods:setHighlight"
title: "BetSelectionPanel.setHighlight Method"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "methods", "setHighlight", "ui_feedback"]
---

# 📖 `BetSelectionPanel.setHighlight()`

---

## 1. Method Overview & Signature

Updates the highlight selection frame across all valid items in both `totalBetItems` and `betDenomItems`, highlighting the active row while dimming all others.

```typescript
public setHighlight(): void
```

---

## 2. Trigger Source & Execution Context

- **Invoker**: Called by `selectCurrentBet()`, `onSelectMaxBet()`, `scrollItemClick()`, and after tween completion in `onScrollToBetId()`.

---

## 3. Algorithmic Breakdown

1. **Lookup Index**: Looks up `scrollIndex = this.mapBetIdWithIndex[this.currentBetId]`.
2. **Filter & Style Total Bet Items**: Filters out buffer items (`betId !== "" && betId !== "--"`) and calls `item.setHighlight(scrollIndex === index)`.
3. **Filter & Style Denom Items**: Executes identical highlight filtering on denomination rows.

---

## 4. Complete Source Code Implementation

```typescript
setHighlight(): void {
	const scrollIndex = this.mapBetIdWithIndex[this.currentBetId];
	this.highlightScrollItem(this.totalBetItems, scrollIndex);
	this.highlightScrollItem(this.betDenomItems, scrollIndex);
}

highlightScrollItem(items: BetSelectionItem[], scrollIndex: number): void {
	items.filter((item) => item.betId !== "" && item.betId !== "--").forEach((item, index) => {
		item.setHighlight(scrollIndex === index);
	});
}
```
