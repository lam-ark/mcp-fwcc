---
id: "cc_slot_module:AutoSpinPanel:methods:init"
title: "AutoSpinPanel.init Method"
category: "cc_slot_module"
tags: ["AutoSpinPanel", "autospinpanel", "cc_slot_module", "methods", "init"]
---

# 📖 `AutoSpinPanel.init()`

---

## 1. Method Overview & Signature

```typescript
public init(): void
```

---

## 2. Complete Source Code Implementation

```typescript
init(): void {
	this.config = this.getComponent(AutoSpinPanelConfig);
	this.config.AUTO_SPIN_NUMBERS.forEach((number, index) => {
		const numberNode = instantiate(this.autoSpinNumberPrefab);
		numberNode.setParent(this.numberHolder);
		let numberComp = numberNode.getComponent(AutoSpinNumber);
		numberComp.init(number, this.onSelectAutoSpin.bind(this, index));
		this.autoSpinOption[index] = numberComp;
	});
}
```
