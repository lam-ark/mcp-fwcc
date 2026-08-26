---
id: "cc_slot_mechanics:StickySymbolConfig:overview:lifecycle_flowchart"
title: "StickySymbolConfig Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["StickySymbolConfig", "sticky_symbol_config", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 StickySymbolConfig Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as StickySymbolConfig
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
