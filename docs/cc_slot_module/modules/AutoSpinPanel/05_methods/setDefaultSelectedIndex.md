---
id: "cc_slot_module:AutoSpinPanel:methods:setDefaultSelectedIndex"
title: "AutoSpinPanel.setDefaultSelectedIndex Method"
category: "cc_slot_module"
tags: ["AutoSpinPanel", "autospinpanel", "cc_slot_module", "methods", "setDefaultSelectedIndex"]
---

# 📖 `AutoSpinPanel.setDefaultSelectedIndex()`

---

## 1. Method Overview & Signature

```typescript
public setDefaultSelectedIndex(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setDefaultSelectedIndex(): void {
	this.currentSelectedIndex = this.config.AUTO_SPIN_NUMBERS.length - 1;
	this.onSelectAutoSpin(this.currentSelectedIndex);
	this.initialized = true;
}
```
