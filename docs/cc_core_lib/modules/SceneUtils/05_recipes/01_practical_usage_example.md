---
id: "cc_core_lib:SceneUtils:recipes:usage"
title: "Recipe: Practical SceneUtils Integration in Slot Games"
category: "cc_core_lib"
tags: ["SceneUtils", "scene_utils", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `SceneUtils` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { SceneUtils } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (SceneUtils) {
            this._instance = new SceneUtils();
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
