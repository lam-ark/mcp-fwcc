---
id: "cc_slot_module:ToastInfoModule:director_writer:pipeline_orchestration"
title: "ToastInfoModule Pipeline Integration"
category: "cc_slot_module"
tags: ["ToastInfoModule", "toast_info_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 ToastInfoModule Pipeline Integration

---

## 1. Event Orchestration

Subscribes to `GameLogic` warning events:
```typescript
this.gameLogic.on("NETWORK_WARNING", this.showMessage, this);
```
