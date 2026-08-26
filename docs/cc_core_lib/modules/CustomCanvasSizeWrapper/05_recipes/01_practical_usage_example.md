---
id: "cc_core_lib:CustomCanvasSizeWrapper:recipes:usage"
title: "Recipe: Practical CustomCanvasSizeWrapper Integration in Slot Games"
category: "cc_core_lib"
tags: ["CustomCanvasSizeWrapper", "custom_canvas_size_wrapper", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `CustomCanvasSizeWrapper` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { CustomCanvasSizeWrapper } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (CustomCanvasSizeWrapper) {
            this._instance = new CustomCanvasSizeWrapper();
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
