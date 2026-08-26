---
id: "cc_slot_module:systems:popups_history_settings:index"
title: "Popups, History, Settings & Dialogs System Architecture Index"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "popups", "bet_history", "settings", "info_panel", "dialog_message", "index"]
---

# 📜 Popups, History, Settings & Dialogs System Architecture Index

---

## 1. Subsystem Mission

The **Popups, History, Settings & Dialogs Subsystem** manages modal presentation, background dimming, touch isolation, multi-page paytable rulebooks, granular bet history round reconstruction, user audio/visual settings, and critical network alert dialogs.

```mermaid
graph TD
    GameLogic[GameLogic / Network] --> Dialog[DialogMessageModule]
    GameLogic --> JackpotNotice[JackpotWinNoticePopup]
    
    UI[UIManagerModule / Hamburger Menu] --> PopCtrl[PopupControllerModule]
    PopCtrl --> Mask[Modal Backdrop cc.BlockInputEvents]
    PopCtrl --> History[BetHistoryModule & BetHistoryDetailModule]
    PopCtrl --> JPHistory[JackpotHistoryModule]
    PopCtrl --> Setting[SettingPanel]
    PopCtrl --> Info[InfoPanel & Paytable]
```

---

## 2. Topic Breakdown & Navigation

1. **[`01_modal_queue_and_popup_controller.md`](./01_modal_queue_and_popup_controller.md)**
   - Modal management via `PopupControllerModule`, `BaseUIPopup` base class, show/hide easing animations, and modal stack queueing.
2. **[`02_bet_and_jackpot_history_subsystem.md`](./02_bet_and_jackpot_history_subsystem.md)**
   - Paginated spin history lists, matrix snapshot parsing, payout breakdowns, and recent jackpot winner displays.
3. **[`03_settings_and_paytable_info_panels.md`](./03_settings_and_paytable_info_panels.md)**
   - Volume sliders, Turbo switches, language selectors, multi-page `PageViewIndicator` paytable rulebooks with dynamic bet scaling.
4. **[`04_system_dialogs_and_network_modals.md`](./04_system_dialogs_and_network_modals.md)**
   - System error dialogs (`DialogMessageModule`), confirmation action dispatching (`ON_ACTION_OK`), and global jackpot win broadcast dialogs.
