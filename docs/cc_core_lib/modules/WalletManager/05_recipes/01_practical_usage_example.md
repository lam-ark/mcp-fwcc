---
id: "cc_core_lib:WalletManager:recipes:usage"
title: "Recipe: Practical WalletManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["WalletManager", "wallet_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `WalletManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { WalletManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (WalletManager) {
            this._instance = new WalletManager();
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
