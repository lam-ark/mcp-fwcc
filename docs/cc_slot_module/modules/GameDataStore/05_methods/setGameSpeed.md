---
id: "cc_slot_module:GameDataStore:method:setGameSpeed"
title: "GameDataStore.setGameSpeed() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "setGameSpeed"]
---

# `GameDataStore.setGameSpeed(speed: number): void`

---

## 1. Method Signature
```typescript
setGameSpeed(speed: number): void
```

---

## 2. Detailed Algorithmic Execution Logic
Stores current spin speed tier: `this.gameSpeed = speed`.

---

## 3. Un-truncated Source Code Implementation
```typescript
setGameSpeed(speed: number): void {
    this.gameSpeed = speed;
}
```
