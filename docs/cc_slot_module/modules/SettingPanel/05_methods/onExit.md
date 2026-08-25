---
id: "cc_slot_module:SettingPanel:methods:onExit"
title: "SettingPanel.onExit Method"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "methods", "onExit"]
---

# 📖 `SettingPanel.onExit()`

---

## 1. Method Overview & Signature

```typescript
public onExit(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onExit(): void {
	if (this.popupBehavior && this.popupBehavior.isPlaying()) {
		return;
	}
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.gameLogic.emit(GameLogicUIEvents.CLOSE_SETTINGS_PANEL);
}
```
