---
id: "cc_slot_module:PaylineLineModule:game_flow:spin_phase_breakdown"
title: "PaylineLineModule Behavior Across Spin Loop Phases"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 PaylineLineModule Behavior Across Spin Loop Phases

---

## 1. Spin Phase Breakdown

| Spin Phase | Internal Operation | Visual Output |
| :--- | :--- | :--- |
| **Phase 1: Spin Start** | Subscribed to `PAYLINE_CLEAR`. | All active vector lines are hidden and recycled to `linePool`. |
| **Phase 2: Reels Rolling** | Idle state; `lines` array remains empty. | No lines drawn. |
| **Phase 3: Reels Stopped** | `setupPaylines()` stores parsed line list from `PAYLINE_SET_DATA`. | Awaiting presentation trigger. |
| **Phase 4: Win Presentation (Stage 1)** | `blinkAllPayLines()` fetches line instances and emits `"INIT"` and `"SHOW"`. | All hit paylines render concurrently across the table. |
| **Phase 5: Idle Cycle (Stage 2)** | `showPayLine()` isolates individual `payLineID`, calling `hideAll()` and `"SHOW"` on the selected line. | Only the single cycling line is drawn on the screen. |
