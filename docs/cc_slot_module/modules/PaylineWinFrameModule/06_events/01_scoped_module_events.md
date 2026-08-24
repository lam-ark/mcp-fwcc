---
id: "cc_slot_module:PaylineWinFrameModule:events:scoped_module_events"
title: "PaylineWinFrameModule Scoped & Internal Bus Events"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "events", "scoped_events"]
---

# 📡 PaylineWinFrameModule Scoped & Internal Bus Events

---

## 1. Internal `payLineEmitter` Events

| Event Name | Direction | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| **`SYMBOL_PLAY_ANIMATION_WIN`** | Listens To | `{ symbol, duration }` | Triggers border animation for symbol coordinates. |
| **`PAYLINE_STOP_ALL`** | Listens To | None | Hides active border frames. |
| **`PAYLINE_CLEAR`** | Listens To | None | Recycles all frame nodes back into `winFramePool`. |
