---
id: "cc_slot_module:SlotBaseModule:director_writer:pipeline_orchestration"
title: "SlotBaseModule Pipeline & Event Registration Integration"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 SlotBaseModule Pipeline & Event Registration Integration

---

## 1. Event Orchestration

`SlotBaseModule` hooks subclasses into the `RESET_ALL_EFFECT_AND_TASKS` pipeline:
```typescript
if (this.gameLogic) {
    this.gameLogic.on("RESET_ALL_EFFECT_AND_TASKS", this.resetAllEffectAndTasks, this);
}
```
Subclasses override `registerEvents()` and `resetAllEffectAndTasks()` to clear payline lines, stop win particle tweens, and reset count-up labels.
