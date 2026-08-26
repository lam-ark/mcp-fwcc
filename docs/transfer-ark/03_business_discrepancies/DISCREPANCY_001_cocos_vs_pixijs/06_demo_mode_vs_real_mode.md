---
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
