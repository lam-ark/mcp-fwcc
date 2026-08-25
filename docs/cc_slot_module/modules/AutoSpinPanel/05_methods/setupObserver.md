---
id: "cc_slot_module:AutoSpinPanel:methods:setupObserver"
title: "AutoSpinPanel.setupObserver Method"
category: "cc_slot_module"
tags: ["AutoSpinPanel", "autospinpanel", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `AutoSpinPanel.setupObserver()`

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
	this.observer.watch(this.uiManagerData, "isAutoSpinPanelOpen", this.onAutoSpinPanelOpen.bind(this), this);
}
```
