---
id: "game-implement:9666:ui:trial_mode_and_ui_framework"
title: "Red Cliff (g9666) Trial Mode & UI Framework"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "TrialModeLoopController9666", "TrialModeToggleButton9666", "UIManagerModule9666", "ui_framework"]
---

# 🎮 Red Cliff (g9666) Trial Mode & UI Framework

---

## 1. Trial Mode Architecture & Mock Network Ingestion

Trial Mode in Red Cliff allows players to experience full Free Game feature loops and High-Win scenarios using pre-scripted mock networks:
- **`TrialModeLoopController9666`**: Controls trial spin transitions and loops back to Normal Game upon feature completion.
- **`TrialModeToggleButton9666`**: Toggles mock mode in debug builds.
- **`TutorialMockNetwork9666`** & **`TutorialMockData9666`**: Injects scripted server responses for Free Spin triggers, Stack Wilds, and Big Wins.

```mermaid
graph TD
    A[User Clicks Trial Mode] --> B[TrialModeToggleButton9666]
    B --> C[TrialModeLoopController9666.activateTrialMode]
    C --> D[Swap Network Handler to TutorialMockNetwork9666]
    D --> E[Inject Mock PlaySession: Free Game 10 Spins + Multiplier Wilds]
```

---

## 2. UI Manager & Responsive Layout (`UIManagerModule9666`)

Controls adaptive UI scaling across device aspect ratios (16:9, 18:9, 4:3) and popup dialog management (Bet History, Win Limits, Paytables).
