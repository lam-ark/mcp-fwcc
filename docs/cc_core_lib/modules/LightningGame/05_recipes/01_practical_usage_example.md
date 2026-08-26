---
id: "cc_core_lib:LightningGame:recipes:usage"
title: "Recipe: Practical LightningGame Integration in Slot Games"
category: "cc_core_lib"
tags: ["LightningGame", "lightning_game", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `LightningGame` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { LightningGame } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (LightningGame) {
            this._instance = new LightningGame();
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
