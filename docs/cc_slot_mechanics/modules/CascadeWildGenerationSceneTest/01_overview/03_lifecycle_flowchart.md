---
id: "cc_slot_mechanics:CascadeWildGenerationSceneTest:overview:lifecycle_flowchart"
title: "CascadeWildGenerationSceneTest Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationSceneTest", "cascade_wild_generation_scene_test", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 CascadeWildGenerationSceneTest Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as CascadeWildGenerationSceneTest
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
