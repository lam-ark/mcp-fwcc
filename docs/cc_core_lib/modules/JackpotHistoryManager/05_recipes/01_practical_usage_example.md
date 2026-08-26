---
id: "cc_core_lib:JackpotHistoryManager:recipes:usage"
title: "Recipe: Practical JackpotHistoryManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["JackpotHistoryManager", "jackpot_history_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `JackpotHistoryManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { JackpotHistoryManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (JackpotHistoryManager) {
            this._instance = new JackpotHistoryManager();
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
