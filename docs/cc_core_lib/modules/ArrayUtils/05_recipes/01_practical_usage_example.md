---
id: "cc_core_lib:ArrayUtils:recipes:usage"
title: "Recipe: Practical ArrayUtils Integration in Slot Games"
category: "cc_core_lib"
tags: ["ArrayUtils", "array_utils", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `ArrayUtils` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { ArrayUtils } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (ArrayUtils) {
            this._instance = new ArrayUtils();
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
