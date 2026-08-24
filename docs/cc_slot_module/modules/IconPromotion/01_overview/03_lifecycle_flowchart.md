---
id: "cc_slot_module:IconPromotion:overview:lifecycle_flowchart"
title: "IconPromotion Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["IconPromotion", "icon_promotion", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 IconPromotion Lifecycle Flowchart

---

## 1. Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant Server as Operator Server
    participant Model as eno.PromotionData
    participant IP as IconPromotion

    Server->>Model: Set isActive = true
    Model-->>IP: Observer fires showPromotion(true)
    IP->>IP: node.active = true
```
