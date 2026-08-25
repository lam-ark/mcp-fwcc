---
id: "cc_slot_module:SettingPanel:methods:onEnableBGM"
title: "SettingPanel.onEnableBGM Method"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "methods", "onEnableBGM"]
---

# 📖 `SettingPanel.onEnableBGM()`

---

## 1. Method Overview & Signature

```typescript
public onEnableBGM(isEnableBGM: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onEnableBGM(isEnableBGM: boolean): void {
	this.bgmToggle.isChecked = isEnableBGM;
	if (this.soundPlayer) {
		this.soundPlayer.setBgmEnable(isEnableBGM);
	}
}
```
