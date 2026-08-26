---
id: "cc_slot_mechanics:BuyFeatureConfig:overview:lifecycle_flowchart"
title: "BuyFeatureConfig Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["BuyFeatureConfig", "buy_feature_config", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 BuyFeatureConfig Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as BuyFeatureConfig
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
