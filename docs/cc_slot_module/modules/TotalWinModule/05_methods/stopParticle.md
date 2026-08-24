---
id: "cc_slot_module:TotalWinModule:methods:stopParticle"
title: "TotalWinModule.stopParticle Method"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "methods", "stopParticle"]
---

# 📖 `TotalWinModule.stopParticle()`

---

## 1. Method Overview & Signature

Halts active coin particle shower emissions.

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
