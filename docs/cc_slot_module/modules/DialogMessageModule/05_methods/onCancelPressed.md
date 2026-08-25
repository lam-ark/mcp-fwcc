---
id: "cc_slot_module:DialogMessageModule:methods:onCancelPressed"
title: "DialogMessageModule.onCancelPressed Method"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "methods", "onCancelPressed"]
---

# 📖 `DialogMessageModule.onCancelPressed()`

---

## 1. Method Overview & Signature

```typescript
public onCancelPressed(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onCancelPressed(): void {
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.gameLogic.emit(GameLogicUIEvents.ON_ACTION_CANCEL);
}
```
