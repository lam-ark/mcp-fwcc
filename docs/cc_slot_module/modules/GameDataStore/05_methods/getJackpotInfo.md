---
id: "cc_slot_module:GameDataStore:method:getJackpotInfo"
title: "GameDataStore.getJackpotInfo() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "getJackpotInfo", "jackpot", "parser"]
---

# `GameDataStore.getJackpotInfo(): { jackpotType: string, jackpotValue: number } | null`

---

## 1. Method Signature
```typescript
public getJackpotInfo(): { jackpotType: string, jackpotValue: number } | null | undefined
```

---

## 2. Detailed Algorithmic Execution Logic
1. Checks if `jackpot` exists in `this.playSession`. Returns `null` if empty or undefined.
2. Extracts the last item from the jackpot string array (e.g. `"9000_4_GRAND;2500000"` or `"9000_4_USD_GRAND;2500000"`).
3. Splits by `;` delimiter to separate identifier and monetary value.
4. Splits prefix by `_` to extract the trailing token representing `jackpotType` (`GRAND`, `MAJOR`, `MINOR`, `MINI`).
5. Returns typed object `{ jackpotType, jackpotValue }`.

---

## 3. Un-truncated Source Code Implementation
```typescript
// ['9000_4_GRAND;2500000'] || ['9000_4_USD_GRAND;2500000']
getJackpotInfo(): { jackpotType: string, jackpotValue: number } | null | undefined {
    const { jackpot } = this.playSession;
    if (!jackpot) {
        return null;
    }

    const jackpotInfo = jackpot[jackpot.length - 1].split(';');
    const jackpotResult = jackpotInfo[0].split('_');
    const jackpotValue = Number(jackpotInfo[1]);
    const jackpotType = jackpotResult[jackpotResult.length - 1];
    return { jackpotType, jackpotValue };
}
```
