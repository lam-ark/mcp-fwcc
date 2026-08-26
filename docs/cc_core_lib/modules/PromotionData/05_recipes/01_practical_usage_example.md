---
id: "cc_core_lib:PromotionData:recipes:usage"
title: "Recipe: Practical PromotionData Integration in Slot Games"
category: "cc_core_lib"
tags: ["PromotionData", "promotion_data", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `PromotionData` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { PromotionData } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (PromotionData) {
            this._instance = new PromotionData();
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
