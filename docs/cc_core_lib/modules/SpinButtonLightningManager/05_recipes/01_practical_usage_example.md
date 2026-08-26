---
id: "cc_core_lib:SpinButtonLightningManager:recipes:usage"
title: "Recipe: Practical SpinButtonLightningManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["SpinButtonLightningManager", "spin_button_lightning_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `SpinButtonLightningManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { SpinButtonLightningManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (SpinButtonLightningManager) {
            this._instance = new SpinButtonLightningManager();
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
