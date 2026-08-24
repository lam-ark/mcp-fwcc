---
id: "cc_slot_module:FortuneWheelGameDirector:recipe:custom_fortune_wheel_game_director"
title: "Custom Fortune Wheel Game Director Production Recipe"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "recipes", "production_code", "subclassing", "wheel_bonus"]
---

# 💡 Production Recipe: Custom Fortune Wheel Game Director with Multi-tier Multipliers

---

## 1. Context & Use Case
In modern slot titles (such as wheel bonus feature games), the Wheel of Fortune must trigger pointer clicking audio on each sector passed, support tiered multiplier upgrades, and trigger Spine victory animations upon stopping.

---

## 2. Complete Production Subclass Implementation

```typescript
const { _decorator } = cc;
import { FortuneWheelGameDirector } from "cc-slot-module/GameMode/FortuneWheelGame/Scripts/Director/FortuneWheelGameDirector";
import { GameLogicUIEvents } from "cc-slot-module/Core/GameLogicUIEvents";
const { ccclass, property } = _decorator;

@ccclass("FortuneWheelGameDirector9888")
export class FortuneWheelGameDirector9888 extends FortuneWheelGameDirector {

    @property(cc.Node)
    pointerNode: cc.Node = null;

    @property(sp.Skeleton)
    wheelSpineVFX: sp.Skeleton = null;

    onExtendedLoad(): void {
        super.onExtendedLoad();
        this.moduleEvent.on("WHEEL_PASSED_SECTOR", this.onPassedSector, this);
    }

    onSpinWheel(): void {
        super.onSpinWheel();
        if (this.wheelSpineVFX) {
            this.wheelSpineVFX.setAnimation(0, "spin_loop", true);
        }
        this.soundPlayer.playSFX("wheel_spin_start");
    }

    onPassedSector(): void {
        // Play click tick SFX on pointer hit
        this.soundPlayer.playSFX("wheel_tick");
        if (this.pointerNode) {
            cc.tween(this.pointerNode)
                .to(0.04, { angle: 15 })
                .to(0.04, { angle: 0 })
                .start();
        }
    }

    async _showWheelResult(bonusValue: number): Promise<void> {
        await super._showWheelResult(bonusValue);
        
        if (this.wheelSpineVFX) {
            this.wheelSpineVFX.setAnimation(0, "win_celebrate", false);
        }
        this.soundPlayer.playSFX("wheel_win_prize");
    }

    resetBonusGame(): void {
        super.resetBonusGame();
        if (this.wheelSpineVFX) {
            this.wheelSpineVFX.setAnimation(0, "idle", true);
        }
    }
}
```
