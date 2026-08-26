---
id: "cc_core_lib:BetHistoryDetailManager:recipes:usage"
title: "Recipe: Practical BetHistoryDetailManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["BetHistoryDetailManager", "bet_history_detail_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `BetHistoryDetailManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { BetHistoryDetailManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (BetHistoryDetailManager) {
            this._instance = new BetHistoryDetailManager();
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
