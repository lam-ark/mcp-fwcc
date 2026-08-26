---
id: "cc_core_lib:LightningGameWriter:recipes:usage"
title: "Recipe: Practical LightningGameWriter Integration in Slot Games"
category: "cc_core_lib"
tags: ["LightningGameWriter", "lightning_game_writer", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `LightningGameWriter` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { LightningGameWriter } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (LightningGameWriter) {
            this._instance = new LightningGameWriter();
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
