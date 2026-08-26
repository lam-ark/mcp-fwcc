---
id: "transfer-ark:business_mapping:cocos_vs_pixijs:02_big_win_free_game"
title: "Business Specification 02: Big Win, Free Game & Mode Transitions"
category: "business_mapping"
game_ids: ["g9666", "all"]
sdk_modules: ["WinEffectModule", "TotalWinModule", "IntroFreeGameModule", "GameModeDirectorModule"]
tags: ["big_win", "free_game", "total_win", "turbo_mode", "cutscene", "transitions"]
created_at: "2026-08-25"
author: "ARK Studio Slot Engineering & QA Team"
---

# 2. 🏆 Big Win, Free Game & Mode Transitions

---

## 2.1 Detailed Discrepancy & Specification Table

| #No | Location / Feature | ARK Studio Behavior (Cocos Creator) | Refer Game Behavior (Pixi.js) | Final Decision | Technical Notes & Bug References |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **13** | **Big Win in Turbo / F2R Mode** | Full Big Win Spine celebration popup plays for 7.5s even when Turbo ON / F2R is active. | Big Win popup is **skipped** in Turbo ON / F2R mode; replaced by a 1-second falling coin particle burst (`fastParticle`). | **Follow Refer** | Implemented in `WinEffectModule9666.showFastEffectWin()` conforming to SDK standard. |
| **14** | **Settings & Info Buttons in Free Game** | Free Game HUD hides Settings and Info buttons. | Settings and Info buttons remain visible and interactive in Free Game. | **Follow Refer** | [Bug 86d41ahrn](https://app.clickup.com/t/9008199668/86d41ahrn)<br>Ensure auxiliary buttons are mounted on Free Game HUD. |
| **15** | **Auto Spin Retention after Free Game** | Auto Spin resumes automatically when returning to Normal Game from Free Game. | Auto Spin **does not resume**; game resets to Normal Game Idle state upon Free Game exit. | **Follow Refer** | Auto Spin sequence ends when entering Free Game to prevent unintended balance deduction. |
| **50** | **Free Game Spin Button Title** | Spin button displays verbose label "Free Game" with current turn index and win amount. | No verbose title text displayed on Free Game Spin button. | **Follow Refer** | Streamline Free Game Spin button graphics. |
| **51** | **Terminology: Free Spins vs Free Game** | Uses "Free Game" terminology throughout. | Uses "Free Spins" terminology (displays Turn A/B - Round X/Y). | **Follow Refer** | Standardize UI labels, cutscenes, and summaries to "Free Spins". |
| **61** | **Game Version Display** | Version number appears only in the Settings Menu. | Version number appears in the Settings Menu. | **Follow Refer** | Keep version label neatly contained inside Settings Menu. |
| **62** | **Symbol Tapping in Free Game** | Tapping symbols has no function. | Tapping symbols has no function. | **Follow Refer** | Consistent between both implementations. |
| **63** | **Payline Display in Free Game** | Renders separate payline paths for every winning combination on the matrix. | Does not render individual line paths; shows only aggregated total win on matrix. | **Follow Refer** | Aggregate paylines to keep Free Game presentation clean and fast. |
| **64** | **Spin Button State in Free Game** | 3 states: `Active`, `Disable`, `F2R Effect`. | 1 single spin state; no disable state and no F2R state. | **Follow Refer** | Free Spins auto-play continuously without user button intervention. |
| **65** | **Bet Values in Free Game** | Displays user's total bet for that spin. | Displays standard Action Panel bet breakdown (Coin Value, Bet, Total). | **Follow Refer** | Synchronize Action Panel bet presentation across Normal and Free Game. |
| **66** | **Win Box in Free Game** | Displays $0.00 on non-winning spins; displays win amount and accumulates on successive wins. | No separate Win box element. | **Follow Refer** | Accumulate win amounts directly onto the central Paybar. |
| **67** | **Sound Button in Free Game** | Dedicated Sound button displayed to toggle audio in Free Game. | No standalone Sound button; audio toggled via Settings button. | **Follow Refer** | Consolidate audio controls inside Settings Menu. |
| **68** | **Payout Display (KTT) in Free Game** | Displays tip text when no win; displays win amount when winning. | Blank when non-winning; shows accumulated win amount during cascade/respin steps. | **Follow Refer** | Remove static tip strings; render active win amounts cleanly. |
| **69** | **Fast-To-Result (F2R) Support** | F2R support not specified in refer spec. | Supported per Reference Game and SDK standards. | **Follow ARK** | Support F2R alongside Turbo mode. |
| **70** | **Total Win Celebration Popup** | If session has winnings: displays Total Win celebration popup with 3-phase Spine money count-up (`in` -> `loop` -> `out`). If no win: suppresses popup. | Displays static total win popup with final sum; no count-up animation. | **Follow ARK** | **Retain 3-phase Spine count-up celebration** per `RECIPE-003` for enhanced jackpot sensation. |
