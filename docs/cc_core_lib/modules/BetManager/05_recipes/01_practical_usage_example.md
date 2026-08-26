---
id: "cc_core_lib:BetManager:recipes:usage"
title: "Recipe: Practical BetManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["BetManager", "bet_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `BetManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { BetManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (BetManager) {
            this._instance = new BetManager();
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
