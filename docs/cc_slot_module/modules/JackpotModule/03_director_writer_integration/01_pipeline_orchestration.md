---
id: "cc_slot_module:JackpotModule:director_writer:pipeline_orchestration"
title: "JackpotModule Pipeline & Event Integration"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 JackpotModule Pipeline & Event Integration

---

## 1. Event Orchestration

Listens to `GameUIEvents.JACKPOT` channels:
- `PAUSE_JACKPOT`: Halts progressive pool animations.
- `RESUME_JACKPOT`: Resumes progressive pool animations.
- `UPDATE_JACKPOT_VALUE`: Direct forced update of specific tier pool values.
