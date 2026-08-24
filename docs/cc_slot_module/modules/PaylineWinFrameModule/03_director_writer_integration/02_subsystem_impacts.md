---
id: "cc_slot_module:PaylineWinFrameModule:director_writer:subsystem_impacts"
title: "PaylineWinFrameModule Subsystem Impacts"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 PaylineWinFrameModule Subsystem Impacts

---

## 1. Subsystems Cross-Reference

| Component | Interaction | Impact |
| :--- | :--- | :--- |
| **`PaylineSymbolModule`** | Emits `SYMBOL_PLAY_ANIMATION_WIN` | Tells `PaylineWinFrameModule` which coordinate cell needs a frame overlay. |
| **`SlotPaylineSchedule`** | Emits `PAYLINE_STOP_ALL` | Requests hiding of frames between individual cyclic line presentations. |
