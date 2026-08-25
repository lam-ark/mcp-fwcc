---
id: "cc_slot_module:JackpotHistoryModule:methods:onClose"
title: "JackpotHistoryModule.onClose Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "onClose"]
---

# 📖 `JackpotHistoryModule.onClose()`

---

## 1. Method Overview & Signature

```typescript
public onClose(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onClose(): void {
	if (this.popupBehavior && this.popupBehavior.isPlaying()) {
		return;
	}
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.gameLogic.emit(GameLogicUIEvents.CLOSE_JACKPOT_HISTORY_PANEL);
}
```
