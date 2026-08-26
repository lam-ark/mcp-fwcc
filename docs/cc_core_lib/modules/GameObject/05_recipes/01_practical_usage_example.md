---
id: "cc_core_lib:GameObject:recipes:usage"
title: "Recipe: Practical GameObject Integration in Slot Games"
category: "cc_core_lib"
tags: ["GameObject", "game_object", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `GameObject` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { GameObject } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (GameObject) {
            this._instance = new GameObject();
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
