---
id: "cc_slot_module:GameDataStore:method:mapNewKeys"
title: "GameDataStore.mapNewKeys() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "mapNewKeys", "key_remapping"]
---

# `GameDataStore.mapNewKeys(playSession: Record<string, any>, mapKeys: Record<string, string>): Record<string, any>`

---

## 1. Method Signature
```typescript
mapNewKeys(playSession: Record<string, any>, mapKeys: Record<string, string>): Record<string, any>
```

---

## 2. Detailed Algorithmic Execution Logic
Iterates through each key in `playSession`. If a translation mapping exists in `mapKeys[key]`, re-assigns `playSession[newKey] = playSession[key]` and removes the old key via `delete playSession[key]`. Returns the modified `playSession` object.

---

## 3. Un-truncated Source Code Implementation
```typescript
mapNewKeys(playSession: Record<string, any>, mapKeys: Record<string, string>): Record<string, any> {
    Object.keys(playSession).forEach(key => {
        if (mapKeys[key]) {
            const newKey = mapKeys[key];
            playSession[newKey] = playSession[key];
            delete playSession[key];
        }
    });

    return playSession;
}
```
