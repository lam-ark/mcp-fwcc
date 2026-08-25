---
id: "cc_slot_module:BetSelectionPanel:methods:onScrollViewEnd"
title: "BetSelectionPanel.onScrollViewEnd Method"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "methods", "onScrollViewEnd", "inertia", "snapping"]
---

# 📖 `BetSelectionPanel.onScrollViewEnd()`

---

## 1. Method Overview & Signature

Fired when scrolling momentum ceases or touch gestures release, snapping the primary wheel to the nearest discrete item row and synchronizing the follower wheel.

```typescript
public onScrollViewEnd(isDenom?: boolean): void
```

---

## 2. Trigger Source & Execution Context

- **Trigger**: Fired by `onScrollViewDenomEnded` or `onScrollViewTotalEnded` upon `scroll-ended`, `touch-up`, or `TOUCH_END`.

---

## 3. Complete Source Code Implementation

```typescript
onScrollViewEnd(isDenom = false): void {
	if (this.isScrolling) {
		return;
	}
	const scrollOffetY = isDenom ? this.scrollViewDenom.getScrollOffset().y : this.scrollViewTotal.getScrollOffset().y;
	
	// Find closest valid item index
	const scrollIndex = this.findClosestItemIndex(scrollOffetY);
	const scrollItem = isDenom ? this.betDenomItems[scrollIndex] : this.totalBetItems[scrollIndex];
	if (!scrollItem) {
		return;
	}
	this.currentBetId = scrollItem.getComponent(BetSelectionItem).betId;
	const offsetY = this.calculateOffsetY(scrollIndex);
	this.maxBetBtn.interactable = scrollIndex < this.showItems - 1;
	this.onScrollToBetId(isDenom, offsetY, true);
}
```
