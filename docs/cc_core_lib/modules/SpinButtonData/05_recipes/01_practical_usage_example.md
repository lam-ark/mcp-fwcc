---
id: "cc_core_lib:SpinButtonData:recipes:usage"
title: "Recipe: Practical SpinButtonData Integration in Slot Games"
category: "cc_core_lib"
tags: ["SpinButtonData", "spin_button_data", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `SpinButtonData` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { SpinButtonData } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (SpinButtonData) {
            this._instance = new SpinButtonData();
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
