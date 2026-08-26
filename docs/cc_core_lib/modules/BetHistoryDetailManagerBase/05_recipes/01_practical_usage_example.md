---
id: "cc_core_lib:BetHistoryDetailManagerBase:recipes:usage"
title: "Recipe: Practical BetHistoryDetailManagerBase Integration in Slot Games"
category: "cc_core_lib"
tags: ["BetHistoryDetailManagerBase", "bet_history_detail_manager_base", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `BetHistoryDetailManagerBase` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { BetHistoryDetailManagerBase } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (BetHistoryDetailManagerBase) {
            this._instance = new BetHistoryDetailManagerBase();
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
