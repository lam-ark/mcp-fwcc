---
id: "cc_slot_module:GameDataStore:method:getWinAmountInfo"
title: "GameDataStore.getWinAmountInfo() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "getWinAmountInfo", "win_amount", "timing", "celebration"]
---

# `GameDataStore.getWinAmountInfo(win?: number): { winAmount: number, time: number, winLevel: number, delayTime: number }`

---

## 1. Method Signature
```typescript
public getWinAmountInfo(win?: number): { winAmount: number, time: number, winLevel: number, delayTime: number }
```

---

## 2. Detailed Algorithmic Execution Logic
1. Resolves `winAmount` and evaluates `winLevel` via `this.getWinLevel(win)`.
2. Resolves coin rolling duration `time = this.getCountMoneyTime(winLevel)`.
3. Resolves payline highlight duration `delayTime = this.getWinLineTime(winLevel)`.
4. Returns consolidated timing and level metadata dictionary.

---

## 3. Un-truncated Source Code Implementation
```typescript
getWinAmountInfo(win?: number): { winAmount: number, time: number, winLevel: number, delayTime: number } {
    let { winAmount } = this.playSession;
    win = win || winAmount || 0;
    const winLevel = this.getWinLevel(win);
    return { winAmount: win, time: this.getCountMoneyTime(winLevel), winLevel, delayTime: this.getWinLineTime(winLevel) };
}
```
