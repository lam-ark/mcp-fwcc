---
id: "cc_slot_mechanics:RemovedSymbolData:overview:lifecycle_flowchart"
title: "RemovedSymbolData Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["RemovedSymbolData", "removed_symbol_data", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 RemovedSymbolData Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as RemovedSymbolData
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
