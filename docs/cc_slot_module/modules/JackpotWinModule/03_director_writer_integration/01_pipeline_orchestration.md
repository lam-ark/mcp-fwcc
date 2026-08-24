---
id: "cc_slot_module:JackpotWinModule:director_writer:pipeline_orchestration"
title: "JackpotWinModule Writer Pipeline Integration"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 JackpotWinModule Writer Pipeline Integration

---

## 1. Writer Command Trigger

Dispatched upon jackpot payout resolution:
```typescript
script.push({
    command: "SHOW_JACKPOT_WIN",
    data: { jackpotType: "GRAND", jackpotValue: 50000000 }
});
```
`ScriptExecutor` dispatches `PLAY_CUTSCENE` targeting `CUTSCENE_TYPE_ENUM.JACKPOT_WIN`.
