---
id: "cc_core_lib:TurboButtonData:recipes:usage"
title: "Recipe: Practical TurboButtonData Integration in Slot Games"
category: "cc_core_lib"
tags: ["TurboButtonData", "turbo_button_data", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `TurboButtonData` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { TurboButtonData } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (TurboButtonData) {
            this._instance = new TurboButtonData();
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
