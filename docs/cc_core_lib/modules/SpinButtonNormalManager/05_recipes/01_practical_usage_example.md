---
id: "cc_core_lib:SpinButtonNormalManager:recipes:usage"
title: "Recipe: Practical SpinButtonNormalManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["SpinButtonNormalManager", "spin_button_normal_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `SpinButtonNormalManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { SpinButtonNormalManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (SpinButtonNormalManager) {
            this._instance = new SpinButtonNormalManager();
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
