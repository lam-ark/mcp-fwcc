---
id: "cc_core_lib:SlotUtils:recipes:usage"
title: "Recipe: Practical SlotUtils Integration in Slot Games"
category: "cc_core_lib"
tags: ["SlotUtils", "slot_utils", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `SlotUtils` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { SlotUtils } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (SlotUtils) {
            this._instance = new SlotUtils();
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
