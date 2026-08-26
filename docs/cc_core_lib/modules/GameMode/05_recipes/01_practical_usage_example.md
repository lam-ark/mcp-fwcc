---
id: "cc_core_lib:GameMode:recipes:usage"
title: "Recipe: Practical GameMode Integration in Slot Games"
category: "cc_core_lib"
tags: ["GameMode", "game_mode", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `GameMode` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { GameMode } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (GameMode) {
            this._instance = new GameMode();
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
