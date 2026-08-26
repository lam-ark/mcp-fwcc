---
id: "cc_core_lib:BetData:recipes:usage"
title: "Recipe: Practical BetData Integration in Slot Games"
category: "cc_core_lib"
tags: ["BetData", "bet_data", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `BetData` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { BetData } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (BetData) {
            this._instance = new BetData();
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
