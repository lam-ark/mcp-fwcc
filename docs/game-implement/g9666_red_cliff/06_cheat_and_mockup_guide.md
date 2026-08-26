---
id: "game-implement:9666:cheats"
title: "Red Cliff (g9666) - Cheat Keys, Mock Data & Debug Scenarios Guide"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
section: "cheats"
tags: ["game_implement", "9666", "cheats", "mock_data", "debug", "test_scenarios"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 6. 🧪 Cheat Keys, Mock Data & Debug Scenarios Guide

---

## 6.1 Fast Test Scenarios

### Scenario 1: Trigger Free Spins with 4 Scatters
- **Cheat Command / Key**: Set Matrix with 4 'A' symbols across Reels 1, 2, 4, 5.
- **Expected Outcome**: Scatters highlight $ightarrow$ `COLLECT_SCATTER` emits $ightarrow$ `_showTransitionFreeGame()` initiates $ightarrow$ Spin button locks $ightarrow$ Intro Free Game plays $ightarrow$ Free Game starts.

### Scenario 2: Turbo Big Win in Base Game
- **Settings**: Turn Turbo mode **ON**.
- **Action**: Trigger spin with total win >= 20x total bet.
- **Expected Outcome**: Big Win Spine popup is skipped; 1-second falling coin particle plays; win amount updates immediately onto Paybar.

### Scenario 3: Auto Spin + Free Game Mode Transition Lock
- **Settings**: Turn Auto Spin **ON**.
- **Action**: Hit Free Game + Big Win combo spin.
- **Verification**: Tapping the Spin button while Big Win closes or during Intro Free Game transition **must not cancel Auto Spin**.
