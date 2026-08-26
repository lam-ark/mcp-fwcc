---
id: "cc_slot_module:AutoScaleBackgroundModule:overview:lifecycle_flowchart"
title: "AutoScaleBackgroundModule Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["AutoScaleBackgroundModule", "auto_scale_background_module", "cc_slot_module", "overview", "lifecycle"]
---

# 🔄 AutoScaleBackgroundModule Lifecycle Flowchart

---

## 1. Sequence

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant ASB as AutoScaleBackground

    Engine->>ASB: onLoad() -> bind resize / canvas-resize listener
    Engine->>ASB: start() -> scaleCanvasByOrientation()
    Engine->>ASB: onScreenResized() -> scaleCanvasByOrientation()
    Engine->>ASB: onDestroy() -> unbind resize listener
```
