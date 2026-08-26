---
id: "cc_core_lib:Game:recipes:usage"
title: "Recipe: Practical Game Integration in Slot Games"
category: "cc_core_lib"
tags: ["Game", "game", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `Game` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { Game } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (Game) {
            this._instance = new Game();
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
