---
id: "cc_slot_module:JackpotWinModule:methods:stopParticle"
title: "JackpotWinModule.stopParticle Method"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "methods", "stopParticle"]
---

# 📖 `JackpotWinModule.stopParticle()`

---

## 1. Method Overview & Signature

Halts active coin particle emission.

```typescript
public stopParticle(): void
```

---

## 2. Complete Source Code Implementation

```typescript
stopParticle(): void {
    this._coinParticle && this._coinParticle.stopSystem();
}
```
