---
id: "cc_core_lib:NetworkBridge:recipes:usage"
title: "Recipe: Practical NetworkBridge Integration in Slot Games"
category: "cc_core_lib"
tags: ["NetworkBridge", "network_bridge", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `NetworkBridge` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { NetworkBridge } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (NetworkBridge) {
            this._instance = new NetworkBridge();
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
