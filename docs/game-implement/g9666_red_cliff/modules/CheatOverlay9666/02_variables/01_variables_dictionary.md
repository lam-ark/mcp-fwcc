---
id: "game-implement:9666:module:CheatOverlay9666:variables"
title: "CheatOverlay9666 Exhaustive Variables & Fields Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "CheatOverlay9666", "cheat_overlay9666", "variables", "fields", "properties"]
---

# 📋 `CheatOverlay9666` Exhaustive Variables & Fields Dictionary

---

## 1. Declared Variables & Properties Table

| Line # | Variable Name | Scope | Type | Default / Decorator | Technical Purpose & Invariant |
| :---: | :--- | :---: | :--- | :--- | :--- |
| **106** | `root` | `private` | `HTMLDivElement` | `undefined` | Runtime state tracking `root` in `CheatOverlay9666`. |
| **107** | `panel` | `private` | `HTMLDivElement` | `undefined` | Runtime state tracking `panel` in `CheatOverlay9666`. |
| **108** | `scenarioSelect` | `private` | `HTMLSelectElement` | `undefined` | Runtime state tracking `scenarioSelect` in `CheatOverlay9666`. |
| **109** | `scenarioName` | `private` | `HTMLInputElement` | `undefined` | Runtime state tracking `scenarioName` in `CheatOverlay9666`. |
| **110** | `stepsContainer` | `private` | `HTMLDivElement` | `undefined` | Runtime state tracking `stepsContainer` in `CheatOverlay9666`. |
| **111** | `statusText` | `private` | `HTMLSpanElement` | `undefined` | Runtime state tracking `statusText` in `CheatOverlay9666`. |
| **112** | `stepText` | `private` | `HTMLSpanElement` | `undefined` | Runtime state tracking `stepText` in `CheatOverlay9666`. |
| **113** | `contextText` | `private` | `HTMLDivElement` | `undefined` | Runtime state tracking `contextText` in `CheatOverlay9666`. |
| **114** | `logBox` | `private` | `HTMLDivElement` | `undefined` | Runtime state tracking `logBox` in `CheatOverlay9666`. |
| **115** | `fileInput` | `private` | `HTMLInputElement` | `undefined` | Runtime state tracking `fileInput` in `CheatOverlay9666`. |
| **116** | `picker` | `private` | `HTMLDivElement` | `undefined` | Runtime state tracking `picker` in `CheatOverlay9666`. |
| **117** | `pickerList` | `private` | `HTMLDivElement` | `undefined` | Runtime state tracking `pickerList` in `CheatOverlay9666`. |
| **119** | `scenarios` | `private` | `CheatScenario9666[]` | `[]` | Runtime state tracking `scenarios` in `CheatOverlay9666`. |
| **125** | `gameDirector` | `private` | `any` | `null` | Runtime state tracking `gameDirector` in `CheatOverlay9666`. |
| **126** | `gameState` | `private` | `any` | `null` | Runtime state tracking `gameState` in `CheatOverlay9666`. |
| **129** | `debugRun` | `private` | `any` | `null` | Runtime state tracking `debugRun` in `CheatOverlay9666`. |
| **133** | `debugRuntime` | `private` | `CheatDebugRuntime9666` | `undefined` | Runtime state tracking `debugRuntime` in `CheatOverlay9666`. |
| **134** | `environmentText` | `private` | `HTMLSpanElement` | `undefined` | Runtime state tracking `environmentText` in `CheatOverlay9666`. |
| **135** | `winLevelSelect` | `private` | `HTMLSelectElement` | `undefined` | Runtime state tracking `winLevelSelect` in `CheatOverlay9666`. |
| **136** | `debugAmountInput` | `private` | `HTMLInputElement` | `undefined` | Runtime state tracking `debugAmountInput` in `CheatOverlay9666`. |

---

## 2. State Mutation Guardrails

All variables in `CheatOverlay9666` are initialized during instantiation (`onLoadExtend` / `initExtend`) and reset across spins (`RESET_ON_SPIN` / `BEFORE_RESET_TABLE`). Direct external mutation is guarded to ensure thread and animation safety.
