---
id: "cc_slot_module:MenuPanel:methods:onCloseMenuPanel"
title: "MenuPanel.onCloseMenuPanel Method"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "methods", "onCloseMenuPanel"]
---

# 📖 `MenuPanel.onCloseMenuPanel()`

---

## 1. Method Overview & Signature

```typescript
public onCloseMenuPanel(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onCloseMenuPanel(): void {
	this.playSfxClick();
	this.gameLogic.emit(GameLogicUIEvents.CLOSE_MENU_PANEL);
}
```
