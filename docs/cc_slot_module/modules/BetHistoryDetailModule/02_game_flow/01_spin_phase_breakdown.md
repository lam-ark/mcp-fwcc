---
id: "cc_slot_module:BetHistoryDetailModule:game_flow:spin_phase_breakdown"
title: "BetHistoryDetailModule Spin Phase Breakdown"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "game_flow", "spin_phases"]
---

# ⏱️ BetHistoryDetailModule Spin Phase Breakdown

---

## 1. Spin Replay Phasing

| Step Type | Visual Presentation | Data Rendered |
| :--- | :--- | :--- |
| **Normal Spin Step** | 2D matrix snapshot of symbols | Base bet, total win, hit paylines. |
| **Free Spin Step** | Free spin step index & active multiplier | Free round win amount + accumulative payout. |
| **Bonus Pick Step** | Grid of picked chests & reveal outcomes | Picked item prize, multiplier, end game state. |
| **Summary Step** | Total win across all spins & jackpot breakdown | Session ID, total wager, net returns. |
