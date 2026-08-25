---
id: "cc_slot_module:SettingPanel:methods:onShowBetHistory"
title: "SettingPanel.onShowBetHistory Method"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "methods", "onShowBetHistory"]
---

# 📖 `SettingPanel.onShowBetHistory()`

---

## 1. Method Overview & Signature

```typescript
public onShowBetHistory(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onShowBetHistory(): void {
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.gameLogic.emit(GameLogicUIEvents.OPEN_BET_HISTORY_PANEL);
}
```
