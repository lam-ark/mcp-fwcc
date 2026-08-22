# SlotGameSettings

> **Source Path**: `assets/cc-common/cc-slot-module/Core/SlotGameSettings.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`SlotGameSettings`**

## Key Methods
- `isJoinGameSuccess(): boolean`
- `bigWinConfig(): number[]`
- `isTurboActive(): boolean`
- `isFastToResult(): boolean`
- `isTrialMode(): boolean`
- `isAutoSpin(): boolean`
- `gameSpeed(): number`
- `currentGameState(): number`

## Source Implementation
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

    public get bigWinConfig() : number[] {
        return this._bigWinConfig;
    }
    
    public set bigWinConfig(bigWinConfig) {
        this._bigWinConfig = bigWinConfig;
    }

    public get isTurboActive() : boolean {
        return this._isTurboActive;
    }
    
    public set isTurboActive(isTurboActive) {
        this._isTurboActive = isTurboActive;
    }

    public get isFastToResult() : boolean {
        return this._gameSpeed === GAME_SPEED_ENUM.INSTANTLY;
    }
    
    public get isTrialMode() : boolean {
        return this._isTrialMode;
    }

    public set isTrialMode(isTrialMode) {
        this._isTrialMode = isTrialMode;
    }

    public get isAutoSpin() : boolean {
        return this._isAutoSpin;
    }

    public set isAutoSpin(isAutoSpin) {
        this._isAutoSpin = isAutoSpin;
    }

    public get gameSpeed() : number {
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
