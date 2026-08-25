---
id: "cc_slot_module:SettingPanel:methods:onEnableSFX"
title: "SettingPanel.onEnableSFX Method"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "methods", "onEnableSFX"]
---

# 📖 `SettingPanel.onEnableSFX()`

---

## 1. Method Overview & Signature

```typescript
public onEnableSFX(isEnableSFX: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onEnableSFX(isEnableSFX: boolean): void {
	this.sfxToggle.isChecked = isEnableSFX;

	if (this.soundPlayer) {
		this.soundPlayer.setEffectEnable(isEnableSFX);
	}
}
```
