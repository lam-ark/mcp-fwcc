---
id: "cc_slot_module:GameDataStore:method:registerModule"
title: "GameDataStore.registerModule() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "registerModule"]
---

# `GameDataStore.registerModule(module: BaseDataModule): void`

---

## 1. Method Signature
```typescript
registerModule(module: BaseDataModule): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Checks `if (module.isRegistered) return;` to avoid duplicate registrations.
2. Adds `module` to internal Set `this._dataModules.add(module)`.
3. Sets `module.isRegistered = true`.

---

## 3. Un-truncated Source Code Implementation
```typescript
registerModule(module: BaseDataModule): void {
    if (module.isRegistered) {
        return;
    }
    this._dataModules.add(module);
    module.isRegistered = true;
}
```
