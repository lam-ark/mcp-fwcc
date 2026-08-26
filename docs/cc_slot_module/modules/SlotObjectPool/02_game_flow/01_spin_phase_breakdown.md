---
id: "cc_slot_module:SlotObjectPool:game_flow:spin_phase_breakdown"
title: "SlotObjectPool Spin Phase Execution Breakdown"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "game_flow", "spin_phases"]
---

# ⚡ SlotObjectPool Spin Phase Execution Breakdown

---

## 1. Spin Phase Roles

1. **Spin Start**: Clears lingering frames/effects via `clear()`.
2. **Win Evaluation**: Borrows up to `15` frames to highlight winning symbol cells simultaneously.
3. **Payline Cycling**: Borrows and returns line segments as each payline cycles sequentially.
4. **FTR / Fast Stop**: Calls `clear()` to immediately hide and recycle all visible nodes.
