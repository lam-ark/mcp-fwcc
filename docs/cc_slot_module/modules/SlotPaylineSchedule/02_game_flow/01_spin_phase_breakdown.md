---
id: "cc_slot_module:SlotPaylineSchedule:game_flow:spin_phase_breakdown"
title: "SlotPaylineSchedule Behavior Across Spin Loop Phases"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 SlotPaylineSchedule Behavior Across Spin Loop Phases

---

## 1. Spin Phase Operations

| Spin Phase | Scheduler Operations | Output Actions |
| :--- | :--- | :--- |
| **Phase 1: Spin Start** | `cleanUp()` executed; `stopSchedule()` halts active tweens. | Emits `PAYLINE_CLEAR` and hides HUD payline info. |
| **Phase 2: Reels Rolling** | Idle; `tweenSchedule` is null. | No active timer ticks. |
| **Phase 3: Reels Stopped** | Ingests `setData({ payLines, jackpotPayline })`. | Prepares array for presentation. |
| **Phase 4: Win Presentation (Stage 1)** | `blinkAllPaylines()` fires `PAYLINE_BLINK_ALL` and blocks pipeline for `timelineConfig` seconds. | Stage 1 presentation runs to completion. |
| **Phase 5: Idle Cycle (Stage 2)** | `showAllPaylines()` starts looping `cc.tween` sequence. | Cycles individual lines indefinitely until next user spin. |
