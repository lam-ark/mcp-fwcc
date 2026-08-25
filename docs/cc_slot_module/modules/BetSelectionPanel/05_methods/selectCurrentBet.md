---
id: "cc_slot_module:BetSelectionPanel:methods:selectCurrentBet"
title: "BetSelectionPanel.selectCurrentBet Method"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "methods", "selectCurrentBet", "layout", "centering"]
---

# 📖 `BetSelectionPanel.selectCurrentBet()`

---

## 1. Method Overview & Signature

Synchronizes the dual scroll wheels with the active game bet ID, forcing immediate layout calculation, positioning the ScrollViews, updating button interactability, and applying gold selection highlights.

```typescript
public selectCurrentBet(): void
```

---

## 2. Trigger Source & Execution Context

- **Invoker**: Called by `openPanel()` whenever the modal opens.
- **Role**: Ensures the player immediately sees their current wager centered in the wheel selection box without animation lag.

---

## 3. Algorithmic Breakdown

1. **Force Layout Reflow**: Calls `this.updateLayout()` on child `cc.Layout` components so child node heights and container bounds are fully computed.
2. **Current Bet Resolution**: Reads `const betKey = this.betModel.betKey || "1"` and assigns `this.currentBetId = betKey`.
3. **Max Bet Button State**: Evaluates `this.maxBetBtn.interactable = index < this.showItems - 1`.
4. **Offset Calculation**: Calculates target pixel offset: `offsetY = this.calculateOffsetY(index)`.
5. **Instant Scroll Placement**: Executes instant zero-duration positioning:
   ```typescript
   this.scrollViewTotal.scrollToOffset(v2(0, offsetY), 0);
   this.scrollViewDenom.scrollToOffset(v2(0, offsetY), 0);
   ```
6. **Highlight Application**: Calls `this.setHighlight()` to style the focused row.

---

## 4. Complete Source Code Implementation

```typescript
selectCurrentBet(): void {
	this.updateLayout();
	const betKey = this.betModel.betKey || "1";
	this.currentBetId = betKey;
	const index = this.mapBetIdWithIndex[betKey];
	this.maxBetBtn.interactable = index < this.showItems - 1;
	const offsetY = this.calculateOffsetY(index);
	this.scrollViewTotal.scrollToOffset(v2(0, offsetY), 0);
	this.scrollViewDenom.scrollToOffset(v2(0, offsetY), 0);
	this.setHighlight();
}
```
