---
id: "cc_slot_module:GameDataStore:method:hasPlaySession"
title: "GameDataStore.hasPlaySession() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "hasPlaySession"]
---

# `GameDataStore.hasPlaySession(): boolean`

---

## 1. Method Signature
```typescript
hasPlaySession(): boolean
```

---

## 2. Detailed Algorithmic Execution Logic
Checks `Object.keys(this.playSession).length > 0`. Returns `true` if active session payload exists.

---

## 3. Un-truncated Source Code Implementation
```typescript
hasPlaySession(): boolean {
    return Object.keys(this.playSession).length > 0;
}
```
