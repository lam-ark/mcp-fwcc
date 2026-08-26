---
id: "cc_slot_mechanics:RemovedSymbolConfig:overview:lifecycle_flowchart"
title: "RemovedSymbolConfig Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolConfig", "removed_symbol_config", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 RemovedSymbolConfig Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as RemovedSymbolConfig
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
