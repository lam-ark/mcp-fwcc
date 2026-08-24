---
id: "cc_slot_module:JackpotWinModule:methods:onLoadExtend"
title: "JackpotWinModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `JackpotWinModule.onLoadExtend()`

---

## 1. Method Overview & Signature

Initializes internal component references for the score label (`cc.Label`) and celebratory coin particle system (`cc.ParticleSystem`).

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
