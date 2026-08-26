---
id: "cc_core_lib:WalletTrialManager:recipes:usage"
title: "Recipe: Practical WalletTrialManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["WalletTrialManager", "wallet_trial_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `WalletTrialManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { WalletTrialManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (WalletTrialManager) {
            this._instance = new WalletTrialManager();
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
