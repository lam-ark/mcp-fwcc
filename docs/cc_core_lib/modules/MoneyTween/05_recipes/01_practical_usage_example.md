---
id: "cc_core_lib:MoneyTween:recipes:usage"
title: "Recipe: Practical MoneyTween Integration in Slot Games"
category: "cc_core_lib"
tags: ["MoneyTween", "money_tween", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `MoneyTween` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { MoneyTween } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (MoneyTween) {
            this._instance = new MoneyTween();
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
