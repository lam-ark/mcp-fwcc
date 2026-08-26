---
id: "cc_slot_mechanics:CascadeWildGenerationConfig:overview:lifecycle_flowchart"
title: "CascadeWildGenerationConfig Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationConfig", "cascade_wild_generation_config", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 CascadeWildGenerationConfig Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as CascadeWildGenerationConfig
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
