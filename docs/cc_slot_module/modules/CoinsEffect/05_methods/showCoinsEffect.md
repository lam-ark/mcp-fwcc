---
id: "cc_slot_module:CoinsEffect:methods:showCoinsEffect"
title: "CoinsEffect.showCoinsEffect Method"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "methods", "showCoinsEffect"]
---

# 📖 `CoinsEffect.showCoinsEffect()`

---

## 1. Method Overview & Signature

Activates particle nodes, calls `resetSystem()`, and smoothly fades opacity from 1 to 255 after 0.1s.

```typescript
public showCoinsEffect(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showCoinsEffect(): void {
    this.coinParticles.forEach(particle => {
        if (!particle.node.active) {
            particle.node.active = true;
            eno.setOpacity(particle.node, 1);
            particle.resetSystem();
            this.scheduleOnce(() => {
                eno.setOpacity(particle.node, 255);
            }, 0.1);
        }
    });
}
```
