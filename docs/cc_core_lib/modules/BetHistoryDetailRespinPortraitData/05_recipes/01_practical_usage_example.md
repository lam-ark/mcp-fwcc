---
id: "cc_core_lib:BetHistoryDetailRespinPortraitData:recipes:usage"
title: "Recipe: Practical BetHistoryDetailRespinPortraitData Integration in Slot Games"
category: "cc_core_lib"
tags: ["BetHistoryDetailRespinPortraitData", "bet_history_detail_respin_portrait_data", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `BetHistoryDetailRespinPortraitData` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { BetHistoryDetailRespinPortraitData } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (BetHistoryDetailRespinPortraitData) {
            this._instance = new BetHistoryDetailRespinPortraitData();
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
