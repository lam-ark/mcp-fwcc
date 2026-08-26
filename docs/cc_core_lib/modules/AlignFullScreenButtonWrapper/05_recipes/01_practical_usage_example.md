---
id: "cc_core_lib:AlignFullScreenButtonWrapper:recipes:usage"
title: "Recipe: Practical AlignFullScreenButtonWrapper Integration in Slot Games"
category: "cc_core_lib"
tags: ["AlignFullScreenButtonWrapper", "align_full_screen_button_wrapper", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `AlignFullScreenButtonWrapper` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { AlignFullScreenButtonWrapper } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (AlignFullScreenButtonWrapper) {
            this._instance = new AlignFullScreenButtonWrapper();
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
