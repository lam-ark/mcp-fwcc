---
id: "cc_slot_mechanics:TableGigabloxModule:overview:lifecycle_flowchart"
title: "TableGigabloxModule Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["TableGigabloxModule", "table_gigablox_module", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 TableGigabloxModule Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as TableGigabloxModule
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
