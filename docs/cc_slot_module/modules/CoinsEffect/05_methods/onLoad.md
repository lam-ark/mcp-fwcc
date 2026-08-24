---
id: "cc_slot_module:CoinsEffect:methods:onLoad"
title: "CoinsEffect.onLoad Method"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "methods", "onLoad"]
---

# 📖 `CoinsEffect.onLoad()`

---

## 1. Method Overview & Signature

Registers node event listeners `SHOW_COINS_EFFECT` and `HIDE_COINS_EFFECT`, and resets initial opacity to 0.

```typescript
protected onLoad(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected onLoad(): void {
    this.node.on("SHOW_COINS_EFFECT", this.showCoinsEffect, this);
    this.node.on("HIDE_COINS_EFFECT", this.hideCoinsEffect, this);
    this.coinParticles.forEach(particle => {
        eno.setOpacity(particle.node, 0);
        particle.node.active = false;
    });
}
```
