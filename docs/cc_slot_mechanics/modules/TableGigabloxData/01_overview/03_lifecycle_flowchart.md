---
id: "cc_slot_mechanics:TableGigabloxData:overview:lifecycle_flowchart"
title: "TableGigabloxData Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["TableGigabloxData", "table_gigablox_data", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 TableGigabloxData Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as TableGigabloxData
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
