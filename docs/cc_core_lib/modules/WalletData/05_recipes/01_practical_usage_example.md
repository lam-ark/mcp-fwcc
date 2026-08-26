---
id: "cc_core_lib:WalletData:recipes:usage"
title: "Recipe: Practical WalletData Integration in Slot Games"
category: "cc_core_lib"
tags: ["WalletData", "wallet_data", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `WalletData` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { WalletData } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (WalletData) {
            this._instance = new WalletData();
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
