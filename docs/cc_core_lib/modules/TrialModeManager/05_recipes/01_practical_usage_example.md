---
id: "cc_core_lib:TrialModeManager:recipes:usage"
title: "Recipe: Practical TrialModeManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["TrialModeManager", "trial_mode_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `TrialModeManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { TrialModeManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (TrialModeManager) {
            this._instance = new TrialModeManager();
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
