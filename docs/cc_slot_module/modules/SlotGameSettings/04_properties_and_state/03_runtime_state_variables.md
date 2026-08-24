---
id: "cc_slot_module:SlotGameSettings:properties:runtime_state_variables"
title: "SlotGameSettings Properties & Accessors Specification"
category: "cc_slot_module"
tags: ["SlotGameSettings", "slot_game_settings", "cc_slot_module", "properties", "runtime_state", "getters_setters"]
---

# 💾 SlotGameSettings Properties & Accessors Specification

## 1. Properties & Getters Reference Table

| Property / Getter | Type | Default Value | Mutated By | Purpose & Downstream Readers |
| :--- | :--- | :--- | :--- | :--- |
| **`isTurboActive`** | `boolean` | `false` | `TurboButton` | Quick-stop reel spin mode flag. |
| **`isFastToResult`** | `boolean` (readonly) | `false` | Computed | Evaluates `this._gameSpeed === GAME_SPEED_ENUM.INSTANTLY`. If true, bypasses reel spin tweens. |
| **`isAutoSpin`** | `boolean` | `false` | `AutoSpinPanel` | Active auto-spin continuous trigger flag. |
| **`isTrialMode`** | `boolean` | `false` | `TrialModeButton` | Active virtual play session flag. |
| **`gameSpeed`** | `number` | `GAME_SPEED_ENUM.NORMAL` (`1`) | `TurboButtonSwitcher` | Active speed mode (`NORMAL`, `TURBO`, `INSTANTLY`). |
| **`currentGameState`**| `number` | `GAME_STATE_ENUM.IDLE` | `GameDirector` | State machine phase (`IDLE`, `SPINNING`, `WIN_EFFECT`, `TRANSITION`). |
| **`isJoinGameSuccess`**| `boolean` | `false` | `GameInit.setUpGame()` | True when server handshake and socket authorization succeeds. |
