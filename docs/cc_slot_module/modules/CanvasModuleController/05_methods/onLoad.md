---
id: "cc_slot_module:CanvasModuleController:methods:onLoad"
title: "CanvasModuleController.onLoad Method"
category: "cc_slot_module"
tags: ["CanvasModuleController", "canvas_module_controller", "cc_slot_module", "methods", "onLoad"]
---

# 📖 `CanvasModuleController.onLoad()`

---

## 1. Complete Source Code Implementation

```typescript
onLoad(): void {
    this._canvasController = new eno.CanvasControllerWrapper(
        this.autoOrientation,
        this.isPortrait,
        this.fitByOrientation,
        this.useCustomDesignResolution,
        this.customDSWidth,
        this.customDSHeight,
        this.widgetNodes,
        this.minScreenRatio,
        this.isDebug,
        this.canvas,
        this.node);
}
```
