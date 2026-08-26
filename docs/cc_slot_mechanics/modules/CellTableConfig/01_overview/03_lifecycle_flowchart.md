---
id: "cc_slot_mechanics:CellTableConfig:overview:lifecycle_flowchart"
title: "CellTableConfig Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["CellTableConfig", "cell_table_config", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 CellTableConfig Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as CellTableConfig
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
