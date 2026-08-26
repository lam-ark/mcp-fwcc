---
id: "cc_slot_mechanics:TableGigabloxConfig:overview:lifecycle_flowchart"
title: "TableGigabloxConfig Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["TableGigabloxConfig", "table_gigablox_config", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 TableGigabloxConfig Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as TableGigabloxConfig
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
