---
id: "cc_slot_module:systems:gui_dashboard:index"
title: "GUI Dashboard, Controls & Betting System Architecture Index"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "gui_dashboard", "ui_manager", "spin_button", "betting", "wallet", "index"]
---

# 🎛️ GUI Dashboard, Controls & Betting System Architecture Index

---

## 1. Subsystem Mission

The **GUI Dashboard, Controls & Betting Subsystem** delivers player interaction controls, currency state synchronization, bet sizing configuration, and contextual HUD presentation across all game modes (`NORMAL_GAME`, `FREE_GAME`, `BONUS_GAME`).

```mermaid
graph TD
    GameLogic[GameLogic / GameDataStore] -->|Reactive State Observers| UIM[UIManagerModule]
    UIM -->|Mode Layout Switches| HUD[Canvas/Director/UIManager]
    
    HUD --> SpinBtn[SlotButtonModule: Normal / Free / Lightning]
    HUD --> Bet[BetModule & ExtraBetModule]
    HUD --> Wallet[WalletModule & WinAmountModule]
    HUD --> Jackpot[JackpotModule & TrialJackpotModule]
    HUD --> Promo[IconPromotion & SpinTimesModule]
    HUD --> Toast[ToastInfoModule]
```

---

## 2. Topic Breakdown & Navigation

1. **[`01_ui_manager_and_hud_orchestration.md`](./01_ui_manager_and_hud_orchestration.md)**
   - Master layout orchestrator (`UIManagerModule`), mode UI transitions, and cutscene/popup input blocking.
2. **[`02_spin_button_state_machine_and_modes.md`](./02_spin_button_state_machine_and_modes.md)**
   - Spin button class hierarchy, state machine (`NORMAL`, `HOVER`, `SPINNING`), hold-to-auto ($0.7\text{s}$), and Space key routing.
3. **[`03_betting_matrix_and_denominations.md`](./03_betting_matrix_and_denominations.md)**
   - Bet multipliers, coin denominations (`DenomLabel`), total bet calculations, and Ante-Bet toggles (`ExtraBetModule`).
4. **[`04_wallet_and_rolling_money_tweening.md`](./04_wallet_and_rolling_money_tweening.md)**
   - Balance persistence, trial vs real wallet isolation, and animated rolling count-ups (`MoneyTween`).
5. **[`05_trial_mode_promotions_and_notifications.md`](./05_trial_mode_promotions_and_notifications.md)**
   - Demo mode simulation (`TrialModeManager`), promotional free spin badges (`IconPromotion`), and transient alert banners (`ToastInfoModule`).
6. **[`06_custom_gui_dashboard_creation_guide.md`](./06_custom_gui_dashboard_creation_guide.md)**
   - Step-by-step developer guide to assembling custom desktop and portrait HUD panels.
