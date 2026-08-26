---
id: "cc_slot_mechanics:SlotTableMegaModule:overview:lifecycle_flowchart"
title: "SlotTableMegaModule Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["SlotTableMegaModule", "slot_table_mega_module", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 SlotTableMegaModule Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as SlotTableMegaModule
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
