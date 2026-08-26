---
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
