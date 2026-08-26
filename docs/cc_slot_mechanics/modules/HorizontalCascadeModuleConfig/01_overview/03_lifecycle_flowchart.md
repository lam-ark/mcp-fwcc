---
id: "cc_slot_mechanics:HorizontalCascadeModuleConfig:overview:lifecycle_flowchart"
title: "HorizontalCascadeModuleConfig Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModuleConfig", "horizontal_cascade_module_config", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 HorizontalCascadeModuleConfig Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as HorizontalCascadeModuleConfig
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
