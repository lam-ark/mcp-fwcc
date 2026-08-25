---
id: "cc_slot_module:JackpotHistoryModule:methods:onPrevPage"
title: "JackpotHistoryModule.onPrevPage Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "onPrevPage"]
---

# 📖 `JackpotHistoryModule.onPrevPage()`

---

## 1. Method Overview & Signature

```typescript
public onPrevPage(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onPrevPage(): void {
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.gameLogic.emit(GameLogicUIEvents.REQUEST_JACKPOT_PREVIOUS_PAGE);
}
```
