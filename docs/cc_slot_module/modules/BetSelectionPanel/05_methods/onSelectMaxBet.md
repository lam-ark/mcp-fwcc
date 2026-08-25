---
id: "cc_slot_module:BetSelectionPanel:methods:onSelectMaxBet"
title: "BetSelectionPanel.onSelectMaxBet Method"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "methods", "onSelectMaxBet", "max_bet", "tween"]
---

# 📖 `BetSelectionPanel.onSelectMaxBet()`

---

## 1. Method Overview & Signature

Handles clicks on the "MAX BET" button inside the bet selection panel, scrolling both wheels directly to the highest available bet level and updating state.

```typescript
public onSelectMaxBet(): void
```

---

## 2. Trigger Source & Execution Context

- **Trigger**: Click event on `maxBetBtn`.
- **Concurrency Guard**: Checks `if (this.isScrolling) return;` to prevent jarring tween cancellations.

---

## 3. Algorithmic Breakdown

1. **Guard Check**: Returns early if scrolling animation is in progress.
2. **Disable Button**: Sets `this.maxBetBtn.interactable = false`.
3. **Sound Effect**: Plays click audio via `this.soundPlayer.playSFXClick()`.
4. **Target Calculation**: Identifies last option index: `const index = this.showItems - 1`.
5. **Simultaneous Scroll**: Invokes `scrollToOffset` on both `scrollViewTotal` and `scrollViewDenom` across `this.scrollTime` (0.15s).
6. **State & Highlight**: Updates `this.currentBetId` from the max item component and triggers `this.setHighlight()`.

---

## 4. Complete Source Code Implementation

```typescript
onSelectMaxBet(): void {
	if (this.isScrolling) {
		return;
	}
	this.maxBetBtn.interactable = false;
	this.soundPlayer.playSFXClick();
	const index = this.showItems - 1;
	const scrollItem = this.totalBetItems[index];
	const scrollItemHeight = scrollItem.node.height;
	const offsetY = index * scrollItemHeight + (this.bufferTop - 1) * scrollItemHeight;
	this.scrollViewTotal.scrollToOffset(v2(0, offsetY), this.scrollTime);
	this.scrollViewDenom.scrollToOffset(v2(0, offsetY), this.scrollTime);

	const comp = scrollItem.getComponent(BetSelectionItem);
	this.currentBetId = comp.betId;
	this.setHighlight();
}
```
