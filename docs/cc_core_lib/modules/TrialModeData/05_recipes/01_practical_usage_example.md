---
id: "cc_core_lib:TrialModeData:recipes:usage"
title: "Recipe: Practical TrialModeData Integration in Slot Games"
category: "cc_core_lib"
tags: ["TrialModeData", "trial_mode_data", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `TrialModeData` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { TrialModeData } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (TrialModeData) {
            this._instance = new TrialModeData();
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
