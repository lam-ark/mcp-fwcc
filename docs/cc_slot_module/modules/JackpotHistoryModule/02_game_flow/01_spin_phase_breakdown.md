---
id: "cc_slot_module:JackpotHistoryModule:game_flow:spin_phase_breakdown"
title: "JackpotHistoryModule Spin Phase Breakdown"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "game_flow", "spin_phases"]
---

# ⏱️ JackpotHistoryModule Spin Phase Breakdown

---

## 1. Behavior Across Spin Phases

`JackpotHistoryModule` remains closed during active spin sequences. When invoked via `SettingPanel` or GUI buttons in idle state (Phase 5), it queries the global jackpot winner table across room servers.
