---
id: "cc_slot_module:JackpotHistoryModule:methods:onShowLoading"
title: "JackpotHistoryModule.onShowLoading Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "onShowLoading"]
---

# 📖 `JackpotHistoryModule.onShowLoading()`

---

## 1. Method Overview & Signature

```typescript
public onShowLoading(isActive: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onShowLoading(isActive: boolean): void {
	this.loading.active = isActive;
}
```
