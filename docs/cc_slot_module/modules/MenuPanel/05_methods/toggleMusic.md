---
id: "cc_slot_module:MenuPanel:methods:toggleMusic"
title: "MenuPanel.toggleMusic Method"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "methods", "toggleMusic"]
---

# 📖 `MenuPanel.toggleMusic()`

---

## 1. Method Overview & Signature

```typescript
public toggleMusic(): void
```

---

## 2. Complete Source Code Implementation

```typescript
toggleMusic(): void {
	this.gameLogic.emit(GameLogicUIEvents.TOGGLE_BGM);
	if (this.soundPlayer && this.initialized) {
		this.soundPlayer.playSFXClick();
	}
}
```
