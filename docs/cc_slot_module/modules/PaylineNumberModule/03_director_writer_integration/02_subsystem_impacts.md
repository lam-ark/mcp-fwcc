---
id: "cc_slot_module:PaylineNumberModule:director_writer:subsystem_impacts"
title: "PaylineNumberModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 PaylineNumberModule Cross-Subsystem Impacts

---

## 1. Subsystem Coordination

| Subsystem | Impact |
| :--- | :--- |
| **`PaylineLineModule`** | Coordinates so that the illuminated number matches the currently drawn vector line. |
| **`PaylineSymbolModule`** | Matches the winning combination highlighted in the reel matrix. |
| **`SlotPaylineSchedule`** | Provides the step tick driving `PAYLINE_SHOW_LINE`. |
