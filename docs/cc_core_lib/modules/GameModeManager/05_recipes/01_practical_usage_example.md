---
id: "cc_core_lib:GameModeManager:recipes:usage"
title: "Recipe: Practical GameModeManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["GameModeManager", "game_mode_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `GameModeManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { GameModeManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (GameModeManager) {
            this._instance = new GameModeManager();
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
