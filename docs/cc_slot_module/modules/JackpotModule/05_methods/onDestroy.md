---
id: "cc_slot_module:JackpotModule:methods:onDestroy"
title: "JackpotModule.onDestroy Method"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `JackpotModule.onDestroy()`

---

## 1. Method Overview & Signature

Releases reactive observers registered against `uiManagerData` and `jackpotData`.

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
    this.observer.releaseAll(this.uiManagerData, this);
    this.observer.releaseAll(this.jackpotData, this);
}
```
