---
id: "cc_slot_module:SlotGameSettings:customization:production_game_case_study"
title: "Production Case Study: Speed Control in Red Cliff (g9666L)"
category: "cc_slot_module"
tags: ["SlotGameSettings", "slot_game_settings", "cc_slot_module", "customization", "case_study", "red_cliff", "g9666L", "SpeedDecorators"]
---

# 📖 Production Case Study: Speed Control in Red Cliff (`g9666L`)

## 1. Context & Game Requirements

In **Red Cliff (`g9666L`)**, multiple custom feature modules (such as `StackWildModule`, `SlotTableNearWinRefillModule`, `PaylineInfoModule9666`, `CollectMultiModule9666`) run complex Spine animations and particle effects.

To ensure high frame rates and instantaneous responses during **Fast-To-Result (FTR)** and **Turbo** spins, all custom modules inject `SlotGameSettings`.

---

## 2. Production Code Integration (`StackWildModule.ts`)

```typescript
import { SlotGameSettings } from "../../../../cc-common/cc-slot-module/Core/SlotGameSettings";

@ccclass
export default class StackWildModule extends SlotBaseModule {
    @inject(SlotGameSettings)
    gameSettings: SlotGameSettings;

    async playExpandWildAnimation(columnIndex: number): Promise<void> {
        // 1. If in FTR mode, set final spine skin instantly and return
        if (this.gameSettings && this.gameSettings.isFastToResult) {
            this.setWildExpandedInstant(columnIndex);
            return;
        }

        // 2. If in Turbo mode, double playback speed
        const timeScale = (this.gameSettings && this.gameSettings.isTurboActive) ? 2.0 : 1.0;
        this.spineSkeleton.timeScale = timeScale;

        // 3. Run full expanding wild cutscene
        await this.playSpineAnimation("expand_wild");
    }
}
```
