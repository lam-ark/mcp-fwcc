---
id: "cc_slot_module:BonusGameItemModule:events:scoped_module_events"
title: "BonusGameItemModule Scoped Node Events"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "events", "node_events"]
---

# 📡 BonusGameItemModule Scoped Node Events

## 1. Node Events (`this.node.on` & `this.node.dispatchEvent`)

| Event Name | Direction | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| **`CLICK_ITEM`** | Dispatched (Bubbling) | `SlotCustomEvent({ itemId, isAutoTrigger })` | Bubbles up to Director on tap. |
| **`INIT`** | Listens To | `itemId: number` | Triggers `init()`. |
| **`BOX_OPEN`** | Listens To | `value: number, callback?: Function` | Triggers `playAnimOpen()`. |
| **`DIM`** | Listens To | None | Applies dimmed tint (`dim()`). |
| **`UNDIM`** | Listens To | None | Restores normal tint (`undim()`). |
| **`ENABLE_CLICK`**| Listens To | None | Enables button if unopened. |
| **`DISABLE_CLICK`**| Listens To | None | Disables button interactability. |
| **`BOX_RESET`** | Listens To | None | Resets UI and open flag. |
