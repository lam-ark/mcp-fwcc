---
id: "cc_slot_mechanics:BuyFeatureButton:overview:lifecycle_flowchart"
title: "BuyFeatureButton Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["BuyFeatureButton", "buy_feature_button", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 BuyFeatureButton Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as BuyFeatureButton
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
