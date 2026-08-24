---
id: "cc_slot_module:TableModuleConfig:recipe:custom_speed_curve_profile"
title: "Recipe: Crafting Snappy Lightning Spin Speed Presets"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "recipe", "speed_tuning", "lightning_spin"]
---

# 🍳 Recipe: Crafting Snappy Lightning Spin Speed Presets

## 1. Problem Statement
Add an ultra-fast "Lightning Spin" mode ($< 0.4\text{s}$ per spin) alongside Normal and Turbo.

---

## 2. Configuration Code

In `TableModuleConfig9666.ts`:
```typescript
@ccclass
export class TableModuleConfig9666 extends TableModuleConfig {
    onLoad(): void {
        this.MODES.LIGHTNING = {
            speed: 0.03,
            easingStop: 5,
            easingTimeStop: 0.08,
            delayStop: 0,
            isTurbo: true,
            stepStop: 3,
            slowdownFactor: 12,
        };
    }
}
```
