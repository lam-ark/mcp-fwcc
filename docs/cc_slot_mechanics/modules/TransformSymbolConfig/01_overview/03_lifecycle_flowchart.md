---
id: "cc_slot_mechanics:TransformSymbolConfig:overview:lifecycle_flowchart"
title: "TransformSymbolConfig Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["TransformSymbolConfig", "transform_symbol_config", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 TransformSymbolConfig Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as TransformSymbolConfig
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
