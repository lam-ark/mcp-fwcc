---
id: "cc_core_lib:BaseDirector:recipes:usage"
title: "Recipe: Practical BaseDirector Integration in Slot Games"
category: "cc_core_lib"
tags: ["BaseDirector", "base_director", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `BaseDirector` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { BaseDirector } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (BaseDirector) {
            this._instance = new BaseDirector();
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
