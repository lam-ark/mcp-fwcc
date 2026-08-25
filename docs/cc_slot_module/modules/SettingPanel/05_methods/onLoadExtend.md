---
id: "cc_slot_module:SettingPanel:methods:onLoadExtend"
title: "SettingPanel.onLoadExtend Method"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `SettingPanel.onLoadExtend()`

---

## 1. Method Overview & Signature

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
	this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
	this.gameSettingData = this.gameLogic.getDataModel().GameSettingData;
	this.setupObserver();
	super.onLoadExtend();
}
```
