---
id: "cc_slot_module:SettingPanel:methods:init"
title: "SettingPanel.init Method"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "methods", "init"]
---

# 📖 `SettingPanel.init()`

---

## 1. Method Overview & Signature

```typescript
public init(): void
```

---

## 2. Complete Source Code Implementation

```typescript
init(): void {
	// Its some weird sound with Toggle sound when init, so this.initialized is the work around
	this.bgmToggle.isChecked = this.gameSettingData.isEnableBGM;
	this.sfxToggle.isChecked = this.gameSettingData.isEnableSFX;

	this.initialized = true;
}
```
