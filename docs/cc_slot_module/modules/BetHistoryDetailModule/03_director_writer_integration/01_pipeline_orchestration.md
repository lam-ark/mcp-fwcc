---
id: "cc_slot_module:BetHistoryDetailModule:director_writer:pipeline_orchestration"
title: "BetHistoryDetailModule Pipeline Orchestration"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎻 BetHistoryDetailModule Pipeline Orchestration

---

## 1. Command Routing

`BetHistoryDetailModule` communicates via `GameLogicUIEvents`:
- `INIT_BET_DETAIL`: Dispatched when entering a specific round replay.
- `BET_DETAIL_NEXT_PAGE` / `BET_DETAIL_PREVIOUS_PAGE`: Traverses sequential spin step array.
- `REQUEST_BET_DETAIL_DATA_PAGE`: Direct index jumping from tab selection.
- `CLOSE_BET_HISTORY_DETAIL_PANEL`: Closes detail panel and restores session list.
