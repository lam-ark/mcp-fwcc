---
id: "cc_core_lib:FloatUtils:recipes:usage"
title: "Recipe: Practical FloatUtils Integration in Slot Games"
category: "cc_core_lib"
tags: ["FloatUtils", "float_utils", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `FloatUtils` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { FloatUtils } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (FloatUtils) {
            this._instance = new FloatUtils();
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
