---
id: "cc_slot_module:JackpotHistoryModule:methods:enablePreviousBtn"
title: "JackpotHistoryModule.enablePreviousBtn Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "enablePreviousBtn"]
---

# 📖 `JackpotHistoryModule.enablePreviousBtn()`

---

## 1. Method Overview & Signature

```typescript
public enablePreviousBtn(isEnablePrev: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
enablePreviousBtn(isEnablePrev: boolean): void {
	this.backBtn.interactable = isEnablePrev;
}
```
