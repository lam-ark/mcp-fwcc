---
id: "cc_core_lib:EventManager:recipes:usage"
title: "Recipe: Practical EventManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["EventManager", "event_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `EventManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { EventManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (EventManager) {
            this._instance = new EventManager();
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
