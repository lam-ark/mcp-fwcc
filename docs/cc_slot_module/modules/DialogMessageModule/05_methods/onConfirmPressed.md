---
id: "cc_slot_module:DialogMessageModule:methods:onConfirmPressed"
title: "DialogMessageModule.onConfirmPressed Method"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "methods", "onConfirmPressed"]
---

# 📖 `DialogMessageModule.onConfirmPressed()`

---

## 1. Method Overview & Signature

```typescript
public onConfirmPressed(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onConfirmPressed(): void {
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.gameLogic.emit(GameLogicUIEvents.ON_ACTION_OK);
}
```
