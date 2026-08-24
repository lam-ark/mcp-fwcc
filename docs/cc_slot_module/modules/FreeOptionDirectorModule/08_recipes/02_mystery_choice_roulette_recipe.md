---
id: "cc_slot_module:FreeOptionDirectorModule:recipe:mystery_choice_roulette"
title: "Recipe: Implementing Mystery Roulette Animation"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "recipe", "roulette"]
---

# 🍳 Recipe: Implementing Mystery Roulette Animation

## 1. Problem Statement
When selecting the Mystery option card (Option ID 4), spin a mini wheel to reveal the randomized free spin count and multiplier.

---

## 2. Implementation

```typescript
@ccclass
export class MysteryFreeOptionDirector extends FreeOptionDirectorModule {
    async onMysterySelected(optionId: number): Promise<void> {
        this.stopCountDown();
        if (optionId === 4) {
            await this.playRouletteAnimation();
        }
        this.gameLogic.emit(GameLogicUIEvents.SEND_FREE_OPTION_REQUEST, optionId);
    }
}
```
