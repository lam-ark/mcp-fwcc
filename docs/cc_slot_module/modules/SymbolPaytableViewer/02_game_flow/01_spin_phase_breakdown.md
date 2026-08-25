---
id: "cc_slot_module:SymbolPaytableViewer:game_flow:spin_phase_breakdown"
title: "SymbolPaytableViewer Spin Phase Breakdown"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "game_flow", "spin_phases"]
---

# ⏱️ SymbolPaytableViewer Spin Phase Breakdown

---

## 1. Behavior Across Phases

- **Phase 1 (Start Spin)**: Automatically dismisses callout via `hideSymbolInfo()`.
- **Phase 2-4 (Reel Spin & Win)**: Touch interactions ignored while `currentGameState !== GAME_STATE_ENUM.IDLE`.
- **Phase 5 (Idle)**: Touch interactions enabled.
