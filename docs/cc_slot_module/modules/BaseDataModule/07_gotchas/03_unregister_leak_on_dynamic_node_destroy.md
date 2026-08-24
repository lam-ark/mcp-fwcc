---
id: "cc_slot_module:BaseDataModule:gotcha:unregister_leak_on_dynamic_node_destroy"
title: "Gotcha: Dangling Reference When Dynamically Destroying Data Modules"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "gotchas", "memory_leak"]
---

# ⚠️ Gotcha: Dangling Reference When Dynamically Destroying Data Modules

## 1. Defect Symptom
After exiting a dynamically loaded mini-game prefab, next base game spin throws `Cannot set property of destroyed object`.

---

## 2. Root Cause Analysis
`start()` registers `this` to `dataStore.registerModule(this)`. When a mini-game node is destroyed, `GameDataStore` still holds a reference in its array unless `dataStore.removeModule(this)` is called.

---

## 3. Recommended Resolution
In dynamic components that get destroyed, unregister on cleanup:
```typescript
onDestroy(): void {
    if (this.dataStore) {
        this.dataStore.removeModule(this);
    }
}
```
