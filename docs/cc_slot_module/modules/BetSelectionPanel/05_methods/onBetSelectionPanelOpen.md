---
id: "cc_slot_module:BetSelectionPanel:methods:onBetSelectionPanelOpen"
title: "BetSelectionPanel.onBetSelectionPanelOpen Method"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "methods", "onBetSelectionPanelOpen", "popup_toggle"]
---

# 📖 `BetSelectionPanel.onBetSelectionPanelOpen()`

---

## 1. Method Overview & Signature

Toggles the modal popup visibility and executes opening lifecycle steps when `isOpen` is `true`.

```typescript
public onBetSelectionPanelOpen(isOpen: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onBetSelectionPanelOpen(isOpen: boolean): void {
	this.togglePopup(isOpen);
	if (isOpen) {
		this.openPanel();
	}
}

openPanel(): void {
	this.playSfxClick();
	this.init();
	this.selectCurrentBet();
}

closePanel(): void {
	this.playSfxClick();
	this.onBetSelectionPanelOpen(false);
}
```
