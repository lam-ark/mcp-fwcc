---
id: "cc_slot_module:GameDataStore:method:getWinAmountPS"
title: "GameDataStore.getWinAmountPS() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "getWinAmountPS"]
---

# `GameDataStore.getWinAmountPS(): number`

---

## 1. Method Signature
```typescript
getWinAmountPS(): number
```

---

## 2. Detailed Algorithmic Execution Logic
Returns `this.playSession.winAmountPS || 0`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getWinAmountPS(): number {
    let winAmountPS = this.playSession ? this.playSession.winAmountPS : 0;
    return winAmountPS;
}
```
