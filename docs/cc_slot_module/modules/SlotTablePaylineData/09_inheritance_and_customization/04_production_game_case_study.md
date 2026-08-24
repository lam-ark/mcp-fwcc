---
id: "cc_slot_module:SlotTablePaylineData:inheritance:production_game_case_study"
title: "SlotTablePaylineData Production Case Study (Red Cliff g9666L)"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "inheritance", "case_study", "red_cliff"]
---

# 🎮 SlotTablePaylineData Production Case Study (Red Cliff `g9666L`)

---

## 1. Case Study Overview

Red Cliff (`g9666L`) uses a 243 AllWays calculation system in Normal Game and adds extra multiplier tracking data to each converted payline.

---

## 2. Production Subclass Implementation

```typescript
const { ccclass } = cc._decorator;
import { SlotTablePaylineData } from "SlotTablePaylineData";

@ccclass
export default class SlotTablePaylineData9666 extends SlotTablePaylineData {
    registeredKeys = [
        ...new SlotTablePaylineData().registeredKeys,
        "wildMultiplierList",
        "totalWinMultiplier"
    ];

    protected convertPayLine(payLines: string[] = [], isRight: boolean = false): any[] {
        const converted = super.convertPayLine(payLines, isRight);
        const multiplierList = this["wildMultiplierList"] || [];
        
        converted.forEach((line, idx) => {
            if (multiplierList[idx]) {
                line.multiplier = multiplierList[idx];
            }
        });
        
        return converted;
    }
}
```
