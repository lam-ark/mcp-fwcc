---
id: "cc_core_lib:ObjectUtils:recipes:usage"
title: "Recipe: Practical ObjectUtils Integration in Slot Games"
category: "cc_core_lib"
tags: ["ObjectUtils", "object_utils", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `ObjectUtils` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { ObjectUtils } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (ObjectUtils) {
            this._instance = new ObjectUtils();
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
