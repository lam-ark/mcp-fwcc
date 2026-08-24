---
id: "cc_slot_module:GameDataStore:method:resetWinAmount"
title: "GameDataStore.resetWinAmount() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "resetWinAmount"]
---

# `GameDataStore.resetWinAmount(): void`

---

## 1. Method Signature
```typescript
resetWinAmount(): void
```

---

## 2. Detailed Algorithmic Execution Logic
If `hasPlaySession()` is true and `currentGameMode === NORMAL_GAME`, resets `winAmountPS = 0` and `winAmount = 0`.

---

## 3. Un-truncated Source Code Implementation
```typescript
resetWinAmount(): void {
    if (this.hasPlaySession() && this.currentGameMode === GAME_MODE_ENUM.NORMAL_GAME) {
        this.playSession.winAmountPS = 0;
        this.playSession.winAmount = 0;
    }
}
```
