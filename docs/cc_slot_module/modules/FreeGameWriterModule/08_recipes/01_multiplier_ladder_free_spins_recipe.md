---
id: "cc_slot_module:FreeGameWriterModule:recipe:multiplier_ladder_free_spins"
title: "Recipe: Adding Escalating Multiplier Step to Free Spin Trigger"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "recipe", "multiplier"]
---

# 🍳 Recipe: Adding Escalating Multiplier Step to Free Spin Trigger

## 1. Problem Statement
In cascading Free Spins, increase the multiplier badge (1x ➔ 2x ➔ 3x ➔ 5x) before triggering the spin.

---

## 2. Implementation

```typescript
@ccclass
export default class MultiplierFreeGameWriter extends FreeGameWriterModule {
    override makeScriptFreeSpinTrigger(): Object[] {
        const listScript = super.makeScriptFreeSpinTrigger();
        listScript.push({
            command: "_showMultiplier",
            data: this.dataStore.playSession.multiplier || 1,
        });
        return listScript;
    }
}
```
