---
id: "cc_slot_module:IntroGameModule:game_flow:spin_phase_breakdown"
title: "IntroGameModule State Across Spin Loop Phases"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 IntroGameModule State Across Spin Loop Phases

---

## 1. Spin Loop Phases

| Spin Phase | IntroGameModule State | Purpose |
| :--- | :--- | :--- |
| **Phase 0: Bootstrap** | Active during initial scene load. | Displays promotional features and splash art. |
| **Phase 1: Game Joined** | Dismissed via `onClickJoinGame()`. | Emits `HIDE_INTRO_GAME` and unlocks HUD. |
| **Phase 2..4: Spin Loop**| Permanently inactive (`active = false`). | Consumes zero CPU/GPU overhead during gameplay. |
