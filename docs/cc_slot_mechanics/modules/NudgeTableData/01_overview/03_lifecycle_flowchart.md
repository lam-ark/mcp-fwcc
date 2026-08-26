---
id: "cc_slot_mechanics:NudgeTableData:overview:lifecycle_flowchart"
title: "NudgeTableData Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["NudgeTableData", "nudge_table_data", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 NudgeTableData Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as NudgeTableData
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
