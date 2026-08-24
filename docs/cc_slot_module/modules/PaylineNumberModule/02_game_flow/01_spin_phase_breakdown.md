---
id: "cc_slot_module:PaylineNumberModule:game_flow:spin_phase_breakdown"
title: "PaylineNumberModule Behavior Across Spin Loop Phases"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 PaylineNumberModule Behavior Across Spin Loop Phases

---

## 1. Spin Phase Matrix

| Spin Phase | Operations | Visual Badge State |
| :--- | :--- | :--- |
| **Phase 1: Spin Start** | `hideAll()` executed on `PAYLINE_CLEAR`. | All side line numbers hidden/unlit. |
| **Phase 2: Reels Spinning** | Idle state. | Badges remain unlit. |
| **Phase 3: Reels Stopped** | `setupPaylines()` saves winning payload. | Prepared for presentation. |
| **Phase 4: Win Presentation (Stage 1)** | `blinkAllPayLines()` lights up numbers for all winning lines. | All winning line numbers glowing simultaneously. |
| **Phase 5: Idle Cycle (Stage 2)** | `showPayLine()` clears badges and lights up only the active cycling line. | Only the currently presented payline number is lit. |
