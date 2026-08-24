---
id: "cc_slot_module:SpinTimesModule:director_writer:pipeline_orchestration"
title: "SpinTimesModule Pipeline & Director Integration"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 SpinTimesModule Pipeline & Director Integration

---

## 1. Event Orchestration

Registers with the Director during startup:
```typescript
this.eventManager.emit(GameUIEvents.SPIN_TIMES.SET_UP_SPIN_TIMES, {
    gameMode: this.gameMode,
    node: this.node
});
```
`FreeGameDirectorModule` dispatches `UPDATE_SPINTIMES` as each free spin concludes to decrement the displayed count.
