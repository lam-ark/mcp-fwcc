---
id: "cc_core_lib:SpinButtonManager:recipes:usage"
title: "Recipe: Practical SpinButtonManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["SpinButtonManager", "spin_button_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `SpinButtonManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { SpinButtonManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (SpinButtonManager) {
            this._instance = new SpinButtonManager();
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
