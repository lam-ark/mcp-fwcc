---
id: "cc_slot_module:SlotGameSettings:properties:runtime_state_variables"
title: "SlotGameSettings Properties & Accessors Deep Specification"
category: "cc_slot_module"
tags: ["SlotGameSettings", "slot_game_settings", "cc_slot_module", "properties", "runtime_state", "getters_setters", "turbo", "fast_to_result"]
---

# 💾 SlotGameSettings Properties & Accessors Deep Specification

## 1. Comprehensive State & Accessors Table

| Property / Getter | Type | Default Value | Mutated By | Read By | Purpose & Execution Impact |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`isTurboActive`** | `boolean` | `false` | `TurboButton` | `SlotTableModule`, `PaylineInfoModule` | When `true`, reel spinning deceleration curves use compressed durations, and payline animations run at 2x speed. |
| **`isFastToResult`** | `boolean` (readonly) | `false` | Computed: `_gameSpeed === 3` | `ScriptExecutor`, `BaseGameDirector`, `StackWildModule` | Evaluates whether current game speed is `GAME_SPEED_ENUM.INSTANTLY`. When `true`, all intermediate visual delays, rolling coin numbers, and near-win teasers are skipped immediately. |
| **`gameSpeed`** | `number` (`GAME_SPEED_ENUM`) | `NORMAL` (`1`) | `TurboButtonSwitcher` | `ScriptExecutor` | Numerical speed mode: `NORMAL: 1`, `TURBO: 2`, `INSTANTLY: 3`. |
| **`currentGameState`**| `number` (`GAME_STATE_ENUM`) | `IDLE` (`0`) | `GameDirector`, `BaseGameDirector` | `SlotButtonNormal`, `TurboButton` | State machine phase: `IDLE: 0`, `SPINNING: 1`, `WIN_EFFECT: 2`, `TRANSITION: 3`. Dictates whether user input buttons are clickable or locked. |
| **`isAutoSpin`** | `boolean` | `false` | `AutoSpinPanel`, `ConfirmAutoSpinPopup` | `GameDirector`, `SlotButtonNormal` | When `true`, the game loop automatically requests a new spin upon completing round settlement without waiting for player click. |
| **`isTrialMode`** | `boolean` | `false` | `TrialModeButton`, `BackToRealModeButton` | `WalletModule`, `BetModule` | Distinguishes virtual play sessions from real money wagering. |
| **`isJoinGameSuccess`**| `boolean` | `false` | `GameInit.setUpGame()` | `SlotButtonNormal` | Guards spin inputs until WebSocket authentication and session initialization have completed. |
| **`bigWinConfig`** | `number[] \| null` | `null` | Server packet init | `WinEffectModule` | Overrides static win level ratio cutoffs if dynamic thresholds are received from the server. |

---

## 2. Complete Un-truncated Source Code

```typescript
import { GAME_SPEED_ENUM, GAME_STATE_ENUM } from "../Components/Common/SlotEnum";

export class SlotGameSettings {
    private _bigWinConfig: number[] = null;
    private _isTurboActive: boolean = false;
    private _isAutoSpin: boolean = false;
    private _isTrialMode: boolean = false;
    private _gameSpeed: number = GAME_SPEED_ENUM.NORMAL;
    private _currentGameState: number = GAME_STATE_ENUM.IDLE;
    private _isJoinGameSuccess: boolean = false;

    public get isJoinGameSuccess(): boolean {
        return this._isJoinGameSuccess;
    }
    
    public set isJoinGameSuccess(isJoinGameSuccess: boolean) {
        this._isJoinGameSuccess = isJoinGameSuccess;
    }

    public get bigWinConfig(): number[] {
        return this._bigWinConfig;
    }
    
    public set bigWinConfig(bigWinConfig) {
        this._bigWinConfig = bigWinConfig;
    }

    public get isTurboActive(): boolean {
        return this._isTurboActive;
    }
    
    public set isTurboActive(isTurboActive) {
        this._isTurboActive = isTurboActive;
    }

    public get isFastToResult(): boolean {
        return this._gameSpeed === GAME_SPEED_ENUM.INSTANTLY;
    }
    
    public get isTrialMode(): boolean {
        return this._isTrialMode;
    }

    public set isTrialMode(isTrialMode) {
        this._isTrialMode = isTrialMode;
    }

    public get isAutoSpin(): boolean {
        return this._isAutoSpin;
    }

    public set isAutoSpin(isAutoSpin) {
        this._isAutoSpin = isAutoSpin;
    }

    public get gameSpeed(): number {
        return this._gameSpeed;
    }
    
    public set gameSpeed(gameSpeed) {
        this._gameSpeed = gameSpeed;
    }

    public get currentGameState(): number {
        return this._currentGameState;
    }

    public set currentGameState(state: number) {
        this._currentGameState = state;
    }
}
```
