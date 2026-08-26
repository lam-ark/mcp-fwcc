---
id: "cc_slot_mechanics:CollectionItemData:overview:lifecycle_flowchart"
title: "CollectionItemData Lifecycle & Sequence Flowchart"
category: "cc_slot_mechanics"
tags: ["CollectionItemData", "collection_item_data", "cc_slot_mechanics", "overview", "lifecycle", "sequence"]
---

# 🔄 CollectionItemData Lifecycle & Sequence Flowchart

---

## 1. Lifecycle Sequence Diagram

```mermaid
sequenceDiagram
    participant Engine as Cocos Engine
    participant Module as CollectionItemData
    participant Director as GameDirector / Writer

    Engine->>Module: onLoad() / start()
    Director->>Module: Action Command
    Module->>Module: Execute Mechanics Logic & Tweens
    Module-->>Director: Action Complete Callback
    Engine->>Module: onDestroy()
```
