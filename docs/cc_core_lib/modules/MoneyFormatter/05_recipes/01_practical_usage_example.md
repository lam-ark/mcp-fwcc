---
id: "cc_core_lib:MoneyFormatter:recipes:usage"
title: "Recipe: Practical MoneyFormatter Integration in Slot Games"
category: "cc_core_lib"
tags: ["MoneyFormatter", "money_formatter", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `MoneyFormatter` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { MoneyFormatter } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (MoneyFormatter) {
            this._instance = new MoneyFormatter();
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
