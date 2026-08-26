---
id: "cc_core_lib:TweenUtils:recipes:usage"
title: "Recipe: Practical TweenUtils Integration in Slot Games"
category: "cc_core_lib"
tags: ["TweenUtils", "tween_utils", "cc_core_lib", "recipes", "integration"]
---

# 💡 Recipe: Practical `TweenUtils` Integration in Slot Games

---

## 1. Standard Integration Example

```typescript
const { TweenUtils } = globalThis.eno;

export class SlotFeatureController extends cc.Component {
    private _instance: any;

    onLoad() {
        // Instantiate and initialize
        if (TweenUtils) {
            this._instance = new TweenUtils();
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
