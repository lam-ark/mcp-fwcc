---
id: "cc_core_lib:PaylineInfoData:recipes:usage"
title: "Recipe: Practical PaylineInfoData Integration in Slot Games"
category: "cc_core_lib"
tags: ["PaylineInfoData", "payline_info_data", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `PaylineInfoData` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { PaylineInfoData } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (PaylineInfoData) {
            this._instance = new PaylineInfoData();
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
