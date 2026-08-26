---
id: "cc_core_lib:CoreDataStore:recipes:usage"
title: "Recipe: Practical CoreDataStore Integration in Slot Games"
category: "cc_core_lib"
tags: ["CoreDataStore", "core_data_store", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `CoreDataStore` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { CoreDataStore } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (CoreDataStore) {
            this._instance = new CoreDataStore();
        }
    }

    onDestroy() {
        // Safe cleanup
        if (this._instance && typeof this._instance.destroy === 'function') {
            this._instance.destroy();
        }
    }
}
```
