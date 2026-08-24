---
id: "cc_slot_module:TrialModeManager:overview:architecture_and_role"
title: "TrialModeManager Architectural Role & Demo Mode Controller"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "overview", "architecture", "trial_mode"]
---

# 🏛️ TrialModeManager Architectural Role & Demo Mode Controller

---

## 1. Architectural Mission

`TrialModeManager` coordinates demo / practice gameplay experiences mounted at `Canvas/Director/TrialMode`. It emits `INIT_TRIAL_MODE` on startup, manages the optional scenario selection popup (`trialModePanel` / `optionHolder`) allowing players to test specific game features (e.g. Free Spins, Bonus Games, Big Wins), observes `eno.TrialModeData` and `eno.UIManagerData`, and validates currency compatibility with `verifyTrialModeData()`.

```mermaid
graph TD
    Engine[Cocos Creator onLoad] --> TMM[TrialModeManager]
    TMM -->|INIT_TRIAL_MODE| GL[GameLogic]
    
    Model[eno.TrialModeData Model] -->|Observer isPopupDisplay| TMM
    Model -->|Observer tutorialOptions| TMM
    
    TMM -->|updateTrialModePanel| Panel[trialModePanel: cc.Node]
    TMM -->|updateOptions SET_INTERACTABLE| Options[optionHolder: cc.Node]
    
    Player[Player Selects Demo Scenario] -->|playOption| GL
```

---

## 2. Key Responsibilities

1. **Scenario Selection Panel (`updateTrialModePanel`)**:
   - Manages interactive modal UI where players can trigger pre-recorded feature spins.
2. **Option Interactivity Masking (`updateOptions`)**:
   - Disables completed or locked demo scenarios by emitting `SET_INTERACTABLE` to child option nodes.
3. **Currency Data Verification (`safeCheckTrialMode`)**:
   - Validates that `trialModeData` contains betting increments configured for the active player currency.
