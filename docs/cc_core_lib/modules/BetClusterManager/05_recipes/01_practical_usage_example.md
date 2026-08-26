---
id: "cc_core_lib:BetClusterManager:recipes:usage"
title: "Recipe: Practical BetClusterManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["BetClusterManager", "bet_cluster_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `BetClusterManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { BetClusterManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (BetClusterManager) {
            this._instance = new BetClusterManager();
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
