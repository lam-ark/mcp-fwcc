---
id: "cc_slot_module:PortraitBetModule:game_flow:spin_phase_breakdown"
title: "PortraitBetModule Spin Phase Breakdown"
category: "cc_slot_module"
tags: ["PortraitBetModule", "portraitbetmodule", "cc_slot_module", "game_flow", "spin_phases"]
---

# ⏱️ PortraitBetModule Spin Phase Breakdown

---

## 1. Behavior Across Phases

- **Phase 1 (Spin Start)**: `disableBet()` executes, disabling `minBetBtn` and `maxBetBtn`.
- **Phase 2-4 (Reel Spin & Win)**: Buttons remain non-interactable.
- **Phase 5 (Idle)**: `onEnableBetChange(true)` re-enables boundary shortcut buttons.
