---
id: "cc_slot_module:ExtraBetModule:methods:onMinExtraBetEnable"
title: "ExtraBetModule.onMinExtraBetEnable Method"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "methods", "onMinExtraBetEnable"]
---

# 📖 `ExtraBetModule.onMinExtraBetEnable()`

---

## 1. Method Overview & Signature

Synchronizes `decreaseExtraBet.interactable` with `minExtraBetEnable`.

```typescript
public onMinExtraBetEnable(minExtraBetEnable: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onMinExtraBetEnable(minExtraBetEnable: boolean): void {
    this.decreaseExtraBet.interactable = minExtraBetEnable;
}
```
