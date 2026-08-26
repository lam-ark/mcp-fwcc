---
id: "cc_core_lib:BetHistoryDetailData:recipes:usage"
title: "Recipe: Practical BetHistoryDetailData Integration in Slot Games"
category: "cc_core_lib"
tags: ["BetHistoryDetailData", "bet_history_detail_data", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `BetHistoryDetailData` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { BetHistoryDetailData } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (BetHistoryDetailData) {
            this._instance = new BetHistoryDetailData();
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
