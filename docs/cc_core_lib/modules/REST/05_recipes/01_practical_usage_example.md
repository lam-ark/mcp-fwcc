---
id: "cc_core_lib:REST:recipes:usage"
title: "Recipe: Practical REST Integration in Slot Games"
category: "cc_core_lib"
tags: ["REST", "rest", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `REST` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { REST } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (REST) {
            this._instance = new REST();
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
