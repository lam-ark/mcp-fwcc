---
id: "cc_core_lib:WaitingSceneData:recipes:usage"
title: "Recipe: Practical WaitingSceneData Integration in Slot Games"
category: "cc_core_lib"
tags: ["WaitingSceneData", "waiting_scene_data", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `WaitingSceneData` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { WaitingSceneData } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (WaitingSceneData) {
            this._instance = new WaitingSceneData();
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
