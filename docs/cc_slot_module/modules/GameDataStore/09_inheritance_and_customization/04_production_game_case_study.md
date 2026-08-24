---
id: "cc_slot_module:GameDataStore:customization:production_game_case_study"
title: "Production Case Study: GameDataStore9666 (Red Cliff Slot)"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "customization", "case_study", "red_cliff", "g9666L", "production_code"]
---

# 📖 Production Case Study: GameDataStore9666 (Red Cliff Slot)

## 1. Context & Game Requirements

In **Red Cliff (`g9666L`)**, the backend server returns custom abbreviated keys for cascade multipliers and accumulated normal/free game wins:
* `pMul` ➔ Previous multiplier for current normal game spin.
* `pMulF` ➔ Previous multiplier inside free game mode.
* `mulF` ➔ Active free spin multiplier.
* `cna` ➔ Current normal game net win amount.
* `cfa` ➔ Current free game net win amount.

---

## 2. Complete Production Implementation (`GameDataStore9666.ts`)

```typescript
const { _decorator } = cc;
import { GameDataStore } from "../../../../cc-common/cc-slot-module/SlotModuleExport";
const { ccclass } = _decorator;

@ccclass("GameDataStore9666")
export class GameDataStore9666 extends GameDataStore {
    parseDataPS(data: any): void {
        super.parseDataPS(data);
        this.playSession = this.mapDataPS(this.playSession);
    }

    mapDataPS(data: any): any {
        return this.mapNewKeys(data, {
            "pMul": "previousMultiplier",
            "pMulF": "previousMultiplierFreeGame",
            "mulF": "freeGameMultiplier",
            "cna": "currentNormalGameWinAmount",
            "cfa": "currentFreeGameWinAmount"
        });
    }
}
```

---

## 3. Why This Pattern Was Chosen
1. **Zero Breaking Changes**: Keeps base `GameDataStore` clean and generic across other slot games (`g9000`, `g9888`).
2. **Seamless Downstream Compatibility**: Downstream modules like `CollectMultiModule9666` and `FreeGameDirectorModule9666` read clean names (`this.dataStore.playSession.freeGameMultiplier`) instead of cryptic server acronyms.
