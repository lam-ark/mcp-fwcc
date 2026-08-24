---
id: "cc_slot_module:GameDataStore:method:updateDataModules"
title: "GameDataStore.updateDataModules() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "updateDataModules", "deep_clone", "BaseDataModule"]
---

# `GameDataStore.updateDataModules(): void`

---

## 1. Method Signature
```typescript
public updateDataModules(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. **Convert Map**: Ingests `this.playSession` into `this._dataMap` via `this.convertData(this.playSession)`.
2. **Snapshot Cache**: Stores `this.playSession` in `this.gameModeData` for the current game mode.
3. **Broadcast Loop**: Iterates through each registered `BaseDataModule` in `this._dataModules`:
   - Checks every key in `module.registeredKeys`.
   - If present in `this._dataMap`, deep-clones objects and arrays via `JSON.parse(JSON.stringify(value))` and calls `module.onDataUpdate(key, value)`.
   - If missing, invokes `module.clearDataWithKey(key)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
updateDataModules(): void {
    this.convertData(this.playSession);
    this.gameModeData.set(this.currentGameMode, this.playSession);
    this._dataModules.forEach((module) => {
        for (const key of module.registeredKeys) {
            if (this._dataMap.has(key)) {
                let value = this._dataMap.get(key);
                if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
                    value = JSON.parse(JSON.stringify(value));
                }
                module.onDataUpdate(key, value);
            } else {
                module.clearDataWithKey(key);
            }
        }
    });
}
```
