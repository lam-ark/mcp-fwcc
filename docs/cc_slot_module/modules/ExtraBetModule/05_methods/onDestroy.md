---
id: "cc_slot_module:ExtraBetModule:methods:onDestroy"
title: "ExtraBetModule.onDestroy Method"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `ExtraBetModule.onDestroy()`

---

## 1. Method Overview & Signature

Releases reactive observers subscribed to `eno.BetData`.

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
    this.observer.releaseAll(this.betModel, this);
}
```
