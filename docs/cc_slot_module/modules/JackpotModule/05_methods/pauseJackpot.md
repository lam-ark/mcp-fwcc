---
id: "cc_slot_module:JackpotModule:methods:pauseJackpot"
title: "JackpotModule.pauseJackpot Method"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "methods", "pauseJackpot"]
---

# 📖 `JackpotModule.pauseJackpot()`

---

## 1. Method Overview & Signature

Sets `pauseUpdateJackpot = true` on `JackpotData` to freeze pool counting during celebrations.

```typescript
public pauseJackpot(): void
```

---

## 2. Complete Source Code Implementation

```typescript
pauseJackpot(): void {
    this.jackpotData.setPauseJackpot(true);
}
```
