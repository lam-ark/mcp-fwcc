---
id: "cc_slot_module:WalletModule:events:global_event_bus"
title: "WalletModule Global Event Bus Specification"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "events", "global_bus"]
---

# 🌐 WalletModule Global Event Bus Specification

---

## 1. Global Events Subscribed

| Event Constant | Payload | Source | Purpose |
| :--- | :--- | :--- | :--- |
| `GameUIEvents.WALLET.PAUSE_WALLET` | None | `GameModeDirectorModule` | Pauses wallet tween when cutscene begins. |
| `GameUIEvents.WALLET.RESUME_WALLET` | None | `GameModeDirectorModule` | Resumes and finalizes wallet tween after cutscene. |
| `GameUIEvents.WALLET.SYNC_WALLET` | None | `GameLogic` | Triggers immediate sync during reconnect hydration. |
