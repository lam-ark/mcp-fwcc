---
id: "cc_slot_module:PayTablePanel:methods:setupObserver"
title: "PayTablePanel.setupObserver Method"
category: "cc_slot_module"
tags: ["PayTablePanel", "paytablepanel", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `PayTablePanel.setupObserver()`

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
	this.observer.watch(this.uiManagerData, 'isPayTablePanelOpen', this.showPayTablePanel.bind(this), this);
}
```
