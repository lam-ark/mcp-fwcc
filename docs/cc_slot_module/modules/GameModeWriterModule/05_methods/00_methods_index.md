---
id: "cc_slot_module:GameModeWriterModule:methods:index"
title: "GameModeWriterModule Methods Index"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "methods", "index"]
---

# 📋 GameModeWriterModule Methods Index

---

## 1. Declared Generator Methods Summary Table (12 Methods)

| Method Signature | Visibility | Return Type | Purpose |
| :--- | :--- | :--- | :--- |
| **[`onLoadExtend(): void`](./onLoadExtend.md)** | `public` | `void` | Mounts writer instance to node: `this.node["writer"] = this`. |
| **[`makeScriptResumeGameMode(): Object[]`](./makeScriptResumeGameMode.md)** | `public` | `Object[]` | Virtual hook for reconnection and mode hydration script queue. |
| **[`makeScriptStartSpinning(): Object[]`](./makeScriptStartSpinning.md)** | `public` | `Object[]` | Returns `[{ command: "_startSpinningTable" }]`. |
| **[`makeScriptPreStopSpinningTable(): Object[]`](./makeScriptPreStopSpinningTable.md)** | `public` | `Object[]` | Returns `[{ command: "_syncJackpot" }, { command: "_playSureWinEffect" }, { command: "_playPreStopSpinningEffect" }]`. |
| **[`makeScriptPlayPreStopSpinningEffect(): Object[]`](./makeScriptPlayPreStopSpinningEffect.md)** | `public` | `Object[]` | Virtual hook for custom near-win anticipation effects. |
| **[`makeScriptStopSpinningTable(): Object[]`](./makeScriptStopSpinningTable.md)** | `public` | `Object[]` | Returns `[{ command: "_stopSpinningTable" }, { command: "_setUpPaylines" }]`. |
| **[`makeScriptStartRespinning(): Object[]`](./makeScriptStartRespinning.md)** | `public` | `Object[]` | Returns `[{ command: "_beforeReSpinStart" }, { command: "_showStartRespinEffect" }, { command: "_startRespinningTable" }]`. |
| **[`makeScriptStopRespinningTable(): Object[]`](./makeScriptStopRespinningTable.md)** | `public` | `Object[]` | Returns `[{ command: "_showRespinResultEntry" }, { command: "_stopRespinningTable" }, { command: "_setUpPaylines" }, { command: "_showRespinResultFinal" }]`. |
| **[`makeScriptShowResultEntry(): Object[]`](./makeScriptShowResultEntry.md)** | `public` | `Object[]` | Returns `[{ command: "_playJackpotWin" }, { command: "_showTransformSymbol" }, { command: "_showResultEntry" }]`. |
| **[`makeScriptShowResultFinal(): Object[]`](./makeScriptShowResultFinal.md)** | `public` | `Object[]` | Virtual hook for final round actions, cutscenes, and win summaries. |
| **[`makeScriptTransitionGameMode(): Object[]`](./makeScriptTransitionGameMode.md)** | `public` | `Object[]` | Returns `[{ command: "_showTransitionGameMode" }]`. |
| **[`makeScriptStopCurrentGameMode(): Object[]`](./makeScriptStopCurrentGameMode.md)** | `public` | `Object[]` | Returns `[{ command: "_stopCurrentGameMode" }, { command: "_forceResetGameMode" }]`. |
