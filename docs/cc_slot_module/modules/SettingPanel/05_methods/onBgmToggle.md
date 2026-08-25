---
id: "cc_slot_module:SettingPanel:methods:onBgmToggle"
title: "SettingPanel.onBgmToggle Method"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "methods", "onBgmToggle"]
---

# 📖 `SettingPanel.onBgmToggle()`

---

## 1. Method Overview & Signature

```typescript
public onBgmToggle(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onBgmToggle(): void {
	if (this.soundPlayer && this.initialized) {
		this.gameLogic.emit(GameLogicUIEvents.TOGGLE_BGM);
		this.soundPlayer.playSFXClick();
	}
}
```
