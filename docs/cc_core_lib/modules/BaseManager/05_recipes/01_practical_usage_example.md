---
id: "cc_core_lib:BaseManager:recipes:usage"
title: "Recipe: Practical BaseManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["BaseManager", "base_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `BaseManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { BaseManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (BaseManager) {
            this._instance = new BaseManager();
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
