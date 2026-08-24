---
id: "cc_slot_module:SlotGameSettings:game_flow:spin_phase_breakdown"
title: "SlotGameSettings Spin Phase State Transition Breakdown"
category: "cc_slot_module"
tags: ["SlotGameSettings", "slot_game_settings", "cc_slot_module", "game_flow", "spin_phase", "currentGameState", "GAME_STATE_ENUM"]
---

# 🔄 SlotGameSettings Spin Phase State Transition Breakdown

## 1. Five Core State Machine Phases (`GAME_STATE_ENUM`)

| State Value | Enum Token | Active Systems | UI Interaction Impact |
| :--- | :--- | :--- | :--- |
| `0` | **`IDLE`** | `BetModule`, `SlotButtonNormal` | All interactive buttons enabled. Ready for wager change or new spin click. |
| `1` | **`RESUME`** | `GameInit`, `FreeGameDirector` | Player reconnected into an active feature round. Inputs locked until session loaded. |
| `2` | **`WAIT_FOR_RESULT`** | WebSocket, `SlotTableModule` | Spin button transformed to spinning state. Reels accelerating in infinite loop. |
| `3` | **`RESULT_RECEIVED`** | `GameDataStore`, `SlotTableModule` | Server packet ingested. Column stop sequences calculated and triggered. |
| `4` | **`SHOW_RESULT`** | `PaylineModule`, `WinEffectModule`, `WalletModule` | Winning lines highlighted, particle effects displayed, wallet balance incremented. |
