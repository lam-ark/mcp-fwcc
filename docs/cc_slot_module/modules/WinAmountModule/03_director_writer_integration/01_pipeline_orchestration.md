---
id: "cc_slot_module:WinAmountModule:director_writer:pipeline_orchestration"
title: "WinAmountModule Pipeline & Script Execution"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 WinAmountModule Pipeline & Script Execution

---

## 1. Async Pipeline Integration

`WinAmountWriter` issues command batches that execute sequentially:
```typescript
await this.eventManager.emit(GameUIEvents.WIN_AMOUNT.UPDATE_WIN_AMOUNT, {
    winAmount: currentWin,
    time: rollTime,
    winLevel: level
});
```
When player presses the spin button or touches the screen, `GameModeDirectorModule` dispatches `FAST_UPDATE_WIN_AMOUNT` to instantly accelerate the tween.
