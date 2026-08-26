---
id: "cc_slot_mechanics:TableGigabloxModuleTest:overview:lifecycle_flowchart"
title: "TableGigabloxModuleTest Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["TableGigabloxModuleTest", "table_gigablox_module_test", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 TableGigabloxModuleTest Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as TableGigabloxModuleTest
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
