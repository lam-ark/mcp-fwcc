---
id: "cc_slot_mechanics:TransformSymbolData:overview:lifecycle_flowchart"
title: "TransformSymbolData Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["TransformSymbolData", "transform_symbol_data", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 TransformSymbolData Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as TransformSymbolData
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
