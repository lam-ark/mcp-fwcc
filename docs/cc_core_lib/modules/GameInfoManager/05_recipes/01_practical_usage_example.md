---
id: "cc_core_lib:GameInfoManager:recipes:usage"
title: "Recipe: Practical GameInfoManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["GameInfoManager", "game_info_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `GameInfoManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { GameInfoManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (GameInfoManager) {
            this._instance = new GameInfoManager();
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
