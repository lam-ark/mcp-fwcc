---
id: "cc_core_lib:ConnectNetwork:recipes:usage"
title: "Recipe: Practical ConnectNetwork Integration in Slot Games"
category: "cc_core_lib"
tags: ["ConnectNetwork", "connect_network", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `ConnectNetwork` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { ConnectNetwork } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (ConnectNetwork) {
            this._instance = new ConnectNetwork();
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
