---
id: "cc_core_lib:JackpotTrialManager:recipes:usage"
title: "Recipe: Practical JackpotTrialManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["JackpotTrialManager", "jackpot_trial_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `JackpotTrialManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { JackpotTrialManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (JackpotTrialManager) {
            this._instance = new JackpotTrialManager();
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
