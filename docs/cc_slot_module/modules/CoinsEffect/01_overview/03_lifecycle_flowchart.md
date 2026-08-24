---
id: "cc_slot_module:CoinsEffect:overview:lifecycle_flowchart"
title: "CoinsEffect Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 CoinsEffect Lifecycle Sequence Flowchart

---

## 1. Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant Parent as WinEffectModule / TotalWinModule
    participant CE as CoinsEffect
    participant PS as cc.ParticleSystem[]

    Parent->>CE: emit("SHOW_COINS_EFFECT")
    CE->>PS: active = true & opacity = 1
    CE->>PS: resetSystem()
    CE->>PS: delay 0.1s -> opacity = 255
    
    Note over PS: Emits falling gold coins continuously
    
    Parent->>CE: emit("HIDE_COINS_EFFECT")
    CE->>PS: stopSystem()
```
