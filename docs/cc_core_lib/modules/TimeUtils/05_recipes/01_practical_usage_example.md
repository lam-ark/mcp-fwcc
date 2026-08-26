---
id: "cc_core_lib:TimeUtils:recipes:usage"
title: "Recipe: Practical TimeUtils Integration in Slot Games"
category: "cc_core_lib"
tags: ["TimeUtils", "time_utils", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `TimeUtils` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { TimeUtils } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (TimeUtils) {
            this._instance = new TimeUtils();
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
