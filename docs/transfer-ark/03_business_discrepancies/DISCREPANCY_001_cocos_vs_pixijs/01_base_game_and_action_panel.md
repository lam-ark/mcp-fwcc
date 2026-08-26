---
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
| **4** | **Auto Spin Trigger Mechanism** | Dedicated Auto Spin popup: Open popup -> select spin count -> tap Start. | No Auto Spin popup; **Long-press (hold) the Spin button** to trigger auto spin. | **Follow Refer** | [Bug 86d41af10](https://app.clickup.com/t/9008199668/86d41af10)<br>Configured via `SlotButtonNormal.holdToAutoSpin = true` (0.7s hold duration). |
| **7** | **Max Win Cap Mechanism** | Game includes Max Win threshold cap. | Game does not feature Max Win cap. | **Follow Refer** | Disable artificial Max Win restrictions if not present in Reference Game. |
| **31** | **Spin Button Visual States** | 5 states: `Idle`, `Active`, `Disable`, `F2R Effect`, `Locked during Auto Spin`. | 3 states only: `Idle`, `Spin`, `Locked during Auto Spin`. | **Follow Refer** | Simplify Spin Button state machine to match Reference Game aesthetics. |
| **55** | **Cancelling Auto Spin** | When clicked to cancel, Spin button instantly switches from Auto UI to Normal UI. | When clicked to cancel, button keeps Auto UI until current spin concludes, then reverts to Normal UI. | **Follow Refer** | Ensure in-flight spin finishes cleanly before restoring default UI state. |
| **56** | **Wallet Balance Tool Updates** | Balance changes via developer tools apply immediately. | Developer tool wallet updates apply after page reload or session end. | **Follow Refer** | Defer wallet adjustments until the active spin session concludes. |
| **57** | **Insufficient Balance Handling** | Tapping spin with insufficient funds displays error popup immediately; reels do not spin. | Tapping spin with insufficient funds plays a short reel spin motion then displays error popup. | **Follow Refer** | Maintain a single total bet value on the Action Panel. |
| **-** | **Idle Timeout Popup** | Displays idle timeout popup after 30 minutes of inactivity. | No idle popup is displayed. | **Follow Refer** | Suppress intrusive idle popups during base game. |
