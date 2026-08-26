---
id: "cc_core_lib:JackpotHistoryData:recipes:usage"
title: "Recipe: Practical JackpotHistoryData Integration in Slot Games"
category: "cc_core_lib"
tags: ["JackpotHistoryData", "jackpot_history_data", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `JackpotHistoryData` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { JackpotHistoryData } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (JackpotHistoryData) {
            this._instance = new JackpotHistoryData();
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
