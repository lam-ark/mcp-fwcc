---
id: "cc_slot_module:GameDataStore:method:getNextGameMode"
title: "GameDataStore.getNextGameMode() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "getNextGameMode"]
---

# `GameDataStore.getNextGameMode(): number`

---

## 1. Method Signature
```typescript
getNextGameMode(): number
```

---

## 2. Detailed Algorithmic Execution Logic
Parses `this.playSession.nextMode` into an integer and returns it.

---

## 3. Un-truncated Source Code Implementation
```typescript
getNextGameMode(): number {
    return parseInt(this.playSession.nextMode);
}
```
