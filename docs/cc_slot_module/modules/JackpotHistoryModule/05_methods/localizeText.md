---
id: "cc_slot_module:JackpotHistoryModule:methods:localizeText"
title: "JackpotHistoryModule.localizeText Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "localizeText"]
---

# 📖 `JackpotHistoryModule.localizeText()`

---

## 1. Method Overview & Signature

```typescript
public localizeText(): void
```

---

## 2. Complete Source Code Implementation

```typescript
localizeText(): void {
	if (this.textPage) {
		this.textPage.string = this.gameLogic.getGameText("HISTORY_PAGE");
	}
}
```
