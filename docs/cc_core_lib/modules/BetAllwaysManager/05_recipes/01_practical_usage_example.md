---
id: "cc_core_lib:BetAllwaysManager:recipes:usage"
title: "Recipe: Practical BetAllwaysManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["BetAllwaysManager", "bet_allways_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `BetAllwaysManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { BetAllwaysManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (BetAllwaysManager) {
            this._instance = new BetAllwaysManager();
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
