---
id: "cc_core_lib:GameStateManager:recipes:usage"
title: "Recipe: Practical GameStateManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["GameStateManager", "game_state_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `GameStateManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { GameStateManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (GameStateManager) {
            this._instance = new GameStateManager();
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
