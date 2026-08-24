---
id: "cc_slot_module:CoinsEffect:game_flow:spin_phase_breakdown"
title: "CoinsEffect State Across Spin Loop Phases"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 CoinsEffect State Across Spin Loop Phases

---

## 1. Spin Loop Phases

| Spin Phase | CoinsEffect Status | Particle State |
| :--- | :--- | :--- |
| **Phase 1: Spin Roll** | Inactive (`active = false`). | Particles stopped, opacity 0. |
| **Phase 2: Big Win Trigger**| `SHOW_COINS_EFFECT` received. | Particles active, falling coins shower. |
| **Phase 3: Celebration End**| `HIDE_COINS_EFFECT` received. | `stopSystem()` called, particle emission halts. |
