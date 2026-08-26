---
id: "cc_core_lib:BetHistoryManager:recipes:usage"
title: "Recipe: Practical BetHistoryManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["BetHistoryManager", "bet_history_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `BetHistoryManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { BetHistoryManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (BetHistoryManager) {
            this._instance = new BetHistoryManager();
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
