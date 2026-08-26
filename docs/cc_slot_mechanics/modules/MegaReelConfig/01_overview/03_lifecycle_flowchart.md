---
id: "cc_slot_mechanics:MegaReelConfig:overview:lifecycle_flowchart"
title: "MegaReelConfig Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["MegaReelConfig", "mega_reel_config", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 MegaReelConfig Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as MegaReelConfig
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
