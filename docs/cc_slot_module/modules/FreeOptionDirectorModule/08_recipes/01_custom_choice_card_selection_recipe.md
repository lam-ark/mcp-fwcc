---
id: "cc_slot_module:FreeOptionDirectorModule:recipe:custom_choice_card_selection"
title: "Recipe: Adding Card Selection & Dimming Unselected VFX"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "recipe", "card_selection"]
---

# 🍳 Recipe: Adding Card Selection & Dimming Unselected VFX

## 1. Problem Statement
Highlight the player's chosen volatility card while dimming the other options to 100 opacity before transitioning to Free Spins.

---

## 2. Implementation

In `FreeOptionDirector[GameId].ts`:
```typescript
@ccclass
export class CustomFreeOptionDirector extends FreeOptionDirectorModule {
    override optionClick(ev: any, optionId: number): void {
        const selectedOption = Number(optionId ? optionId : ev.target.optionId);
        this.options.forEach((item) => {
            item.optionNode.getComponent(Button).interactable = false;
            const isChosen = Number(item.optionId) === selectedOption;
            tween(item.optionNode)
                .to(0.3, { opacity: isChosen ? 255 : 100, scale: isChosen ? 1.1 : 0.9 })
                .start();
        });
        super.optionClick(ev, selectedOption);
    }
}
```
