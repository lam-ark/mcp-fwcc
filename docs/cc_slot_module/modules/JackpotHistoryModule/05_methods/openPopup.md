---
id: "cc_slot_module:JackpotHistoryModule:methods:openPopup"
title: "JackpotHistoryModule.openPopup Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "openPopup"]
---

# 📖 `JackpotHistoryModule.openPopup()`

---

## 1. Method Overview & Signature

```typescript
public openPopup(): void
```

---

## 2. Complete Source Code Implementation

```typescript
openPopup(): void {
	const data = { itemPerPage: this.itemPerPage, jpList: this.jpList };
	this.gameLogic.emit(GameLogicUIEvents.INIT_JACKPOT_HISTORY, data);
}
```
