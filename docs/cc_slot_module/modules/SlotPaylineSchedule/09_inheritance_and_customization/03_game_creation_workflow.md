---
id: "cc_slot_module:SlotPaylineSchedule:inheritance:game_creation_workflow"
title: "SlotPaylineSchedule Game Creation & Timing Setup Workflow"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "inheritance", "workflow"]
---

# 🚀 SlotPaylineSchedule Game Creation & Timing Setup Workflow

---

## 1. Setup Checklist

1. **Attach Component**: Add `SlotPaylineSchedule` to the `SlotTablePaylineModule` node.
2. **Configure Duration**: Set `TIMELINE_CONFIG: 2.0` inside your game's `PaylineConfig`.
3. **Register Writer Steps**: In your `NormalGameWriterModule`, include `BLINK_ALL_PAYLINES` and `SHOW_ALL_PAYLINES` in the spin completion script sequence.
