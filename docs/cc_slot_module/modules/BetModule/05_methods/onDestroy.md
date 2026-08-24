---
id: "cc_slot_module:BetModule:methods:onDestroy"
title: "BetModule.onDestroy Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `BetModule.onDestroy()`

---

## 1. Method Overview & Signature

Releases all reactive observers registered against `eno.BetData`.

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
