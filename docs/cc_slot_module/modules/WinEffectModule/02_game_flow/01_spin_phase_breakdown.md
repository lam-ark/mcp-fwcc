---
id: "cc_slot_module:WinEffectModule:game_flow:spin_phase_breakdown"
title: "WinEffectModule Execution Across Spin Loop Phases"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 WinEffectModule Execution Across Spin Loop Phases

---

## 1. Spin Loop Phases

| Spin Phase | WinEffectModule Operations | Visual & Audio Changes |
| :--- | :--- | :--- |
| **Phase 1: Spin Start** | Inactive (`active = false`). | Hidden. |
| **Phase 2: Reels Stopped** | Evaluates total round payout; triggers if $\text{winAmount} \ge \text{Big Win threshold}$. | Screen dims; BGM transitions to celebration fanfare. |
| **Phase 3: Roll & Escalation**| Number counts up over `animDuration` ($9\text{s}$); checks title changes. | Coin shower increases in intensity. |
| **Phase 4: Settlement** | Final amount formatted (`MoneyFormatter`); closes overlay. | Returns control to base game. |
