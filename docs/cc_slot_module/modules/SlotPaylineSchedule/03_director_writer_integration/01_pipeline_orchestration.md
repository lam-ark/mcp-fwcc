---
id: "cc_slot_module:SlotPaylineSchedule:director_writer:pipeline_orchestration"
title: "SlotPaylineSchedule 3-Tier Pipeline Orchestration"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 SlotPaylineSchedule 3-Tier Pipeline Orchestration

---

## 1. 3-Tier Pipeline Integration

```text
NormalGameDirectorModule / Writer
       │
       ▼ (Script Step: BLINK_ALL_PAYLINES, SHOW_ALL_PAYLINES)
SlotPaylineSchedule
       │
       ▼ (payLineEmitter: PAYLINE_BLINK_ALL, PAYLINE_SHOW_LINE)
Follower Components: PaylineSymbolModule, PaylineWinFrameModule, PaylineLineModule
```

1. **Director Layer**: `NormalGameDirectorModule` executes `ScriptExecutor` which awaits `blinkAllPaylines()`.
2. **Timing Engine (`SlotPaylineSchedule`)**: Converts steps into timed delays and sequence loops.
3. **Follower Layers**: `PaylineSymbolModule` & `PaylineWinFrameModule` react to events emitted by the scheduler.
