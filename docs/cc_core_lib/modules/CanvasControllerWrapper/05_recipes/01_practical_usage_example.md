---
id: "cc_core_lib:CanvasControllerWrapper:recipes:usage"
title: "Recipe: Practical CanvasControllerWrapper Integration in Slot Games"
category: "cc_core_lib"
tags: ["CanvasControllerWrapper", "canvas_controller_wrapper", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `CanvasControllerWrapper` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { CanvasControllerWrapper } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (CanvasControllerWrapper) {
            this._instance = new CanvasControllerWrapper();
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
