---
id: "cc_slot_module:TotalWinModule:methods:startParticle"
title: "TotalWinModule.startParticle Method"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "methods", "startParticle"]
---

# 📖 `TotalWinModule.startParticle()`

---

## 1. Method Overview & Signature

Resets and triggers continuous gold coin particle shower emissions.

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
