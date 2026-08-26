---
id: "cc_slot_mechanics:TumblingTableConfig:overview:lifecycle_flowchart"
title: "TumblingTableConfig Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["TumblingTableConfig", "tumbling_table_config", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 TumblingTableConfig Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as TumblingTableConfig
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
