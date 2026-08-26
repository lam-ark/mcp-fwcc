---
id: "cc_core_lib:JsbUtils:recipes:usage"
title: "Recipe: Practical JsbUtils Integration in Slot Games"
category: "cc_core_lib"
tags: ["JsbUtils", "jsb_utils", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `JsbUtils` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { JsbUtils } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (JsbUtils) {
            this._instance = new JsbUtils();
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
