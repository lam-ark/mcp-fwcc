---
id: "cc_slot_module:JackpotHistoryModule:methods:onDestroy"
title: "JackpotHistoryModule.onDestroy Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `JackpotHistoryModule.onDestroy()`

---

## 1. Method Overview & Signature

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
	this.observer.releaseAll(this.jackpotHistoryData, this);
}
```
