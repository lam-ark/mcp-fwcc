---
id: "cc_slot_module:BonusGameDirectorModule:recipe:custom_pick_item_bonus"
title: "Recipe: Custom Spine Chest Pick Animation"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "recipe", "spine_chest", "pick"]
---

# 🍳 Recipe: Custom Spine Chest Pick Animation

## 1. Problem Statement
You need to play a rich Spine animation when a treasure chest is selected, delaying score count-up until the lid bursts open.

---

## 2. Step-by-Step Implementation

### Step 1: Subclass `BonusGameItemModule`
```typescript
@ccclass
export class SpineChestItemModule extends BonusGameItemModule {
    @property(sp.Skeleton)
    chestSpine: sp.Skeleton = null;

    override playAnimOpen(value: number, callback: Function = () => {}): void {
        this.node["isOpen"] = true;
        this.disableClick();
        this.chestSpine.setAnimation(0, "open", false);
        this.chestSpine.setCompleteListener(() => {
            this.showScore(value);
            callback();
        });
    }
}
```

### Step 2: Register in `BonusGameTableModule`
Assign the new Spine chest prefab to `boxPrefab` in `BonusGameTableModule`'s Inspector.
