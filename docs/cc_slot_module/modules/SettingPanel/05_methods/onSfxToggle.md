---
id: "cc_slot_module:SettingPanel:methods:onSfxToggle"
title: "SettingPanel.onSfxToggle Method"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "methods", "onSfxToggle"]
---

# 📖 `SettingPanel.onSfxToggle()`

---

## 1. Method Overview & Signature

```typescript
public onSfxToggle(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onSfxToggle(): void {
	if (this.soundPlayer && this.initialized) {
		this.gameLogic.emit(GameLogicUIEvents.TOGGLE_SFX);
		this.soundPlayer.playSFXClick();
	}
}
```
