---
id: "cc_slot_module:GameDataStore:recipe:compressed_key_remapping"
title: "Recipe: Remapping Backend Shorthand Keys to Standard Properties"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "recipe", "mapNewKeys"]
---

# 🍳 Recipe: Remapping Backend Shorthand Keys to Standard Properties

## 1. Problem Statement
Backend sends compressed WebSocket payloads (`pMul`, `pMulF`, `mulF`, `cna`) to conserve bandwidth. The client UI expects standard camelCase properties.

---

## 2. Implementation

In `GameDataStore[GameId].ts`:
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
            "pMulF": "previousMultiplierFreeGame",
            "mulF": "freeGameMultiplier",
            "cna": "currentNormalGameWinAmount",
            "cfa": "currentFreeGameWinAmount"
        });
    }
}
```
`updateDataModules()` automatically distributes `freeGameMultiplier` to any `BaseDataModule` registered for that key!
