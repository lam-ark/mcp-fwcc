---
id: "cc_slot_module:ToastInfoModule:overview:lifecycle_flowchart"
title: "ToastInfoModule Lifecycle Flowchart"
category: "cc_slot_module"
tags: ["ToastInfoModule", "toast_info_module", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 ToastInfoModule Lifecycle Flowchart

---

## 1. Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant GL as GameLogic
    participant TIM as ToastInfoModule

    GL->>TIM: emit("NETWORK_WARNING", "Connection Lost")
    TIM->>TIM: showMessage("Connection Lost")
    TIM->>TIM: node.active = true, scale = 0.5
    TIM->>TIM: tween scale to 1.0 (0.2s)
    TIM->>TIM: delay 1.5s
    TIM->>TIM: node.active = false
```
