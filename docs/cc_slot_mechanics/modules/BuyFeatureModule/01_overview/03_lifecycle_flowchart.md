---
id: "cc_slot_mechanics:BuyFeatureModule:overview:lifecycle_flowchart"
title: "BuyFeatureModule Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 BuyFeatureModule Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as BuyFeatureModule
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
