---
id: "cc_slot_module:BonusGameItemModule:recipe:custom_spine_chest_animation"
title: "Recipe: Multi-Track Spine Chest Animation"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "recipe", "spine_animation"]
---

# 🍳 Recipe: Multi-Track Spine Chest Animation

## 1. Problem Statement
You need to play idle swaying animations on unopened chests and transition smoothly into an "open" explosion animation upon click.

---

## 2. Step-by-Step Implementation

### Step 1: Subclass `BonusGameItemModule`
```typescript
@ccclass
export class SpineChestItemModule extends BonusGameItemModule {
    @property(sp.Skeleton)
    skeleton: sp.Skeleton = null;

    override init(itemId: number): void {
        super.init(itemId);
        this.skeleton.setAnimation(0, "idle", true);
    }

    override playAnimOpen(value: number, callback: Function = () => {}): void {
        this.node["isOpen"] = true;
        this.disableClick();
        this.skeleton.setAnimation(0, "open", false);
        this.skeleton.setCompleteListener(() => {
            this.showScore(value);
            callback();
        });
    }
}
```
