---
id: "cc_core_lib:TurboButtonManager:recipes:usage"
title: "Recipe: Practical TurboButtonManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["TurboButtonManager", "turbo_button_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `TurboButtonManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { TurboButtonManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (TurboButtonManager) {
            this._instance = new TurboButtonManager();
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
