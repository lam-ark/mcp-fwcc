---
id: "cc_slot_module:GameDataStore:method:convertData"
title: "GameDataStore.convertData() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "convertData"]
---

# `GameDataStore.convertData(data: Record<string, any>): void`

---

## 1. Method Signature
```typescript
convertData(data: Record<string, any>): void
```

---

## 2. Detailed Algorithmic Execution Logic
Clears internal `this._dataMap` and populates each key-value pair from incoming `data` object.

---

## 3. Un-truncated Source Code Implementation
```typescript
convertData(data: Record<string, any>): void {
    this._dataMap.clear();
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            this.setDataMap(key, data[key]);
        }
    }
}
```
