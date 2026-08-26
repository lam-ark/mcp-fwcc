---
id: "cc_slot_mechanics:NudgeTableModule:overview:lifecycle_flowchart"
title: "NudgeTableModule Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["NudgeTableModule", "nudge_table_module", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 NudgeTableModule Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as NudgeTableModule
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
