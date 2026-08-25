---
id: "cc_slot_module:JackpotHistoryModule:methods:onNextPage"
title: "JackpotHistoryModule.onNextPage Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "onNextPage"]
---

# 📖 `JackpotHistoryModule.onNextPage()`

---

## 1. Method Overview & Signature

```typescript
public onNextPage(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onNextPage(): void {
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.gameLogic.emit(GameLogicUIEvents.REQUEST_JACKPOT_NEXT_PAGE);
}
```
