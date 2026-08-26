---
id: "cc_slot_mechanics:StackedReelConfig:overview:lifecycle_flowchart"
title: "StackedReelConfig Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["StackedReelConfig", "stacked_reel_config", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 StackedReelConfig Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as StackedReelConfig
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
