---
id: "cc_slot_module:PaylineLineModule:director_writer:subsystem_impacts"
title: "PaylineLineModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 PaylineLineModule Cross-Subsystem Impacts

---

## 1. Subsystem Interaction Matrix

| Subsystem | Interaction Pattern | Impact / Result |
| :--- | :--- | :--- |
| **`PaylineSymbolModule`** | Parallel follower | Synchronizes connecting line display with Spine winning symbols. |
| **`PaylineWinFrameModule`**| Parallel follower | Surrounds connecting line endpoints with glowing border boxes. |
| **`PaylineNumberModule`** | Parallel follower | Illuminates corresponding line numbers along table gutters. |
| **`SlotPaylineSchedule`** | Event driver | Drives step timers switching lines on `PAYLINE_SHOW_LINE`. |
