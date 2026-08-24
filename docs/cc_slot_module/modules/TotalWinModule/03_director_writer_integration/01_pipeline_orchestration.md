---
id: "cc_slot_module:TotalWinModule:director_writer:pipeline_orchestration"
title: "TotalWinModule Writer Pipeline Integration"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 TotalWinModule Writer Pipeline Integration

---

## 1. Writer Command Trigger

Dispatched at the conclusion of free spins or mini-games:
```typescript
script.push({
    command: "SHOW_TOTAL_WIN",
    data: { winAmount: accumulatedFreeSpinWin }
});
```
`ScriptExecutor` dispatches `PLAY_CUTSCENE` targeting `CUTSCENE_TYPE_ENUM.TOTAL_WIN`.
