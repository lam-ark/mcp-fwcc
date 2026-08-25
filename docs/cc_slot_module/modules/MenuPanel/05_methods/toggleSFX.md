---
id: "cc_slot_module:MenuPanel:methods:toggleSFX"
title: "MenuPanel.toggleSFX Method"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "methods", "toggleSFX"]
---

# 📖 `MenuPanel.toggleSFX()`

---

## 1. Method Overview & Signature

```typescript
public toggleSFX(): void
```

---

## 2. Complete Source Code Implementation

```typescript
toggleSFX(): void {
	this.gameLogic.emit(GameLogicUIEvents.TOGGLE_SFX);
	if (this.soundPlayer && this.initialized) {
		this.soundPlayer.playSFXClick();
	}
}
```
