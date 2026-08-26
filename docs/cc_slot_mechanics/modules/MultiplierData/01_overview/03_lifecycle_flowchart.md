---
id: "cc_slot_mechanics:MultiplierData:overview:lifecycle_flowchart"
title: "MultiplierData Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["MultiplierData", "multiplier_data", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 MultiplierData Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as MultiplierData
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
