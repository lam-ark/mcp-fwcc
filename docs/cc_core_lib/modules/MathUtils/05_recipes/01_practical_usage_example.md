---
id: "cc_core_lib:MathUtils:recipes:usage"
title: "Recipe: Practical MathUtils Integration in Slot Games"
category: "cc_core_lib"
tags: ["MathUtils", "math_utils", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `MathUtils` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { MathUtils } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (MathUtils) {
            this._instance = new MathUtils();
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
