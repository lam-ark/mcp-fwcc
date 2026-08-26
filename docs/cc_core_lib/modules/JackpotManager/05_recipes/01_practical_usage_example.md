---
id: "cc_core_lib:JackpotManager:recipes:usage"
title: "Recipe: Practical JackpotManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["JackpotManager", "jackpot_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `JackpotManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { JackpotManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (JackpotManager) {
            this._instance = new JackpotManager();
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
