---
id: "cc_slot_module:SlotButtonModule:director_writer:pipeline_orchestration"
title: "SlotButtonModule Director & Pipeline Integration"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 SlotButtonModule Director & Pipeline Integration

---

## 1. Pipeline Trigger

Dispatched on initialization to register button components with the master director:
```typescript
this.eventManager.emit(GameUIEvents.SPIN_BUTTON.SET_UP_BUTTON, { 
    gameMode: this.gameMode, 
    node: this.node 
});
```
When touched or triggered via Spacebar, emits `NORMAL_SPIN_CLICKED` or `TRIGGER_SPACE_BUTTON` to initiate the spin cycle.
