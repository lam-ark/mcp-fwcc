---
id: "cc_slot_module:SlotTablePaylineModule:inheritance:production_game_case_study"
title: "SlotTablePaylineModule Production Case Study (Red Cliff g9666L)"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "inheritance", "case_study", "red_cliff"]
---

# 🎮 SlotTablePaylineModule Production Case Study (Red Cliff `g9666L`)

---

## 1. Case Study Overview

Red Cliff (`g9666L`) features a 243 AllWays calculation system in the Base Game that activates dynamic multiplier frames on Wild symbols during win presentation.

---

## 2. Production Subclass Implementation

```typescript
const { ccclass, property } = cc._decorator;
import { SlotTablePaylineModule } from "SlotTablePaylineModule";
import { PaylineEventTypes } from "PaylineTypes";

@ccclass
export default class SlotTablePaylineModule9666 extends SlotTablePaylineModule {
    @property(cc.Node) wildMultiplierLayer: cc.Node = null;

    protected initExtend(): void {
        if (this.wildMultiplierLayer) {
            this.wildMultiplierLayer.active = false;
        }
    }

    protected onSetupPaylines(): void {
        super.onSetupPaylines();
        // Additional game-specific win processing
        const winSymbols = this.slotTablePaylineData.getWinSymbols();
        const hasWildWin = winSymbols.some(s => s.symbol === "K");
        if (hasWildWin && this.wildMultiplierLayer) {
            this.wildMultiplierLayer.active = true;
        }
    }
}
```
