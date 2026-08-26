---
id: "cc_core_lib:JackpotData:recipes:usage"
title: "Recipe: Practical JackpotData Integration in Slot Games"
category: "cc_core_lib"
tags: ["JackpotData", "jackpot_data", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `JackpotData` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { JackpotData } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (JackpotData) {
            this._instance = new JackpotData();
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
