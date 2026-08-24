---
id: "cc_slot_module:BonusGameWriterModule:recipe:custom_bonus_script_pipeline"
title: "Recipe: Custom Multiplier Step in Pick Bonus Pipeline"
category: "cc_slot_module"
tags: ["BonusGameWriterModule", "bonus_game_writer", "cc_slot_module", "recipe", "script_pipeline"]
---

# 🍳 Recipe: Custom Multiplier Step in Pick Bonus Pipeline

## 1. Problem Statement
You need to insert a custom `_playMultiplierBurst` step immediately following each chest opening before allowing the player to pick again.

---

## 2. Step-by-Step Implementation

### Step 1: Subclass `BonusGameWriterModule`
```typescript
@ccclass
export class CustomBonusGameWriterModule extends BonusGameWriterModule {
    override makeScriptShowResultEntry(): any[] {
        const list = super.makeScriptShowResultEntry();
        if (this.dataStore.playSession.nextMode === GAME_MODE_ENUM.BONUS_GAME) {
            list.push({ command: "_playMultiplierBurst" });
        }
        return list;
    }
}
```

### Step 2: Implement Method in Director
```typescript
async _playMultiplierBurst(): Promise<void> {
    await this.multiplierVfx.playBurst();
}
```
