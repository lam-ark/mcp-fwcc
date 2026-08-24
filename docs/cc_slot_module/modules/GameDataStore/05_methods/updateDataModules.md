---
id: "cc_slot_module:GameDataStore:method:updateDataModules"
title: "GameDataStore.updateDataModules() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "updateDataModules", "deep_clone", "BaseDataModule", "reactive"]
---

# `GameDataStore.updateDataModules(): void`

---

## 1. Method Signature
```typescript
public updateDataModules(): void
```

---

## 2. When Is It Called & Trigger Source
* **Invoking Entity**: `GameDirector` or `BaseGameDirector` after `parseDataPS()`.
* **Moment**: At the start of matrix presentation and win evaluation.

---

## 3. Detailed Algorithmic Execution Logic
1. Calls `this.convertData(this.playSession)` to populate `this._dataMap`.
2. Stores snapshot in `this.gameModeData.set(this.currentGameMode, this.playSession)`.
3. Iterates through all registered `BaseDataModule` instances in `this._dataModules`:
   * For each key in `module.registeredKeys`:
     * If `_dataMap` has the key: creates an **immutable deep copy** via `JSON.parse(JSON.stringify(value))` for objects/arrays to prevent downstream mutation leaks, then invokes `module.onDataUpdate(key, value)`.
     * If `_dataMap` lacks the key: calls `module.clearDataWithKey(key)`.

---

## 4. Un-truncated Source Code Implementation
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
