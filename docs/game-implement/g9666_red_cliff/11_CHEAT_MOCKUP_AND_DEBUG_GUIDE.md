---
id: "game-implement:9666:debug:cheat_mockup_and_debug_guide"
title: "Red Cliff (g9666) Cheat Keys, Mock Data & Debug Guide"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "CheatOverlay9666", "TutorialMockNetwork9666", "debug", "cheats", "mock"]
---

# 🛠️ Red Cliff (g9666) Cheat Keys, Mock Data & Debug Guide

---

## 1. Cheat Overlay Hotkeys & Mock Scenarios (`CheatOverlay9666`)

In developer and QA builds, `CheatOverlay9666` provides hotkey triggers and custom matrix injections:

| Key / Trigger | Action | Injected Matrix / Scenario |
| :--- | :--- | :--- |
| **`Trigger Free Game`** | Injects 3 Scatters (`A`) | Spawns Scatters on Reels 1, 3, 5 $\rightarrow$ Triggers 10 Free Spins. |
| **`Trigger Stack Wild`** | Injects `K2` on Top Reel | Spawns `K2` on index 9 $\rightarrow$ Triggers full column expansion on Reel 3. |
| **`Trigger Multiplier Wild`** | Injects `K1-8` & `K1-10` | Spawns high-multiplier Wilds with winning Payways. |
| **`Trigger Grand Jackpot`** | Injects 15 Guan Yu (`S1`) tokens | Triggers Grand Jackpot collection animation ($1000\times \text{Bet}$). |

---

## 2. In-Memory Bet History Debugging (`InMemoryBetHistoryRepository`)

Provides local storage caching for round history verification without requiring an active backend session.
