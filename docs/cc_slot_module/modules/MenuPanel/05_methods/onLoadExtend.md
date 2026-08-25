---
id: "cc_slot_module:MenuPanel:methods:onLoadExtend"
title: "MenuPanel.onLoadExtend Method"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `MenuPanel.onLoadExtend()`

---

## 1. Method Overview & Signature

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
	super.onLoadExtend();
	this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
	this.gameSettingData = this.gameLogic.getDataModel().GameSettingData;
	this.setupObserver();
	this.init();
}
```
