---
id: "cc_core_lib:NodeUtils:recipes:usage"
title: "Recipe: Practical NodeUtils Integration in Slot Games"
category: "cc_core_lib"
tags: ["NodeUtils", "node_utils", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `NodeUtils` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { NodeUtils } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (NodeUtils) {
            this._instance = new NodeUtils();
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
