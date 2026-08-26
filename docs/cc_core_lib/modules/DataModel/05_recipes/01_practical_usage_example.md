---
id: "cc_core_lib:DataModel:recipes:usage"
title: "Recipe: Practical DataModel Integration in Slot Games"
category: "cc_core_lib"
tags: ["DataModel", "data_model", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `DataModel` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { DataModel } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (DataModel) {
            this._instance = new DataModel();
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
