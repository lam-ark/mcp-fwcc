---
id: "cc_slot_mechanics:SlotCellTableModule:overview:lifecycle_flowchart"
title: "SlotCellTableModule Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["SlotCellTableModule", "slot_cell_table_module", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 SlotCellTableModule Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as SlotCellTableModule
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
