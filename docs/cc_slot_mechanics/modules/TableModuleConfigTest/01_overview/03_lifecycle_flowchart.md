---
id: "cc_slot_mechanics:TableModuleConfigTest:overview:lifecycle_flowchart"
title: "TableModuleConfigTest Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["TableModuleConfigTest", "table_module_config_test", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 TableModuleConfigTest Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as TableModuleConfigTest
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
