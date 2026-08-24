---
id: "cc_slot_module:CoinsEffect:methods:hideCoinsEffect"
title: "CoinsEffect.hideCoinsEffect Method"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "methods", "hideCoinsEffect"]
---

# 📖 `CoinsEffect.hideCoinsEffect()`

---

## 1. Method Overview & Signature

Iterates through all managed `cc.ParticleSystem` components and calls `stopSystem()` to halt new particle emissions.

```typescript
public hideCoinsEffect(): void
```

---

## 2. Complete Source Code Implementation

```typescript
hideCoinsEffect(): void {
    this.coinParticles.forEach(particle => {
        particle.stopSystem();
    });
}
```
