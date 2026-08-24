---
id: "cc_slot_module:JackpotWinModule:methods:startParticle"
title: "JackpotWinModule.startParticle Method"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "methods", "startParticle"]
---

# 📖 `JackpotWinModule.startParticle()`

---

## 1. Method Overview & Signature

Triggers particle system simulation for the jackpot coin burst.

```typescript
public startParticle(): void
```

---

## 2. Complete Source Code Implementation

```typescript
startParticle(): void {
    this._coinParticle && this._coinParticle.resetSystem();
}
```
