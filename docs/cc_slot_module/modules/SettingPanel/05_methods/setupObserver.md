---
id: "cc_slot_module:SettingPanel:methods:setupObserver"
title: "SettingPanel.setupObserver Method"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `SettingPanel.setupObserver()`

---

## 1. Method Overview & Signature

```typescript
public setupObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
	this.observer.watch(this.uiManagerData, 'isSettingsOpen', this.onSettingOpen.bind(this), this);
	this.observer.watch(this.gameSettingData, "isEnableBGM", this.onEnableBGM.bind(this), this);
	this.observer.watch(this.gameSettingData, "isEnableSFX", this.onEnableSFX.bind(this), this);
}
```
