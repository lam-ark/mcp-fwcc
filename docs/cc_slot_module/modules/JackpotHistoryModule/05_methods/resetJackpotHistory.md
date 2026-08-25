---
id: "cc_slot_module:JackpotHistoryModule:methods:resetJackpotHistory"
title: "JackpotHistoryModule.resetJackpotHistory Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "resetJackpotHistory"]
---

# 📖 `JackpotHistoryModule.resetJackpotHistory()`

---

## 1. Method Overview & Signature

```typescript
public resetJackpotHistory(): void
```

---

## 2. Complete Source Code Implementation

```typescript
resetJackpotHistory(): void {
	this.nextBtn.interactable = false;
	this.backBtn.interactable = false;
	this.pageIndexNode.active = false;
	this.messageNode.active = false;
}
```
