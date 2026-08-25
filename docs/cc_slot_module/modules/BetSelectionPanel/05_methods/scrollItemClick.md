---
id: "cc_slot_module:BetSelectionPanel:methods:scrollItemClick"
title: "BetSelectionPanel.scrollItemClick Method"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "methods", "scrollItemClick", "touch_interaction"]
---

# 📖 `BetSelectionPanel.scrollItemClick()`

---

## 1. Method Overview & Signature

Handles direct touch/click events on any individual row item in either wheel, calculating the target offset and scrolling both wheels to that tier.

```typescript
public scrollItemClick(betId: string, isDenom: boolean): void
```

---

## 2. Parameters & Return Value Specification

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `betId` | `string` | The bet key string associated with the tapped item. |
| `isDenom` | `boolean` | `true` if tapped in the denomination column, `false` if in the total bet column. |

---

## 3. Complete Source Code Implementation

```typescript
scrollItemClick(betId: string, isDenom: boolean): void {
	if (this.isScrolling) {
		return;
	}
	this.currentBetId = betId;
	const scrollIndex = this.mapBetIdWithIndex[betId];
	this.maxBetBtn.interactable = scrollIndex < this.showItems - 1;
	this.soundPlayer.playSFXClick();
	const scrollItem = isDenom ? this.betDenomItems[scrollIndex] : this.totalBetItems[scrollIndex];
	if (!scrollItem) {
		return;
	}
	const offsetY = this.calculateOffsetY(scrollIndex);
	this.onScrollToBetId(isDenom, offsetY);
	this.setHighlight();
}
```
