---
id: "cc_slot_module:SlotSymbolModule:customization:production_game_case_study"
title: "Production Case Study: Red Cliff SlotSymbolModule9666"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "customization", "case_study", "red_cliff"]
---

# 🎮 Production Case Study: Red Cliff `SlotSymbolModule9666`

---

## 1. Context
In Red Cliff (`g9666L`), warrior symbols (`"K1"`, `"K2"`) play customized glowing border VFX and special victory Spine voice lines upon hitting a 5-of-a-kind payline.

---

## 2. Production Implementation Excerpt

```typescript
const { _decorator } = cc;
import { SlotSymbolModule } from "cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolModule";
const { ccclass } = _decorator;

@ccclass("SlotSymbolModule9666")
export class SlotSymbolModule9666 extends SlotSymbolModule {

    playAnimationWin(loop: boolean = true): void {
        super.playAnimationWin(loop);

        if (this.symbolCode === "K1") {
            // Trigger customized warrior victory voiceover
            this.node.emit("PLAY_WARRIOR_VICTORY_SFX", this.symbolCode);
        }
    }
}
```
