---
id: "cc_slot_module:GameDataStore:method:resetDataPS"
title: "GameDataStore.resetDataPS() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "resetDataPS"]
---

# `GameDataStore.resetDataPS(): void`

---

## 1. Method Signature
```typescript
resetDataPS(): void
```

---

## 2. Detailed Algorithmic Execution Logic
If `hasPlaySession()` is true, sets `this.playSession.winAmountPS = 0` and `this.playSession.isFinished = true`.

---

## 3. Un-truncated Source Code Implementation
```typescript
resetDataPS(): void {
    if (this.hasPlaySession()) {
        this.playSession.winAmountPS = 0;
        this.playSession.isFinished = true;
    }
}
```
