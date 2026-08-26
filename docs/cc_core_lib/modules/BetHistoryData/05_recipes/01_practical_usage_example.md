---
id: "cc_core_lib:BetHistoryData:recipes:usage"
title: "Recipe: Practical BetHistoryData Integration in Slot Games"
category: "cc_core_lib"
tags: ["BetHistoryData", "bet_history_data", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `BetHistoryData` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { BetHistoryData } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (BetHistoryData) {
            this._instance = new BetHistoryData();
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
