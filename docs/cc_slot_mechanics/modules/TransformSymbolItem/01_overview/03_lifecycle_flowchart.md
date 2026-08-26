---
id: "cc_slot_mechanics:TransformSymbolItem:overview:lifecycle_flowchart"
title: "TransformSymbolItem Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["TransformSymbolItem", "transform_symbol_item", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 TransformSymbolItem Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as TransformSymbolItem
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
