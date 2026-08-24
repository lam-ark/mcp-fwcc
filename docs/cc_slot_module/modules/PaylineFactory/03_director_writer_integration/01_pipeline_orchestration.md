---
id: "cc_slot_module:PaylineFactory:director_writer:pipeline_orchestration"
title: "PaylineFactory Pipeline Role & Service Provisioning"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 PaylineFactory Pipeline Role & Service Provisioning

---

## 1. Pipeline Integration

Provides object pooling infrastructure beneath visual presentation layers:
```text
PaylineWinFrameModule / PaylineLineModule
       │
       ▼ (getObject / returnObject)
PaylineFactory
       │
       ▼ (Zero GC Node Retrieval)
Cocos Creator Node Hierarchy
```
