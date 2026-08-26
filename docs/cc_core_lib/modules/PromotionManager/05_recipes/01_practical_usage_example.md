---
id: "cc_core_lib:PromotionManager:recipes:usage"
title: "Recipe: Practical PromotionManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["PromotionManager", "promotion_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `PromotionManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { PromotionManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (PromotionManager) {
            this._instance = new PromotionManager();
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
