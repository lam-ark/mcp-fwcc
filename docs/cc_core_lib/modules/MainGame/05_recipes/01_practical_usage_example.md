---
id: "cc_core_lib:MainGame:recipes:usage"
title: "Recipe: Practical MainGame Integration in Slot Games"
category: "cc_core_lib"
tags: ["MainGame", "main_game", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `MainGame` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { MainGame } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (MainGame) {
            this._instance = new MainGame();
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
