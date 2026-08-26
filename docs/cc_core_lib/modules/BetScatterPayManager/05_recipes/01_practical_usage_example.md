---
id: "cc_core_lib:BetScatterPayManager:recipes:usage"
title: "Recipe: Practical BetScatterPayManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["BetScatterPayManager", "bet_scatter_pay_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `BetScatterPayManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { BetScatterPayManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (BetScatterPayManager) {
            this._instance = new BetScatterPayManager();
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
