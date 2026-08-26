---
id: "cc_core_lib:UIManagerData:recipes:usage"
title: "Recipe: Practical UIManagerData Integration in Slot Games"
category: "cc_core_lib"
tags: ["UIManagerData", "uimanager_data", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `UIManagerData` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { UIManagerData } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (UIManagerData) {
            this._instance = new UIManagerData();
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
