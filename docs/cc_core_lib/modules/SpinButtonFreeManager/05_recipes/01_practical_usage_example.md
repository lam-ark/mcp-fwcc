---
id: "cc_core_lib:SpinButtonFreeManager:recipes:usage"
title: "Recipe: Practical SpinButtonFreeManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["SpinButtonFreeManager", "spin_button_free_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `SpinButtonFreeManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { SpinButtonFreeManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (SpinButtonFreeManager) {
            this._instance = new SpinButtonFreeManager();
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
