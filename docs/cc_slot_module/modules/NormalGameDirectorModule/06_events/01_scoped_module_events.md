---
id: "cc_slot_module:NormalGameDirectorModule:events:scoped_module_events"
title: "NormalGameDirectorModule Scoped Module Events"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "events", "scoped_events"]
---

# 📡 NormalGameDirectorModule Scoped Module Events

## 1. Scoped Events (`this.moduleEvent`)

| Event Name | Direction | Payload | Impact |
| :--- | :--- | :--- | :--- |
| **`TABLE_START_SPIN`** | Emitted | None | Directs `SlotTableModule` to spin reels continuously. |
| **`TABLE_STOP_SPIN`** | Emitted | `matrix: string[]` | Directs `SlotTableModule` to stop reels with server matrix. |
| **`TABLE_START_RESPIN`** | Emitted | `data: any` | Triggers cascade explosion animation on winning symbols. |
| **`TABLE_STOP_RESPIN`** | Emitted | `data: any` | Drops new cascading symbols into emptied grid slots. |
| **`SETUP_PAYLINES`** | Emitted | `paylines: any[]` | Prepares win lines on `SlotTablePaylineData`. |
| **`CLEAR_PAYLINES`** | Emitted | None | Clears winning highlights and symbol animations. |
