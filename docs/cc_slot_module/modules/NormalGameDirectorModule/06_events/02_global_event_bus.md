---
id: "cc_slot_module:NormalGameDirectorModule:events:global_event_bus"
title: "NormalGameDirectorModule Global Event Bus Integration"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "events", "global_event_bus"]
---

# 🌐 NormalGameDirectorModule Global Event Bus Integration

## 1. Global Events (`this.eventManager`)

| Event Topic | Direction | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| **`GameUIEvents.GAME_MODE.JOIN_GAME_SUCCESS`** | Listens To | `data: any` | Triggers `onJoinGameSuccess()` to unlock spin button. |
| **`GameUIEvents.GAME_MODE.SWITCH_GAME_MODE`** | Emits | `mode: number` | Requests transition to Free Game or Bonus Game. |
| **`GameUIEvents.WALLET.PAUSE_WALLET`** | Emits | None | Freezes wallet during spin to prevent balance desync. |
| **`GameUIEvents.WALLET.RESUME_WALLET`** | Emits | None | Restores wallet update listeners upon round completion. |
