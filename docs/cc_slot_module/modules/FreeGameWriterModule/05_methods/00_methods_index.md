---
id: "cc_slot_module:FreeGameWriterModule:methods:index"
title: "FreeGameWriterModule Methods Index"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "methods", "index"]
---

# 📋 FreeGameWriterModule Methods Index

---

## 1. Declared Generator Methods Summary Table

| Method Signature | Visibility | Return Type | Purpose |
| :--- | :--- | :--- | :--- |
| **[`makeScriptFreeSpinTrigger(): Object[]`](./makeScriptFreeSpinTrigger.md)** | `public` | `Object[]` | Builds 5-step pre-spin pipeline (`_beforeSpinStart`, `_syncPlaySessionData`, `_resetOnSpin`, `_resetTable`, `_decreaseFreeGameSpinTimes`). |
| **[`makeScriptShowResultFinal(): Object[]`](./makeScriptShowResultFinal.md)** | `public` | `Object[]` | Evaluates `freeGameRemain` to route to `getFreeGameRemainScript()` or `getFreeGameEndScript()`. |
| **[`getFreeGameRemainScript(): Object[]`](./getFreeGameRemainScript.md)** | `public` | `Object[]` | Returns `[{ command: "_updateSpinTimes", data: freeGameRemain }]`. |
| **[`getFreeGameEndScript(): Object[]`](./getFreeGameEndScript.md)** | `public` | `Object[]` | Returns `[{ command: "_showUnskippedCutscene", data: { cutsceneType: TOTAL_WIN } }, { command: "_gameExit" }]`. |
| **[`makeScriptResumeGameMode(): Object[]`](./makeScriptResumeGameMode.md)** | `public` | `Object[]` | Returns `[{ command: "_resumeFreeTable" }, { command: "_resumeWinAmount" }]`. |
| **[`makeScriptSyncPlaySessionData(): Object[]`](./makeScriptSyncPlaySessionData.md)** | `public` | `Object[]` | Returns `[{ command: "_syncWinAmountPS" }]`. |
