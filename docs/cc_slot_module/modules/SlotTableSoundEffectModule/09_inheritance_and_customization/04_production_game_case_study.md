---
id: "cc_slot_module:SlotTableSoundEffectModule:inheritance:production_game_case_study"
title: "SlotTableSoundEffectModule Production Case Study (Red Cliff g9666L)"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "inheritance", "case_study", "red_cliff"]
---

# 🎮 SlotTableSoundEffectModule Production Case Study (Red Cliff `g9666L`)

---

## 1. Case Study Overview

Red Cliff (`g9666L`) features custom Sword Clash sounds on Wild symbol landings and War Horn audio ladders on Scatter triggers.

---

## 2. Production Subclass Implementation

```typescript
const { ccclass, property } = cc._decorator;
import { SlotTableSoundEffectModule } from "SlotTableSoundEffectModule";

@ccclass
export default class SlotTableSoundEffectModule9666 extends SlotTableSoundEffectModule {
    @property
    sfxWildLandId: string = "WILD_LAND";

    countWild: number = 0;

    onReelStartSound(): void {
        super.onReelStartSound();
        this.countWild = 0;
    }

    onReelStopSound(data: any): void {
        const { reelIndex, matrix } = data;
        const symbols = matrix[reelIndex];
        
        let hasWild = false;
        symbols.forEach(symbol => {
            if (symbol === "K" || symbol === "WILD") {
                this.countWild++;
                hasWild = true;
            }
        });

        if (hasWild && !data.context.isTurbo && !data.context.isFastToResult()) {
            this.soundPlayer.playSfx(this.sfxWildLandId);
        }

        super.onReelStopSound(data);
    }
}
```
