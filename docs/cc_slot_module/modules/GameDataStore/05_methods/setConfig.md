---
id: "cc_slot_module:GameDataStore:method:setConfig"
title: "GameDataStore.setConfig() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "setConfig"]
---

# `GameDataStore.setConfig(gameConfig: GameConfig): void`

---

## 1. Method Signature
```typescript
setConfig(gameConfig: GameConfig): void
```

---

## 2. Detailed Algorithmic Execution Logic
Stores the global game configuration reference: `this.gameConfig = gameConfig`.

---

## 3. Un-truncated Source Code Implementation
```typescript
setConfig(gameConfig): void {
    this.gameConfig = gameConfig;
}
```
