---
id: "cc_slot_module:GameModeWriterModule:methods:index"
title: "GameModeWriterModule Methods Index"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "methods", "index"]
---

# 📋 GameModeWriterModule Methods Index

---

## 1. Declared Generator Methods Summary Table

| Method Signature | Visibility | Return Type | Purpose |
| :--- | :--- | :--- | :--- |
| **[`makeScriptStartSpinning(): Object[]`](./makeScriptStartSpinning.md)** | `public` | `Object[]` | Returns `[{ command: "_startSpinningTable" }]`. |
| **[`makeScriptStopSpinningTable(): Object[]`](./makeScriptStopSpinningTable.md)** | `public` | `Object[]` | Returns `[{ command: "_stopSpinningTable" }, { command: "_setUpPaylines" }]`. |
| **[`makeScriptPreStopSpinningTable(): Object[]`](./makeScriptPreStopSpinningTable.md)** | `public` | `Object[]` | Returns `[{ command: "_syncJackpot" }, { command: "_playSureWinEffect" }, { command: "_playPreStopSpinningEffect" }]`. |
| **[`makeScriptStartRespinning(): Object[]`](./makeScriptStartRespinning.md)** | `public` | `Object[]` | Returns `[{ command: "_beforeReSpinStart" }, { command: "_showStartRespinEffect" }, { command: "_startRespinningTable" }]`. |
| **[`makeScriptStopRespinningTable(): Object[]`](./makeScriptStopRespinningTable.md)** | `public` | `Object[]` | Returns `[{ command: "_showRespinResultEntry" }, { command: "_stopRespinningTable" }, { command: "_setUpPaylines" }, { command: "_showRespinResultFinal" }]`. |
| **[`makeScriptShowResultEntry(): Object[]`](./makeScriptShowResultEntry.md)** | `public` | `Object[]` | Returns `[{ command: "_playJackpotWin" }, { command: "_showResultEntry" }, { command: "_showTransitionGameMode" }]`. |
| **[`makeScriptTransitionGameMode(): Object[]`](./makeScriptTransitionGameMode.md)** | `public` | `Object[]` | Returns `[{ command: "_showTransitionGameMode" }]`. |
| **[`makeScriptStopCurrentGameMode(): Object[]`](./makeScriptStopCurrentGameMode.md)** | `public` | `Object[]` | Returns `[{ command: "_stopCurrentGameMode" }, { command: "_forceResetGameMode" }]`. |
