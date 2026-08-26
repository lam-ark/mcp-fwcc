---
id: "cc_core_lib:BetLineManager:recipes:usage"
title: "Recipe: Practical BetLineManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["BetLineManager", "bet_line_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `BetLineManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { BetLineManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (BetLineManager) {
            this._instance = new BetLineManager();
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
