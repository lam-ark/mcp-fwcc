---
id: "cc_slot_mechanics:MultiplierReelConfig:overview:lifecycle_flowchart"
title: "MultiplierReelConfig Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["MultiplierReelConfig", "multiplier_reel_config", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 MultiplierReelConfig Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as MultiplierReelConfig
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
