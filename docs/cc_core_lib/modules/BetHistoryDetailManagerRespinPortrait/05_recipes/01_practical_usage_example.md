---
id: "cc_core_lib:BetHistoryDetailManagerRespinPortrait:recipes:usage"
title: "Recipe: Practical BetHistoryDetailManagerRespinPortrait Integration in Slot Games"
category: "cc_core_lib"
tags: ["BetHistoryDetailManagerRespinPortrait", "bet_history_detail_manager_respin_portrait", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `BetHistoryDetailManagerRespinPortrait` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { BetHistoryDetailManagerRespinPortrait } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (BetHistoryDetailManagerRespinPortrait) {
            this._instance = new BetHistoryDetailManagerRespinPortrait();
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
