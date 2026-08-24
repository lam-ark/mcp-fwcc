---
id: "cc_slot_module:ExtraBetModule:director_writer:pipeline_orchestration"
title: "ExtraBetModule Pipeline & Backend Synchronization"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 ExtraBetModule Pipeline & Backend Synchronization

---

## 1. Event Orchestration

Dispatches events modifying feature wager multipliers:
```typescript
this.gameLogic.emit(GameLogicUIEvents.INCREASE_EXTRA_BET);
this.gameLogic.emit(GameLogicUIEvents.DECREASE_EXTRA_BET);
```
Server responds with adjusted paytable weights and updated `extraBetValue`.
