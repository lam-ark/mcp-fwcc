---
id: "cc_slot_module:WinAmountModule:recipes:custom_win_level_particles_recipe"
title: "Recipe: Implementing Tier-Based Particle Halos on Win Counts"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "recipes", "win_particles"]
---

# 💡 Recipe: Implementing Tier-Based Particle Halos on Win Counts

---

## 1. Subclass Implementation

```typescript
@ccclass
export class CustomWinAmountModule extends WinAmountModule {
    @property(cc.ParticleSystem) smallWinParticle: cc.ParticleSystem = null;
    @property(cc.ParticleSystem) bigWinParticle: cc.ParticleSystem = null;

    playWinEffect(winLevel: number): void {
        this.stopWinEffect();
        if (winLevel >= 3 && this.bigWinParticle) {
            this.bigWinParticle.resetSystem();
        } else if (winLevel > 0 && this.smallWinParticle) {
            this.smallWinParticle.resetSystem();
        }
    }

    stopWinEffect(): void {
        if (this.smallWinParticle) this.smallWinParticle.stopSystem();
        if (this.bigWinParticle) this.bigWinParticle.stopSystem();
    }
}
```
