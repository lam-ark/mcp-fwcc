---
id: "cc_core_lib:XOCypher:recipes:usage"
title: "Recipe: Practical XOCypher Integration in Slot Games"
category: "cc_core_lib"
tags: ["XOCypher", "xocypher", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `XOCypher` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { XOCypher } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (XOCypher) {
            this._instance = new XOCypher();
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
