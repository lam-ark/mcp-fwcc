---
id: "cc_core_lib:Scheduler:recipes:usage"
title: "Recipe: Practical Scheduler Integration in Slot Games"
category: "cc_core_lib"
tags: ["Scheduler", "scheduler", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `Scheduler` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { Scheduler } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (Scheduler) {
            this._instance = new Scheduler();
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
