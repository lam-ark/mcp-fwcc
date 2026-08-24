---
id: "cc_slot_module:GameDataStore:gotcha:compressed_server_key_mismatch_without_mapNewKeys"
title: "Gotcha: Compressed Server Keys Cause Missing Data in Modules"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "gotchas", "mapNewKeys"]
---

# ⚠️ Gotcha: Compressed Server Keys Cause Missing Data in Modules

## 1. Defect Symptom
Server sends bandwidth-optimized keys like `cna`, `pMul`, `mulF`, but UI components looking for `currentNormalGameWinAmount` remain empty.

---

## 2. Root Cause Analysis
Default `GameDataStore.parseDataPS(data)` sets `this.playSession = data` verbatim without key translation.

---

## 3. Recommended Resolution
Subclass `GameDataStore` and implement `mapDataPS()` using `this.mapNewKeys()`:
```typescript
@ccclass
export class GameDataStore9666 extends GameDataStore {
    parseDataPS(data): void {
        super.parseDataPS(data);
        this.playSession = this.mapDataPS(this.playSession);
    }

    mapDataPS(data: any): any {
        return this.mapNewKeys(data, {
            "pMul": "previousMultiplier",
            "mulF": "freeGameMultiplier",
            "cna": "currentNormalGameWinAmount",
        });
    }
}
```
