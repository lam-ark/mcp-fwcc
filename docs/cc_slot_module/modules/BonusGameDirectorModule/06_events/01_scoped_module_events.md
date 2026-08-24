---
id: "cc_slot_module:BonusGameDirectorModule:events:scoped_module_events"
title: "BonusGameDirectorModule Scoped Module Events"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "events", "scoped_events"]
---

# 📡 BonusGameDirectorModule Scoped Module Events

## 1. Scoped Events (`this.moduleEvent`)

| Event Name | Direction | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| **`INIT_BONUS_GAME`** | Emitted | None | Triggers `BonusGameTableModule.initBoxes()`. |
| **`START_BONUS_GAME`** | Emitted | `betId: string` | Triggers `setBoxValues()` to load prize distribution. |
| **`AUTO_PLAY_BONUS_GAME`**| Emitted | None | Triggers `autoClick()` when timer expires. |
| **`OPEN_ITEM`** | Emitted | `selectedBox: number, bonusValue: any` | Opens single chest and shows score. |
| **`OPEN_FINAL_ITEM`** | Emitted | `selectedBox: number, bonusValue: any` | Opens final chest with completion callback. |
| **`OPEN_ALL_ITEMS`** | Emitted | `bonusGameMatrix: any` | Reveals remaining unopened chests dimmed. |
| **`BLOCK_BONUS_GAME`** | Emitted | None | Disables button clicks on all chests. |
| **`UNBLOCK_BONUS_GAME`**| Emitted | None | Enables button clicks on unopened chests. |
| **`RESET_BONUS_GAME`** | Emitted | None | Resets chest states back to idle. |
| **`CLICK_ITEM`** | Listens To (Node) | `SlotCustomEvent` | Intercepts player touch on chest item. |
