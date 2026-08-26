---
id: "cc_slot_module:systems:popups_history_settings:system_dialogs"
title: "System Dialogs & Network Modals Subsystem"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "dialog_message", "jackpot_notice", "network_disconnect", "kick_alert"]
---

# 🚨 System Dialogs & Network Modals Subsystem

---

## 1. DialogMessageModule
Mounted at `Canvas/Director/DialogMessage`, this component displays non-dismissable system warnings:
- Socket disconnection alerts with Retry / Reconnect actions.
- Insufficient balance alerts with Deposit / Top-up redirection.
- Inactivity kick warnings.
- Dispatches `ON_ACTION_OK` or `ON_ACTION_CANCEL` events on button press.

---

## 2. JackpotWinNoticePopup
Broadcast dialog that pops up in real-time when another player in the room hits a Progressive Jackpot, animating congratulations banners without interrupting active reel spins.
