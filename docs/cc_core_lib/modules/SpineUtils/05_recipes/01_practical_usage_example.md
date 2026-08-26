---
id: "cc_core_lib:SpineUtils:recipes:usage"
title: "Recipe: Practical SpineUtils Integration in Slot Games"
category: "cc_core_lib"
tags: ["SpineUtils", "spine_utils", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `SpineUtils` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { SpineUtils } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (SpineUtils) {
            this._instance = new SpineUtils();
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
