---
id: "cc_slot_mechanics:NudgeSceneTest:overview:lifecycle_flowchart"
title: "NudgeSceneTest Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["NudgeSceneTest", "nudge_scene_test", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 NudgeSceneTest Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as NudgeSceneTest
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
