---
id: "cc_slot_module:ExtraBetModule:methods:onMaxExtraBetEnable"
title: "ExtraBetModule.onMaxExtraBetEnable Method"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "methods", "onMaxExtraBetEnable"]
---

# 📖 `ExtraBetModule.onMaxExtraBetEnable()`

---

## 1. Method Overview & Signature

Synchronizes `increaseExtraBet.interactable` with `maxExtraBetEnable`.

```typescript
public onMaxExtraBetEnable(maxExtraBetEnable: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onMaxExtraBetEnable(maxExtraBetEnable: boolean): void {
    this.increaseExtraBet.interactable = maxExtraBetEnable;
}
```
