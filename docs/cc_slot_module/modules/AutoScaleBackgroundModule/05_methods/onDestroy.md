---
id: "cc_slot_module:AutoScaleBackgroundModule:methods:onDestroy"
title: "AutoScaleBackgroundModule.onDestroy Method"
category: "cc_slot_module"
tags: ["AutoScaleBackgroundModule", "auto_scale_background_module", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `AutoScaleBackgroundModule.onDestroy()`

---

## 1. Complete Source Code Implementation

```typescript
onDestroy(): void {
    if (sys.isBrowser) {
        window.removeEventListener('resize', this._thisOnResized);
    } else {
        view.off('canvas-resize', this._thisOnResized);
    }
}
```
