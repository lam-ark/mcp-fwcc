---
id: "cc_core_lib:LightningGameDirector:recipes:usage"
title: "Recipe: Practical LightningGameDirector Integration in Slot Games"
category: "cc_core_lib"
tags: ["LightningGameDirector", "lightning_game_director", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `LightningGameDirector` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { LightningGameDirector } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (LightningGameDirector) {
            this._instance = new LightningGameDirector();
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
