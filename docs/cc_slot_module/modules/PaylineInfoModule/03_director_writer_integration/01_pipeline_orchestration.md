---
id: "cc_slot_module:PaylineInfoModule:director_writer:pipeline_orchestration"
title: "PaylineInfoModule Pipeline & Script Integration"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 PaylineInfoModule Pipeline & Script Integration

---

## 1. Event Orchestration

Driven by `PaylineControllerModule` / `PaylineWriter`:
```typescript
this.eventManager.emit('ON_SHOW_PAYLINE_INFO', {
    payLineID: 5,
    payLineWinNumbers: 4,
    payLineWinAmount: 15000,
    symbolId: "A"
});
```
Deactivated upon line step completion via `ON_HIDE_PAYLINE_INFO`.
