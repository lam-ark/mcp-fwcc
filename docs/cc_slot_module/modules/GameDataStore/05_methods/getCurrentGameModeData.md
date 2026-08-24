---
id: "cc_slot_module:GameDataStore:method:getCurrentGameModeData"
title: "GameDataStore.getCurrentGameModeData() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "getCurrentGameModeData"]
---

# `GameDataStore.getCurrentGameModeData(): any`

---

## 1. Method Signature
```typescript
getCurrentGameModeData(): any
```

---

## 2. Detailed Algorithmic Execution Logic
Returns cached session object for current game mode: `this.gameModeData.get(this.currentGameMode) || {}`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getCurrentGameModeData(): any {
    return this.gameModeData.get(this.currentGameMode) || {};
}
```
