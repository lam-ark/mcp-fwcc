---
id: "cc_slot_mechanics:MegawayModuleConfig:overview:lifecycle_flowchart"
title: "MegawayModuleConfig Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["MegawayModuleConfig", "megaway_module_config", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 MegawayModuleConfig Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as MegawayModuleConfig
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
