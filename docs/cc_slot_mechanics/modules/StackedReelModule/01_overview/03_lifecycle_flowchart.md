---
id: "cc_slot_mechanics:StackedReelModule:overview:lifecycle_flowchart"
title: "StackedReelModule Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["StackedReelModule", "stacked_reel_module", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 StackedReelModule Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as StackedReelModule
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
