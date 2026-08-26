---
id: "cc_core_lib:FreeOptionData:recipes:usage"
title: "Recipe: Practical FreeOptionData Integration in Slot Games"
category: "cc_core_lib"
tags: ["FreeOptionData", "free_option_data", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `FreeOptionData` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { FreeOptionData } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (FreeOptionData) {
            this._instance = new FreeOptionData();
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
