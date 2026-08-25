---
id: "cc_slot_module:MenuPanel:methods:onShowInfo"
title: "MenuPanel.onShowInfo Method"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "methods", "onShowInfo"]
---

# 📖 `MenuPanel.onShowInfo()`

---

## 1. Method Overview & Signature

```typescript
public onShowInfo(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onShowInfo(): void {
	this.playSfxClick();
	this.gameLogic.emit(GameLogicUIEvents.OPEN_INFO_PANEL);
	if (this.autoHideMenuPanel) {
		this.gameLogic.emit(GameLogicUIEvents.CLOSE_MENU_PANEL);
	}
}
```
