---
id: "cc_slot_module:MenuPanel:methods:onShowPaytable"
title: "MenuPanel.onShowPaytable Method"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "methods", "onShowPaytable"]
---

# 📖 `MenuPanel.onShowPaytable()`

---

## 1. Method Overview & Signature

```typescript
public onShowPaytable(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onShowPaytable(): void {
	this.playSfxClick();
	this.gameLogic.emit(GameLogicUIEvents.OPEN_PAY_TABLE_PANEL);
	if (this.autoHideMenuPanel) {
		this.gameLogic.emit(GameLogicUIEvents.CLOSE_MENU_PANEL);
	}
}
```
