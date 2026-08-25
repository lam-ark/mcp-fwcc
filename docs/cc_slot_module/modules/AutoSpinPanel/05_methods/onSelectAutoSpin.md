---
id: "cc_slot_module:AutoSpinPanel:methods:onSelectAutoSpin"
title: "AutoSpinPanel.onSelectAutoSpin Method"
category: "cc_slot_module"
tags: ["AutoSpinPanel", "autospinpanel", "cc_slot_module", "methods", "onSelectAutoSpin"]
---

# 📖 `AutoSpinPanel.onSelectAutoSpin()`

---

## 1. Method Overview & Signature

```typescript
public onSelectAutoSpin(index: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
onSelectAutoSpin(index: number): void {
	this.playSfxClick();
	this.currentSelectedIndex = index;

	for (const optionIndex in this.autoSpinOption) {
		const numberComp = this.autoSpinOption[optionIndex];
		numberComp.setHighlight(Number(optionIndex) == index);
	}
}
```
