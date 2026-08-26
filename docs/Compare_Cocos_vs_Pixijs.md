---
id: "transfer-ark:business_mapping:cocos_vs_pixijs_master"
title: "Master Business Specification & Discrepancy Matrix: Cocos Creator vs Pixi.js"
category: "business_mapping"
game_ids: ["g9666", "all"]
sdk_modules: ["GameModeDirectorModule", "SlotButtonNormal", "WinEffectModule", "TotalWinModule", "AutoSpinPanelv3", "BetHistoryDetailManagerBase"]
tags: ["cocos_vs_pixijs", "refer_game", "qa_matrix", "discrepancy", "specification", "ark_business"]
created_at: "2026-08-25"
author: "ARK Studio Slot Engineering & QA Team"
---

# 📊 Master Business Specification: Cocos Creator (ARK Studio) vs Pixi.js (Refer Game)

> **Original Source**: `Compare Cocos vs Pixijs.xlsx`  
> **Objective**: Standardize 100% of UI behaviors, player UX, mode transitions, and game logic rules between ARK Studio's Cocos Creator framework and the Pixi.js Reference Game.

---

## 🗂️ Modular Business Specifications (English)

The comparison matrix has been split into 7 dedicated modules optimized for the MCP Knowledge Search Engine:

| # | Specification Module | Item Count | Core Standard Topics |
| :---: | :--- | :---: | :--- |
| **01** | [**01. Base Game & Action Panel**](./transfer-ark/03_business_discrepancies/DISCREPANCY_001_cocos_vs_pixijs/01_base_game_and_action_panel.md) | 9 items | Spin Button (3 states), Hold-to-Auto Spin, No Bet Option Popup, Non-blocking buttons while spinning |
| **02** | [**02. Big Win, Free Game & Mode Transitions**](./transfer-ark/03_business_discrepancies/DISCREPANCY_001_cocos_vs_pixijs/02_big_win_free_game_and_transitions.md) | 16 items | Skip Big Win in Turbo/F2R (1s coin particles), 3-phase Total Win celebration count-up, Free Game HUD & Payline aggregation |
| **03** | [**03. Bet History (LSC) & Jackpot History (LSH)**](./transfer-ark/03_business_discrepancies/DISCREPANCY_001_cocos_vs_pixijs/03_bet_history_lsc_and_jackpot_history_lsh.md) | 21 items | Column layout, pagination (`Page X/Y`), cascade/respin rounds, timestamp formats, session summary screen |
| **04** | [**04. Popups, Settings Menu, Audio & Network**](./transfer-ark/03_business_discrepancies/DISCREPANCY_001_cocos_vs_pixijs/04_popups_settings_audio_and_network.md) | 9 items | Backdrop tap-to-close, Exit confirmation popup, Independent BGM & SFX toggles, Reconnection retry popup |
| **05** | [**05. Matrix, Paylines & Payout Presentation**](./transfer-ark/03_business_discrepancies/DISCREPANCY_001_cocos_vs_pixijs/05_matrix_paylines_and_payouts.md) | 8 items | Disable symbol click payout, Aggregated payline amount for multi-combines, Dynamic Allways display |
| **06** | [**06. Demo Mode (Trial) vs Real Money Mode**](./transfer-ark/03_business_discrepancies/DISCREPANCY_001_cocos_vs_pixijs/06_demo_mode_vs_real_mode.md) | 4 items | Transition warnings from trial to real play, Auto Spin cancellation upon real money prompt |
| **07** | [**07. Splash, Loading Screen & Display Viewport**](./transfer-ark/03_business_discrepancies/DISCREPANCY_001_cocos_vs_pixijs/07_splash_loading_and_display_viewport.md) | 7 items | Auto-enter Action Panel upon 100% loading (bypass Tap to Start), Fullscreen Landscape enforcement |

---

> View the full index at: [`transfer-ark/03_business_discrepancies/DISCREPANCY_001_cocos_vs_pixijs/INDEX.md`](./transfer-ark/03_business_discrepancies/DISCREPANCY_001_cocos_vs_pixijs/INDEX.md)
