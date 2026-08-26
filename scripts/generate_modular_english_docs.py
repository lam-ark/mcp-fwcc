import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

target_dir = 'mcp/mcp-fwcc/docs/transfer-ark/03_business_discrepancies/DISCREPANCY_001_cocos_vs_pixijs'
os.makedirs(target_dir, exist_ok=True)

# Remove old Vietnamese named files if any
old_files = [
    '01_base_game_va_action_panel.md',
    '02_big_win_free_game_va_chuyen_canh.md',
    '03_lich_su_cuoc_lsc_va_lich_su_hu_lsh.md',
    '04_popups_setting_am_thanh_va_mang.md',
    '05_matrix_paylines_va_tra_thuong.md',
    '06_choi_thu_demo_va_chuyen_mode.md',
    '07_splash_loading_va_khung_hinh.md'
]
for of in old_files:
    p = os.path.join(target_dir, of)
    if os.path.exists(p):
        os.remove(p)

# 1. INDEX.md
index_content = """---
id: "transfer-ark:business_mapping:cocos_vs_pixijs:index"
title: "Business Specification & Discrepancy Matrix: Cocos Creator (ARK Studio) vs Pixi.js (Refer Game)"
category: "business_mapping"
game_ids: ["g9666", "all"]
sdk_modules: ["GameModeDirectorModule", "SlotButtonNormal", "WinEffectModule", "TotalWinModule", "AutoSpinPanelv3", "BetHistoryDetailManagerBase"]
tags: ["cocos_vs_pixijs", "refer_game", "qa_matrix", "discrepancy", "specification", "ark_business", "index"]
created_at: "2026-08-25"
author: "ARK Studio Slot Engineering & QA Team"
---

# 📊 Master Business Specification Matrix: Cocos Creator vs Pixi.js Refer Game

> **Original Source**: `Compare Cocos vs Pixijs.xlsx`  
> **Objective**: Standardize 100% of UI behaviors, player UX, mode transitions, and game logic rules between ARK Studio's Cocos Creator framework and the Pixi.js Reference Game. Serves as the official single source of truth for Developers, QA Engineers, and Game Designers.

---

## 📚 Modular Specification Breakdown

| Module | Document | Item Count | Core Specifications |
| :---: | :--- | :---: | :--- |
| **01** | [**01. Base Game & Action Panel**](./01_base_game_and_action_panel.md) | 9 items | Spin Button (3 states), Hold-to-Auto Spin, No Bet Option Popup, Non-blocking buttons while spinning |
| **02** | [**02. Big Win, Free Game & Mode Transitions**](./02_big_win_free_game_and_transitions.md) | 16 items | Skip Big Win in Turbo/F2R (1s coin particles), 3-phase Total Win celebration count-up, Free Game HUD & Payline aggregation |
| **03** | [**03. Bet History (LSC) & Jackpot History (LSH)**](./03_bet_history_lsc_and_jackpot_history_lsh.md) | 21 items | Column layout, pagination (`Page X/Y`), cascade/respin rounds, timestamp formats, session summary screen |
| **04** | [**04. Popups, Settings Menu, Audio & Network**](./04_popups_settings_audio_and_network.md) | 9 items | Backdrop tap-to-close, Exit confirmation popup, Independent BGM & SFX toggles, Reconnection retry popup |
| **05** | [**05. Matrix, Paylines & Payout Presentation**](./05_matrix_paylines_and_payouts.md) | 8 items | Disable symbol click payout, Aggregated payline amount for multi-combines, Dynamic Allways display |
| **06** | [**06. Demo Mode (Trial) vs Real Money Mode**](./06_demo_mode_vs_real_mode.md) | 4 items | Transition warnings from trial to real play, Auto Spin cancellation upon real money prompt |
| **07** | [**07. Splash, Loading Screen & Display Viewport**](./07_splash_loading_and_display_viewport.md) | 7 items | Auto-enter Action Panel upon 100% loading (bypass Tap to Start), Fullscreen Landscape enforcement |
"""

with open(f"{target_dir}/INDEX.md", "w", encoding="utf-8") as f:
    f.write(index_content)

# 2. 01_base_game_and_action_panel.md
sec01 = """---
id: "transfer-ark:business_mapping:cocos_vs_pixijs:01_base_game_action_panel"
title: "Business Specification 01: Base Game & Action Panel"
category: "business_mapping"
game_ids: ["g9666", "all"]
sdk_modules: ["SlotButtonNormal", "SlotButtonSprite", "AutoSpinPanelv3", "GameModeDirectorModule"]
tags: ["base_game", "action_panel", "spin_button", "auto_spin", "bet_size", "button_states"]
created_at: "2026-08-25"
author: "ARK Studio Slot Engineering & QA Team"
---

# 1. 🕹️ Base Game & Action Panel (Buttons, Bets, Controls)

---

## 1.1 Detailed Discrepancy & Specification Table

| #No | Location / Feature | ARK Studio Behavior (Cocos Creator) | Refer Game Behavior (Pixi.js) | Final Decision | Technical Notes & Bug References |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **2** | **Interactions while Reel is spinning** | Screen buttons are disabled while reels are spinning (except Turbo and Sound in Free Game). | No buttons are disabled; player can interact with UI/menus while reels spin. | **Follow Refer** | [Bug 86d418ykx](https://app.clickup.com/t/9008199668/86d418ykx)<br>Allow opening Settings, History, and Rules during active reel spin. |
| **3** | **Tapping Bet Size** | Opens the Bet Options popup when tapping Bet size. | Does not open Bet Options popup; no Bet Option popup exists. | **Follow Refer** | [Bug 86d419402](https://app.clickup.com/t/9008199668/86d419402)<br>Only use +/- buttons to adjust bet level. |
| **4** | **Auto Spin Trigger Mechanism** | Dedicated Auto Spin popup: Open popup $\rightarrow$ select spin count $\rightarrow$ tap Start. | No Auto Spin popup; **Long-press (hold) the Spin button** to trigger auto spin. | **Follow Refer** | [Bug 86d41af10](https://app.clickup.com/t/9008199668/86d41af10)<br>Configured via `SlotButtonNormal.holdToAutoSpin = true` (0.7s hold duration). |
| **7** | **Max Win Cap Mechanism** | Game includes Max Win threshold cap. | Game does not feature Max Win cap. | **Follow Refer** | Disable artificial Max Win restrictions if not present in Reference Game. |
| **31** | **Spin Button Visual States** | 5 states: `Idle`, `Active`, `Disable`, `F2R Effect`, `Locked during Auto Spin`. | 3 states only: `Idle`, `Spin`, `Locked during Auto Spin`. | **Follow Refer** | Simplify Spin Button state machine to match Reference Game aesthetics. |
| **55** | **Cancelling Auto Spin** | When clicked to cancel, Spin button instantly switches from Auto UI to Normal UI. | When clicked to cancel, button keeps Auto UI until current spin concludes, then reverts to Normal UI. | **Follow Refer** | Ensure in-flight spin finishes cleanly before restoring default UI state. |
| **56** | **Wallet Balance Tool Updates** | Balance changes via developer tools apply immediately. | Developer tool wallet updates apply after page reload or session end. | **Follow Refer** | Defer wallet adjustments until the active spin session concludes. |
| **57** | **Insufficient Balance Handling** | Tapping spin with insufficient funds displays error popup immediately; reels do not spin. | Tapping spin with insufficient funds plays a short reel spin motion then displays error popup. | **Follow Refer** | Maintain a single total bet value on the Action Panel. |
| **-** | **Idle Timeout Popup** | Displays idle timeout popup after 30 minutes of inactivity. | No idle popup is displayed. | **Follow Refer** | Suppress intrusive idle popups during base game. |
"""

with open(f"{target_dir}/01_base_game_and_action_panel.md", "w", encoding="utf-8") as f:
    f.write(sec01)

# 3. 02_big_win_free_game_and_transitions.md
sec02 = """---
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
| **70** | **Total Win Celebration Popup** | If session has winnings: displays Total Win celebration popup with 3-phase Spine money count-up (`in` $\rightarrow$ `loop` $\rightarrow$ `out`). If no win: suppresses popup. | Displays static total win popup with final sum; no count-up animation. | **Follow ARK** | **Retain 3-phase Spine count-up celebration** per `RECIPE-003` for enhanced jackpot sensation. |
"""

with open(f"{target_dir}/02_big_win_free_game_and_transitions.md", "w", encoding="utf-8") as f:
    f.write(sec02)

# 4. 03_bet_history_lsc_and_jackpot_history_lsh.md
sec03 = """---
id: "transfer-ark:business_mapping:cocos_vs_pixijs:03_bet_history_lsc_lsh"
title: "Business Specification 03: Bet History (LSC) & Jackpot History (LSH)"
category: "business_mapping"
game_ids: ["g9666", "all"]
sdk_modules: ["BetHistoryDetailManagerBase", "BaseUIPopup"]
tags: ["lsc", "lsh", "bet_history", "jackpot_history", "pagination", "summary_view"]
created_at: "2026-08-25"
author: "ARK Studio Slot Engineering & QA Team"
---

# 3. 📜 Bet History (LSC) & Jackpot History (LSH)

---

## 3.1 Detailed Discrepancy & Specification Table

| #No | Location / Feature | ARK Studio Behavior (Cocos Creator) | Refer Game Behavior (Pixi.js) | Final Decision | Technical Notes & Bug References |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **5** | **Tapping Win Box / Paybar** | Tapping Win Box opens Bet History (LSC) popup. | Tapping Paybar **does not open LSC**. | **Follow Refer** | [Bug 86d41a0b0](https://app.clickup.com/t/9008199668/86d41a0b0)<br>Open LSC exclusively via Settings Menu / Dedicated History button. |
| **6** | **Popup Window Framing** | LSC and LSH are full-screen popups that cannot be closed by tapping outside. | LSC and LSH are framed dialog popups; tapping the backdrop outside closes them. | **Follow Refer** | Enable backdrop click-to-dismiss on LSC/LSH popups. |
| **12** | **Session ID Copy Button** | Includes a "Copy Session ID" button for redirect verification. | Does not include a Copy Session ID button. | **Follow Refer** | [Bug 86d419xxe](https://app.clickup.com/t/9008199668/86d419xxe)<br>Displaying short PSID text is sufficient; copy button omitted. |
| **32** | **Pagination Buttons on Empty State** | When no records exist: Completely hides Previous / Next buttons. | Displays Previous / Next buttons in Disabled (grayed-out) state. | **Follow Refer** | Render disabled pagination buttons to preserve UI structure. |
| **33** | **Pagination Button State Management** | Buttons visible but disabled. | Matches LSC behavior. | **Follow Refer** | Maintain uniform pagination button positioning. |
| **34** | **Jackpot History (LSH) Columns** | Columns: `Time` (dd/mm hh:mm:ss), `Honor`, `Total Bet`, `Total Win`. | Columns: `Time` (dd/mm hh:mm), `Honor`, `Bet`, `Jackpot`. | **Follow Refer** | Format timestamp to `dd/mm hh:mm` and label column as `Jackpot`. |
| **35** | **Row Hover Highlight (Desktop)** | Highlights table row when hovering cursor over LSC records. | Table row is highlighted on hover. | **Follow Refer** | Retain row hover visual feedback on desktop. |
| **36** | **Feature Win Marker Dot** | No row highlight; only "Details" button has hover effect. | If the spin triggered Free Spins / Jackpot / Max Win, a **colored dot badge** appears beneath `>>`. | **Follow Refer** | Render colored indicator dots for major feature trigger spins. |
| **37** | **Overview LSC Table Columns** | Columns: `Time`, `Total Bet`, `Total Win`. | Columns: `#`, `Time`, `Lines`, `Bet`, `Win`, `Result`. | **Follow Refer** | Include sequence number `#` and `Lines` columns per Refer spec. |
| **38** | **Page Numbering Display** | Displays "Page X" text per SDK prefab. | Displays "Page X/Y" (e.g. `1/5`) in detailed LSC views. | **Follow Refer** | Clearly display total page count in pagination header. |
| **39** | **Session ID in Detailed Sub-Pages** | Copy button included; session ID displayed across all sub-pages. | No copy button; session ID shown only on Summary page, omitted on spin sub-pages. | **Follow Refer** | Streamline sub-page headers by removing redundant PSID labels. |
| **40** | **Summary Screen Display Scope** | Summary screen displayed only for spins that triggered Free Game. | Summary screen displayed for **all spins** (including Normal Game spins). | **Follow Refer** | Always present Summary screen upon opening spin detail view. |
| **41** | **Free Spins Count on Summary** | Free Spins count not displayed on Summary. | Displays total Free Spins count awarded in that session. | **Follow Refer** | Add Free Spins total metric to the Summary card. |
| **42** | **Timestamp Formatting in Details** | Formatted as `dd/mm - hh:mm:ss`. | Renders backend raw format. | **Follow ARK** | Standardize timestamp to `dd/mm - hh:mm:ss` for clarity. |
| **43** | **Normal Game Spin Title** | Popup header displays "Base Game". | Header button displays "Normal". | **Follow Refer** | Use concise label "Normal" instead of "Base Game". |
| **44** | **Total Metrics on Sub-Pages** | Displays `Total Bet`, `Win`, `Total Win` header boxes. | Suppresses total metric boxes on individual sub-pages. | **Follow Refer** | Dedicate maximum screen space to the Matrix layout. |
| **45** | **Cascade / Refill Round Display** | Displays "Round X/Y" label on each cascade step. | No "Round X/Y" text; each cascade/respin step is rendered on an independent page. | **Follow Refer** | Treat each cascade step as a discrete sub-page. |
| **46** | **Payout vs Rewards Section** | Displays "Payout" section detailing combination breakdown. | Displays "Rewards" section recording awarded prizes. | **Follow Refer** | Format rewards as "Normal : $XX.XX" or "Respin Z : $XX.XX". |
| **47** | **Header Navigation: Back vs Close** | Title bar contains Back button only (no Close button). | Title bar contains Close (X) button only (no Back button). | **Follow Refer** | Use unified Close (X) button in dialog title bar. |
| **48** | **Back Button Dismissal Action** | Back button returns to LSC master list. | Close button closes detailed LSC popup directly. | **Follow Refer** | Close button dismisses dialog back to main game screen. |
| **49** | **First/Last Page Navigation State** | Hides Previous button on page 1; hides Next button on last page. | Renders Previous button disabled on page 1; renders Next button disabled on last page. | **Follow Refer** | Keep pagination button layout stationary across all pages. |
"""

with open(f"{target_dir}/03_bet_history_lsc_and_jackpot_history_lsh.md", "w", encoding="utf-8") as f:
    f.write(sec03)

# 5. 04_popups_settings_audio_and_network.md
sec04 = """---
id: "transfer-ark:business_mapping:cocos_vs_pixijs:04_popups_settings_audio_network"
title: "Business Specification 04: Popups, Settings Menu, Audio & Network"
category: "business_mapping"
game_ids: ["g9666", "all"]
sdk_modules: ["BaseUIPopup", "SoundPlayerModule", "NetworkManager"]
tags: ["popups", "setting_menu", "sound", "bgm_sfx", "network_retry", "exit_confirmation"]
created_at: "2026-08-25"
author: "ARK Studio Slot Engineering & QA Team"
---

# 4. ⚙️ Popups, Settings Menu, Audio & Network

---

## 4.1 Detailed Discrepancy & Specification Table

| #No | Location / Feature | ARK Studio Behavior (Cocos Creator) | Refer Game Behavior (Pixi.js) | Final Decision | Technical Notes & Bug References |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **1** | **Backdrop Click Dismissal** | Tapping outside the Settings popup does not dismiss the popup. | Tapping outside any modal popup **automatically dismisses it**. | **Follow Refer** | [Bug 86d418xb5](https://app.clickup.com/t/9008199668/86d418xb5)<br>Attach backdrop touch-to-close handler on all standard modal popups. |
| **9** | **Game Rules & Paytable Layout** | Game Rules and Paytable split into 2 separate popups. | All game rules and feature descriptions consolidated into **1 single Info popup**. | **Follow Refer** | [Bug 86d4199nk](https://app.clickup.com/t/9008199668/86d4199nk)<br>Combine Paytable and Rules into a unified scrolling tab dialog. |
| **10** | **Exit Button Confirmation** | Tapping Exit opens a confirmation popup with `No` and `Confirm` options. | Tapping Exit exits the game immediately without confirmation. | **Follow ARK** | [Bug 86d419vpn](https://app.clickup.com/t/9008199668/86d419vpn)<br>**Retain confirmation dialog** to prevent accidental game exits during active play. |
| **11** | **Exit Button Display Condition** | Exit button appears in Settings Menu only when the URL includes `&ru=...` parameter. | Exit button is always visible; if `&ru` parameter is missing, button is inert. | **Follow Refer** | Always render Exit button in the Settings Menu layout. |
| **20** | **Audio Settings Toggles** | Single master audio switch controls both BGM and SFX. | **Two separate switches**: independent toggles for BGM (Music) and SFX (Effects). | **Follow Refer** | Provide separate BGM and SFX checkboxes in Settings Menu. |
| **52** | **Settings Menu Item Composition** | Variable button list based on `ru` parameter existence. | Unified static menu layout: BGM Checkbox, SFX Checkbox, LSH Button, LSC Button. | **Follow Refer** | Simplify Settings Menu composition per Refer UI layout. |
| **53** | **Cursor State on Hover (Desktop)** | Interactive buttons switch to Hand cursor; disabled buttons show standard Arrow cursor. | Uniform standard Arrow cursor across all buttons. | **Follow Refer** | Match Reference Game desktop cursor presentation. |
| **54** | **Network Disconnection & Retry Flow** | Displays "No internet connection, loading again... (%param%)"; shows fatal error popup after 10 attempts. | Shows "Connection lost - Reconnecting" popup with "Confirm" button directing to `ru` URL. | **Follow Refer** | Display clean reconnection dialog with optional redirect. |
| **73** | **Session Resume Dialog** | Displays resume dialog asking player whether to restore unfinished session. | Tap screen or press Spacebar to dismiss resume popup and restore session. | **Follow ARK** | Smoothly restore unfinished game state automatically. |
"""

with open(f"{target_dir}/04_popups_settings_audio_and_network.md", "w", encoding="utf-8") as f:
    f.write(sec04)

# 6. 05_matrix_paylines_and_payouts.md
sec05 = """---
id: "transfer-ark:business_mapping:cocos_vs_pixijs:05_matrix_paylines_payout"
title: "Business Specification 05: Matrix, Paylines & Payout Presentation"
category: "business_mapping"
game_ids: ["g9666", "all"]
sdk_modules: ["SlotTableModule", "SlotTablePaylineModule", "SlotSymbolModule"]
tags: ["matrix", "paylines", "payout", "allways", "symbol_click", "khung_tra_thuong"]
created_at: "2026-08-25"
author: "ARK Studio Slot Engineering & QA Team"
---

# 5. 🎰 Matrix, Paylines & Payout Presentation

---

## 5.1 Detailed Discrepancy & Specification Table

| #No | Location / Feature | ARK Studio Behavior (Cocos Creator) | Refer Game Behavior (Pixi.js) | Final Decision | Technical Notes & Bug References |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **8** | **Tapping Matrix Symbols** | Tapping any symbol on the reel matrix opens its individual Payout popup. | Tapping symbols **has no function** (does not open popup). | **Follow Refer** | [Bug 86d41a08z](https://app.clickup.com/t/9008199668/86d41a08z)<br>Disable symbol click handlers on active matrix board. |
| **27** | **Multi-Combination Payline Rendering** | Renders separate payline graphics for each distinct symbol winning combination. | **Renders a single aggregated payline** showing the combined sum of all wins. | **Follow Refer** | Aggregate multi-combination paylines to avoid visual clutter. |
| **28** | **Payout Display (KTT) in Base Game** | Idle/No win: Displays static instructional tips.<br>Winning spin: Displays "Win $XXX.XX" / "Total Win $YYY.YY". | Idle/No win: Empty (no tips displayed).<br>Winning spin: Displays raw amount "$XXX.XX". | **Follow Refer** | Suppress static tips; render active win amounts cleanly. |
| **29** | **Dedicated Win Box Element** | Renders a separate standalone Win Box on the HUD. | No dedicated Win box (win amounts update directly onto Paybar/Balance). | **Follow Refer** | Match Refer Action Panel layout without standalone Win box. |
| **30** | **Currency Format Precision** | Enforces Dollar ($) only without cents. | Supports standard cent decimals ($XX.YY). | **Follow Refer** | Format amounts to 2 decimal places (e.g. `$12.50`). |
| **58** | **Action Panel Bet Representation** | Displays 3 distinct bet metrics: Coin Value, Bet, Total Bet. | Displays 1 single Total Bet value on the Action Panel. | **Follow Refer** | Approved simplified denomination/credit display. |
| **59** | **Ways to Win Display (All Ways / Megaways)** | Static "All Ways" text label. | Dynamic Ways counter reflecting the active ways for that spin. | **Follow Refer** | Emit dynamic ways updates via `UPDATE_MEGAWAY`. |
| **60** | **Button Lockout During Active Spin** | Only Turbo button remains interactive while reels are spinning. | Player can open History, Settings, and Rules; only Bet +/- buttons are disabled. | **Follow Refer** | Allow non-gameplay menu navigation during active spins. |
"""

with open(f"{target_dir}/05_matrix_paylines_and_payouts.md", "w", encoding="utf-8") as f:
    f.write(sec05)

# 7. 06_demo_mode_vs_real_mode.md
sec06 = """---
id: "transfer-ark:business_mapping:cocos_vs_pixijs:06_demo_mode_vs_real_mode"
title: "Business Specification 06: Demo Mode (Trial) vs Real Money Mode"
category: "business_mapping"
game_ids: ["g9666", "all"]
sdk_modules: ["GameModeDirectorModule", "SlotGameSettings", "UIManagerModule"]
tags: ["demo_mode", "trial_mode", "real_mode", "mode_switch", "auto_spin_demo"]
created_at: "2026-08-25"
author: "ARK Studio Slot Engineering & QA Team"
---

# 6. 🎮 Demo Mode (Trial) vs Real Money Mode

---

## 6.1 Detailed Discrepancy & Specification Table

| #No | Location / Feature | ARK Studio Behavior (Cocos Creator) | Refer Game Behavior (Pixi.js) | Final Decision | Technical Notes & Bug References |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **16** | **Demo Mode Button Placement** | Demo Mode button mounted directly on the primary Action Panel. | Demo Mode button placed inside Rules/Paytable dialog (`?`). | **Follow ARK** | Action Panel placement provides faster mode accessibility. |
| **17** | **Auto Spin on Real Money Prompt** | If Real Money prompt appears during Demo Auto Spin and user chooses "Continue Demo", Auto Spin continues. | Choosing "Continue Demo" **cancels Auto Spin** and returns game to Idle state. | **Follow Refer** | Stop Auto Spin upon dialog dismissal to require deliberate user action. |
| **18** | **Switching from Demo to Real Money** | Transitions silently without notice, reloading game directly into Real Money mode. | Displays modal notice: *"Trial mode ended. Switching to Real Money mode"*. | **Follow Refer** | **Essential UX**: Retain warning popup to prevent accidental real money bets. |
| **19** | **Real Money Switch During Free Game** | Mode switch blocked when playing Free Game or during active session. | Player can be forced/allowed to switch to Real Money mode even during Demo Free Game. | **Follow Refer** | Allow graceful mode transition upon user command. |
"""

with open(f"{target_dir}/06_demo_mode_vs_real_mode.md", "w", encoding="utf-8") as f:
    f.write(sec06)

# 8. 07_splash_loading_and_display_viewport.md
sec07 = """---
id: "transfer-ark:business_mapping:cocos_vs_pixijs:07_splash_loading_viewport"
title: "Business Specification 07: Splash, Loading Screen & Display Viewport"
category: "business_mapping"
game_ids: ["g9666", "all"]
sdk_modules: ["UIManagerModule", "GameConfig", "BasePortrait"]
tags: ["splash", "loading_bar", "tap_to_start", "orientation", "landscape", "fullscreen"]
created_at: "2026-08-25"
author: "ARK Studio Slot Engineering & QA Team"
---

# 7. 📱 Splash, Loading Screen & Display Viewport

---

## 7.1 Detailed Discrepancy & Specification Table

| #No | Location / Feature | ARK Studio Behavior (Cocos Creator) | Refer Game Behavior (Pixi.js) | Final Decision | Technical Notes & Bug References |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **21** | **Loading Label on Splash** | Displays animated "Loading..." text above progress bar. | No text label; progress bar only. | **Follow ARK** | Retain animated Loading text for clear asset loading feedback. |
| **22** | **Automatic Entry After Loading** | Displays Splash screen upon 100% load and waits for player tap. | Automatically transitions into the Action Panel upon 100% load without extra tap. | **Follow Refer** | Auto-enter main game to eliminate unnecessary user friction. |
| **23** | **"Tap to Start" Button** | Displays animated "TAP TO START" button with scaling pulse. | Bypasses "Tap to Start"; enters game directly. | **Follow Refer** | Synchronized with #22 for immediate game launch. |
| **24** | **Pre-Ingame Feature Intro Screen** | Displays pre-ingame feature splash introducing game highlights. | No pre-ingame feature screen. | **Follow ARK** | Retain pre-ingame screen when introducing complex mechanics. |
| **25** | **Background Responsive Scaling** | Full responsive background adjusting to device resolution and desktop window resize. | No background (black backdrop); desktop resize causes black screen artifacts. | **Follow ARK** | Full-size responsive background layout eliminating black screen bugs. |
| **71** | **Browser Web App Favicon** | ARK games include custom web app favicon icon in browser tab. | No web icon provided. | **Follow ARK** | Retain standard brand favicon. |
| **72** | **Landscape / Portrait Orientation Support** | Displays rotation prompt when oriented incorrectly. | Enforces Landscape by default. Includes Android Fullscreen button and iOS swipe-up gesture. | **Follow Refer** | [Bug 86d4230c9](https://app.clickup.com/t/9008199668/86d4230c9)<br>Default Landscape lock with native fullscreen gestures. |
"""

with open(f"{target_dir}/07_splash_loading_and_display_viewport.md", "w", encoding="utf-8") as f:
    f.write(sec07)

print("All 8 modular English documents successfully generated!")
