---
id: "cc_core_lib:FreeGame:recipes:usage"
title: "Recipe: Practical FreeGame Integration in Slot Games"
category: "cc_core_lib"
tags: ["FreeGame", "free_game", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `FreeGame` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { FreeGame } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (FreeGame) {
            this._instance = new FreeGame();
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
