---
id: "cc_slot_module:FreeGameDirectorModule:customization:production_game_case_study"
title: "Production Case Study: Autonomous Free Spins Pacing & Retriggering"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "customization", "case_study"]
---

# 📖 Production Case Study: Autonomous Free Spins Pacing & Retriggering

## 1. Production Context & Implementation

In high-speed production slot games:
1. `FreeGameDirectorModule` bypasses the initial 0.5s auto-spin delay on `enter()` via `isFirstAutoSpin = true`.
2. When consecutive winning lines hit, `_showWinPayline()` emits `BLINK_ALL_PAYLINES` displaying the running session total (`winAmountPS`), ensuring players see their accumulated payout rise steadily on every spin before the final `TOTAL_WIN` dialog appears.
