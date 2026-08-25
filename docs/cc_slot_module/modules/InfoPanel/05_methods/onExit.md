---
id: "cc_slot_module:InfoPanel:methods:onExit"
title: "InfoPanel.onExit Method"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "methods", "onExit"]
---

# 📖 `InfoPanel.onExit()`

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
	this.gameLogic.emit(GameLogicUIEvents.CLOSE_INFO_PANEL);
}
```
