---
id: "cc_slot_mechanics:InfinityTableConfig:overview:lifecycle_flowchart"
title: "InfinityTableConfig Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["InfinityTableConfig", "infinity_table_config", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 InfinityTableConfig Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as InfinityTableConfig
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
