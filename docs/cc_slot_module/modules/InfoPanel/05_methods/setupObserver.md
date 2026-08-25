---
id: "cc_slot_module:InfoPanel:methods:setupObserver"
title: "InfoPanel.setupObserver Method"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `InfoPanel.setupObserver()`

---

## 1. Method Overview & Signature

```typescript
public setupObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
	this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
	this.observer.watch(this.uiManagerData, 'isInfoOpen', this.showInfoPanel.bind(this), this);
}
```
