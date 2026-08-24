---
id: "cc_slot_module:systems:reactive_data:key_deobfuscation_map_new_keys"
title: "Network Payload Key Normalization (mapNewKeys)"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "reactive_data", "key_normalization", "mapNewKeys", "optimization", "flow"]
---

# 🔑 Network Payload Key Normalization (`mapNewKeys`)

---

## 1. Bandwidth Minimization & Key Obfuscation

To minimize mobile 3G/4G bandwidth consumption and reduce latency, slot backend servers transmit compressed/shortened property keys in JSON payloads.

`GameDataStore.mapNewKeys()` acts as the **Schema Normalization Layer**, converting short network tokens into human-readable TypeScript domain properties:

```mermaid
graph LR
    subgraph Server Network Frame
        S1["m: [['A','K','Q'], ...]"]
        S2["pl: [[1, 250], [5, 1000]]"]
        S3["wA: 1250"]
        S4["fgr: 8"]
    end

    subgraph mapNewKeys Normalization
        Trans["GameDataStore.mapNewKeys()"]
    end

    subgraph Normalized SDK Domain Model
        D1["matrix: string[][]"]
        D2["payLines: PaylineData[]"]
        D3["winAmount: number"]
        D4["freeGameRemain: number"]
    end

    S1 --> Trans --> D1
    S2 --> Trans --> D2
    S3 --> Trans --> D3
    S4 --> Trans --> D4
```

---

## 2. Canonical Key Transformation Table

| Obfuscated Key | Normalized Domain Property | Type | Description |
| :--- | :--- | :--- | :--- |
| `m` | `matrix` | `string[][]` | 2D table symbol matrix `[col][row]`. |
| `pl` | `payLines` | `Array<any>` | Winning payline indices and payouts. |
| `wA` | `winAmount` | `number` | Total round payout amount. |
| `fgr` | `freeGameRemain` | `number` | Remaining free spins counter. |
| `cna` | `cascadeNextArray` | `string[][]` | Next refill matrix for avalanches. |
| `pMul` | `paylineMultiplier` | `number` | Active win multiplier for line hits. |

---

## 3. Extensibility & Subclassing

Game titles with custom features (e.g. Megaways dynamic ways or sticky wild multipliers) override `mapNewKeys()` in their custom `GameDataStore` subclass:

```typescript
// CustomGameDataStore.ts
mapNewKeys(data: any): any {
    const normalized = super.mapNewKeys(data);
    if (data.mWay) normalized.megawayWays = data.mWay;
    if (data.stkW) normalized.stickyWilds = data.stkW;
    return normalized;
}
```
