---
id: "cc_core_lib:CancelToken:recipes:usage"
title: "Recipe: Practical CancelToken Integration in Slot Games"
category: "cc_core_lib"
tags: ["CancelToken", "cancel_token", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `CancelToken` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { CancelToken } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (CancelToken) {
            this._instance = new CancelToken();
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
