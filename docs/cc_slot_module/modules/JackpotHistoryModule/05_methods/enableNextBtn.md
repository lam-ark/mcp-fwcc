---
id: "cc_slot_module:JackpotHistoryModule:methods:enableNextBtn"
title: "JackpotHistoryModule.enableNextBtn Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "enableNextBtn"]
---

# 📖 `JackpotHistoryModule.enableNextBtn()`

---

## 1. Method Overview & Signature

```typescript
public enableNextBtn(isEnableNext: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
enableNextBtn(isEnableNext: boolean): void {
	this.nextBtn.interactable = isEnableNext;
}
```
