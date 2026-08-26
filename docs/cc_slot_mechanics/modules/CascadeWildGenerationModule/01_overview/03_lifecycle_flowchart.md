---
id: "cc_slot_mechanics:CascadeWildGenerationModule:overview:lifecycle_flowchart"
title: "CascadeWildGenerationModule Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationModule", "cascade_wild_generation_module", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 CascadeWildGenerationModule Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as CascadeWildGenerationModule
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
