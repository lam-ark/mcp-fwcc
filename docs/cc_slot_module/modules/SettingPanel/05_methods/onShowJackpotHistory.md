---
id: "cc_slot_module:SettingPanel:methods:onShowJackpotHistory"
title: "SettingPanel.onShowJackpotHistory Method"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "methods", "onShowJackpotHistory"]
---

# 📖 `SettingPanel.onShowJackpotHistory()`

---

## 1. Method Overview & Signature

```typescript
public onShowJackpotHistory(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onShowJackpotHistory(): void {
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.gameLogic.emit(GameLogicUIEvents.OPEN_JACKPOT_HISTORY_PANEL);
}
```
