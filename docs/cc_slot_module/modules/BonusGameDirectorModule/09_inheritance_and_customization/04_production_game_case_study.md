---
id: "cc_slot_module:BonusGameDirectorModule:customization:production_game_case_study"
title: "Production Case Study: Interactive Chest Bonus Feature"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "customization", "case_study", "chest_bonus"]
---

# 📖 Production Case Study: Interactive Chest Bonus Feature

## 1. Context & Production Code Flow

In slot games with pick-and-win features (e.g. 3-out-of-5 treasure chests), `BonusGameDirectorModule` coordinates the pick loop:

```typescript
@ccclass
export default class CustomBonusGameDirectorModule extends BonusGameDirectorModule {
    onLoadExtend(): void {
        super.onLoadExtend();
        this.node["director"] = this;
        this.node["writer"] = this.getComponent(CustomBonusGameWriterModule);
        this.init();
    }

    async _openItem(bonusValue: any): Promise<void> {
        // 1. Play chest open Spine animation
        await this.chestGrid.openChest(this.selectedBox, bonusValue);
        // 2. Play coin burst sound effect
        this.soundPlayer.playSfx("SFX_BONUS_COIN");
    }
}
```
