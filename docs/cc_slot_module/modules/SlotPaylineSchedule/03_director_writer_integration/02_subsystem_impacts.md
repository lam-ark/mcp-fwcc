---
id: "cc_slot_module:SlotPaylineSchedule:director_writer:subsystem_impacts"
title: "SlotPaylineSchedule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 SlotPaylineSchedule Cross-Subsystem Impacts

---

## 1. Subsystem Interaction Matrix

| Subsystem | Communication Channel | Impact |
| :--- | :--- | :--- |
| **`UIManager` (PaylineInfo)** | `this.eventManager.emit` | Updates bottom HUD win amount label per line. |
| **`PaylineSymbolModule`** | `this.payLineEmitter.emit` | Switches active Spine winning symbol animations. |
| **`PaylineWinFrameModule`**| `this.payLineEmitter.emit` | Displays glowing border boxes over currently hit coordinates. |
| **`PaylineLineModule`** | `this.payLineEmitter.emit` | Renders vector paths corresponding to the current line ID. |
| **`PaylineNumberModule`** | `this.payLineEmitter.emit` | Illuminates side line numbers. |
