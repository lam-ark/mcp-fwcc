---
id: "cc_slot_module:TotalWinModule:methods:onLoadExtend"
title: "TotalWinModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `TotalWinModule.onLoadExtend()`

---

## 1. Method Overview & Signature

Initializes internal component references for the total win label and coin particle system.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this._lbWinAmount = this.winAmount && this.winAmount.getComponent(Label);
    this._coinParticle = this.coinsEffect && this.coinsEffect.getComponent(ParticleSystem);
}
```
