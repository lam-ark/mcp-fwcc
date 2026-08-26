---
id: "cc_core_lib:GlobalNetwork:recipes:usage"
title: "Recipe: Practical GlobalNetwork Integration in Slot Games"
category: "cc_core_lib"
tags: ["GlobalNetwork", "global_network", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `GlobalNetwork` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { GlobalNetwork } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (GlobalNetwork) {
            this._instance = new GlobalNetwork();
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
