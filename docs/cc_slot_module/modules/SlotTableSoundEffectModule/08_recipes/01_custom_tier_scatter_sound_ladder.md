---
id: "cc_slot_module:SlotTableSoundEffectModule:recipes:custom_tier_scatter_sound_ladder"
title: "Recipe: Escalating Pitch Sound Ladder Implementation"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "recipes", "sound_ladder"]
---

# 💡 Recipe: Escalating Pitch Sound Ladder Implementation

---

## 1. Context & Use Case

To reduce audio asset bundle size, games can reuse a single Scatter sound effect and programmatically pitch-shift or volume-boost subsequent landings.

---

## 2. Implementation Subclass

```typescript
const { ccclass } = cc._decorator;
import { SlotTableSoundEffectModule } from "SlotTableSoundEffectModule";

@ccclass
export class DynamicPitchSoundEffectModule extends SlotTableSoundEffectModule {
    playSfxSpecialSymbol({ hasSpecialBonus, hasSpecialScatter, hasSpecialJackpot }): void {
        super.playSfxSpecialSymbol({ hasSpecialBonus, hasSpecialScatter, hasSpecialJackpot });
        if (hasSpecialScatter && this.countScatter >= 3) {
            // Trigger haptic vibration or secondary sting audio
            this.soundPlayer.playSfx("SCATTER_TRIGGER_HIT");
        }
    }
}
```
