---
id: "cc_core_lib:FreeOptionDirector:recipes:usage"
title: "Recipe: Practical FreeOptionDirector Integration in Slot Games"
category: "cc_core_lib"
tags: ["FreeOptionDirector", "free_option_director", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `FreeOptionDirector` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { FreeOptionDirector } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (FreeOptionDirector) {
            this._instance = new FreeOptionDirector();
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
