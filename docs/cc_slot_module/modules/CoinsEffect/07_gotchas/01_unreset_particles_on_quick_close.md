---
id: "cc_slot_module:CoinsEffect:gotchas:unreset_particles_on_quick_close"
title: "Gotcha: Stale Particle Systems on Rapid Skip Sequences"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "gotchas", "particle_leak", "skip"]
---

# ⚠️ Gotcha: Stale Particle Systems on Rapid Skip Sequences

---

## 1. Problem Description

When `showCoinsEffect()` is called, it schedules an opacity change after $0.1\text{s}$:
```typescript
this.scheduleOnce(() => {
    eno.setOpacity(particle.node, 255);
}, 0.1);
```
If a user taps to skip within $< 100\text{ms}$ and triggers `hideCoinsEffect()`, the scheduled timer still executes, causing stopped particles to suddenly become fully opaque in a static state.

---

## 2. Solution

In `hideCoinsEffect()`, cancel scheduled tasks and set opacity immediately back to 0:
```typescript
hideCoinsEffect(): void {
    this.unscheduleAllCallbacks();
    this.coinParticles.forEach(particle => {
        particle.stopSystem();
        eno.setOpacity(particle.node, 0);
        particle.node.active = false;
    });
}
```
