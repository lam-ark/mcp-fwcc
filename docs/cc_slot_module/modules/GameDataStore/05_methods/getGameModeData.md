---
id: "cc_slot_module:GameDataStore:method:getGameModeData"
title: "GameDataStore.getGameModeData() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "getGameModeData"]
---

# `GameDataStore.getGameModeData(gameMode: number): any`

---

## 1. Method Signature
```typescript
getGameModeData(gameMode: number): any
```

---

## 2. Detailed Algorithmic Execution Logic
Returns cached session object for specified mode: `this.gameModeData.get(gameMode) || {}`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getGameModeData(gameMode: number): any {
    return this.gameModeData.get(gameMode) || {};
}
```
