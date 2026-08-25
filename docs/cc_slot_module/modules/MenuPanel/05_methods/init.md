---
id: "cc_slot_module:MenuPanel:methods:init"
title: "MenuPanel.init Method"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "methods", "init"]
---

# 📖 `MenuPanel.init()`

---

## 1. Method Overview & Signature

```typescript
public init(): void
```

---

## 2. Complete Source Code Implementation

```typescript
init(): void {
	this.musicOn.active = this.gameSettingData.isEnableBGM;
	this.musicOff.active = !this.gameSettingData.isEnableBGM;
	this.sfxOn.active = this.gameSettingData.isEnableSFX;
	this.sfxOff.active = !this.gameSettingData.isEnableSFX;
	this.initialized = true;
}
```
