---
id: "cc_slot_module:AutoScaleBackgroundModule:methods:onLoad"
title: "AutoScaleBackgroundModule.onLoad Method"
category: "cc_slot_module"
tags: ["AutoScaleBackgroundModule", "auto_scale_background_module", "cc_slot_module", "methods", "onLoad"]
---

# 📖 `AutoScaleBackgroundModule.onLoad()`

---

## 1. Complete Source Code Implementation

```typescript
onLoad(): void {
    this._thisOnResized = this.onScreenResized.bind(this);
    if (sys.isBrowser) {
        window.addEventListener('resize', this._thisOnResized);
    } else {
        view.on('canvas-resize', this._thisOnResized);
    }
}
```
