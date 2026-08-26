---
id: "cc_slot_mechanics:HorizontalCascadeSceneTest:overview:lifecycle_flowchart"
title: "HorizontalCascadeSceneTest Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeSceneTest", "horizontal_cascade_scene_test", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 HorizontalCascadeSceneTest Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as HorizontalCascadeSceneTest
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
