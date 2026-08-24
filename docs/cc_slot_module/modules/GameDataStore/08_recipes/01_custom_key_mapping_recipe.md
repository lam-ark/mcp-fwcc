---
id: "cc_slot_module:GameDataStore:recipe:custom_key_mapping"
title: "Recipe: Custom Backend Key Mapping & Payload Extension"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "recipes", "key_mapping", "mapNewKeys", "parseDataPS"]
---

# 💡 Recipe: Custom Backend Key Mapping & Payload Extension

## 1. Concrete Subclass Implementation

```typescript
const { _decorator } = cc;
import { GameDataStore } from "GameDataStore";
const { ccclass } = _decorator;

@ccclass("GameDataStoreCustom")
export default class GameDataStoreCustom extends GameDataStore {
    parseDataPS(data: any): void {
        let updatedData = { ...data };
        
        // 1. Add extra computed fields
        updatedData.totalMultiplier = (data.multipliers || []).reduce((a, b) => a * b, 1);
        
        // 2. Pass to base store
        super.parseDataPS(updatedData);
        
        // 3. Remap shorthand socket keys to SDK standard keys
        this.playSession = this.mapNewKeys(this.playSession, {
            "m": "matrix",
            "w": "winAmount",
            "wl": "winLines",
            "jp": "jackpot"
        });
    }
}
```
