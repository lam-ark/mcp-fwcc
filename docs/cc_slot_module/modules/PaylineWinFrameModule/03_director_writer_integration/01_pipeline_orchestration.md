---
id: "cc_slot_module:PaylineWinFrameModule:director_writer:pipeline_orchestration"
title: "PaylineWinFrameModule Pipeline Orchestration"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 PaylineWinFrameModule Pipeline Orchestration

---

## 1. Interaction Pipeline

Acts as a follower module responding to events dispatched by `PaylineSymbolModule` and `SlotPaylineSchedule`:

```mermaid
graph LR
    PSM[PaylineSymbolModule] -->|SYMBOL_PLAY_ANIMATION_WIN| PWFM[PaylineWinFrameModule]
    Sched[SlotPaylineSchedule] -->|PAYLINE_STOP_ALL / PAYLINE_CLEAR| PWFM
```
