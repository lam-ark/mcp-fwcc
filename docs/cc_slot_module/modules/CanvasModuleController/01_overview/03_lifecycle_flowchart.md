---
id: "cc_slot_module:CanvasModuleController:overview:lifecycle_flowchart"
title: "CanvasModuleController Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["CanvasModuleController", "canvas_module_controller", "cc_slot_module", "overview", "lifecycle"]
---

# 🔄 CanvasModuleController Lifecycle Flowchart

---

## 1. Lifecycle Flow

```mermaid
sequenceDiagram
    participant Canvas as cc.Canvas
    participant Controller as CanvasModuleController
    participant Wrapper as eno.CanvasControllerWrapper

    Canvas->>Controller: onLoad()
    Controller->>Wrapper: new CanvasControllerWrapper(...)
    Canvas->>Controller: start()
    Controller->>Wrapper: start() (binds resize listeners)
    Canvas->>Controller: onDestroy()
    Controller->>Wrapper: onDestroy() (unbinds resize listeners)
```
