---
id: "cc_core_lib:WaitingSceneManager:recipes:usage"
title: "Recipe: Practical WaitingSceneManager Integration in Slot Games"
category: "cc_core_lib"
tags: ["WaitingSceneManager", "waiting_scene_manager", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `WaitingSceneManager` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { WaitingSceneManager } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (WaitingSceneManager) {
            this._instance = new WaitingSceneManager();
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
