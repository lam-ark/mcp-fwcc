---
id: "cc_slot_module:NormalGameWriterModule:methods:index"
title: "NormalGameWriterModule Methods Index"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "methods", "index"]
---

# 📋 NormalGameWriterModule Methods Index

---

## 1. Declared Generator Methods Summary Table

| Method Signature | Visibility | Return Type | Purpose |
| :--- | :--- | :--- | :--- |
| **[`makeScriptNormalSpinTrigger(): Object[]`](./makeScriptNormalSpinTrigger.md)** | `public` | `Object[]` | Builds 6-step pre-spin pipeline (`_beforeSpinStart`, `_syncPlaySessionData`, `_pauseWallet`, `_resetOnSpin`, `_clearWinAmount`, `_resetTable`). |
| **[`makeScriptStartSpinning(): Object[]`](./makeScriptStartSpinning.md)** | `public` | `Object[]` | Inherited from base, returns `[{ command: "_startSpinningTable" }]`. |
| **[`makeScriptStopSpinningTable(data?: any): Object[]`](./makeScriptStopSpinningTable.md)** | `public` | `Object[]` | Inherited from base, returns `[{ command: "_stopSpinningTable", data }, { command: "_setUpPaylines", data }]`. |
| **[`makeScriptPreResumeGameMode(): Object[]`](./makeScriptPreResumeGameMode.md)** | `public` | `Object[]` | Compiles `_pauseWallet`, `_resumeNormalTable`, `_setUpPaylines`, `_resumeWinAmount`. |
| **[`makeScriptResumeNormalGame(): Object[]`](./makeScriptResumeNormalGame.md)** | `public` | `Object[]` | Returns `[{ command: "_showAllPaylines" }]`. |
| **[`makeScriptSyncPlaySessionData(): Object[]`](./makeScriptSyncPlaySessionData.md)** | `public` | `Object[]` | Compiles `_syncWinAmountPS` and `_syncWallet`. |
| **[`makeScriptShowResultFinal(): Object[]`](./makeScriptShowResultFinal.md)** | `public` | `Object[]` | Returns `[{ command: "_resumeWallet" }]`. |
