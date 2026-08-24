---
id: "cc_slot_module:GameDataStore:method:getResumeWinAmount"
title: "GameDataStore.getResumeWinAmount() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "getResumeWinAmount"]
---

# `GameDataStore.getResumeWinAmount(): number`

---

## 1. Method Signature
```typescript
getResumeWinAmount(): number
```

---

## 2. Detailed Algorithmic Execution Logic
Returns win amount to restore upon game reconnection: `this.playSession ? this.playSession.winAmountPS : 0`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getResumeWinAmount(): number {
    let winAmountPS = this.playSession ? this.playSession.winAmountPS : 0;
    return winAmountPS;
}
```
