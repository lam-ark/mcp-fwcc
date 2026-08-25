---
id: "cc_slot_module:MenuPanel:methods:onShowBetHistory"
title: "MenuPanel.onShowBetHistory Method"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "methods", "onShowBetHistory"]
---

# 📖 `MenuPanel.onShowBetHistory()`

---

## 1. Method Overview & Signature

```typescript
public onShowBetHistory(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onShowBetHistory(): void {
	this.playSfxClick();
	this.gameLogic.emit(GameLogicUIEvents.OPEN_BET_HISTORY_PANEL);
	if (this.autoHideMenuPanel) {
		this.gameLogic.emit(GameLogicUIEvents.CLOSE_MENU_PANEL);
	}
}
```
