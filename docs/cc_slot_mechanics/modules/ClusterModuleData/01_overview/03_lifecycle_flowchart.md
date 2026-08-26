---
id: "cc_slot_mechanics:ClusterModuleData:overview:lifecycle_flowchart"
title: "ClusterModuleData Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["ClusterModuleData", "cluster_module_data", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 ClusterModuleData Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as ClusterModuleData
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
