---
id: "cc_slot_module:GameDataStore:method:getJackpotInfo"
title: "GameDataStore.getJackpotInfo() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "getJackpotInfo", "jackpot", "payload_parsing"]
---

# `GameDataStore.getJackpotInfo(): { jackpotType: string, jackpotValue: number } | null`

---

## 1. Method Signature
```typescript
public getJackpotInfo(): { jackpotType: string, jackpotValue: number } | null | undefined
```

---

## 2. Detailed Algorithmic Execution Logic
1. Reads `this.playSession.jackpot` array (e.g. `['9000_4_GRAND;2500000']` or `['9000_4_USD_GRAND;2500000']`).
2. If absent, returns `null`.
3. Takes the last entry and splits by `;` to extract `jackpotValue`.
4. Splits the prefix by `_` to extract `jackpotType` (e.g. `GRAND`, `MAJOR`, `MINOR`, `MINI`).

---

## 3. Un-truncated Source Code Implementation
```typescript
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
