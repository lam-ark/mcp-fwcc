---
id: "cc_slot_module:GameDataStore:method:setDataMap"
title: "GameDataStore.setDataMap() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "setDataMap"]
---

# `GameDataStore.setDataMap(key: string, value: any): void`

---

## 1. Method Signature
```typescript
setDataMap(key: string, value: any): void
```

---

## 2. Detailed Algorithmic Execution Logic
Stores key-value in internal lookup Map: `this._dataMap.set(key, value)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
setDataMap(key: string, value: any): void {
    this._dataMap.set(key, value);
}
```
