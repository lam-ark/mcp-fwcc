# SlotEnum

> **Source Path**: `assets/cc-common/cc-slot-module/Components/Common/SlotEnum.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`GameModeType`**
- **`TrialModeCurrency`**
- **`TrialModeData`**

## CC Properties
- `type`
- `rootNode`
- `type`
- `data`
- `type`
- `data`

## Source Implementation
```typescript
const { _decorator, Enum } = cc;
const { ccclass, property } = _decorator;

const { GAME_MODE, BUTTON_STATE, SPIN_BUTTON, CURRENCY_TYPE, RESPIN_SUB_STATE, CUTSCENE_TYPE, PAY_SYSTEM_TYPE, TUTORIAL_STATE, BONUS_GAME_TYPE } = eno;

/**
 * @description Includes Normal Game, Free Game, Bonus Game, Lightning Game, etc.
 * @note
 * FREE_GAME_1, FREE_GAME_2, FREE_GAME_3, FREE_GAME_4 when having free game option
 */
export const GAME_MODE_ENUM = Enum(GAME_MODE);

/**
 * @description Bonus game type:
 * TYPE_1: Bonus game with no next game mode (default),
 * TYPE_2: Bonus game with next game mode,
 */
export const BONUS_GAME_TYPE_ENUM = Enum(BONUS_GAME_TYPE);

/**
 * Button State Enum - State of buttons in the game
 */
export const BUTTON_STATE_ENUM = Enum(BUTTON_STATE);

/**
 * @description Spin Button State Enum, includes states like NORMAL, SPINNING, DISABLED
 */
export const SPIN_BUTTON_STATE_ENUM = Enum(SPIN_BUTTON.BUTTON_STATE);

/**
 * @description Spin State Enum, includes states like NORMAL, AUTO, auto spin or not
 */
export const SPIN_STATE_ENUM = Enum(SPIN_BUTTON.SPIN_STATE);

/**
 * @description Currency Enum, includes VND, USD, THB
 */
export const CURRENCY_ENUM = Enum(CURRENCY_TYPE);

/**
 * @description Respin Sub State Enum, respin in Normal Game or Free Game
 */
export const RESPIN_SUB_STATE_ENUM = Enum(RESPIN_SUB_STATE);

/**
 * @description Cutscene Type Enum, includes different types of cutscenes
 */
export const CUTSCENE_TYPE_ENUM = Enum(CUTSCENE_TYPE);

/**
 * @description Pay System Type Enum - Defines how payouts are calculated (Payline, All Ways, Cluster, etc.)
 * @key ALLWAYS: Win always system - pays for any winning combination
 * @key LINES: Payline system - pays only on active paylines
 * @key CLUSTER: Cluster system - pays for adjacent symbol clusters
 * @key SCATTER_PAY: Scatter pay system - pays for same symbols	
 */
export const PAY_SYSTEM_TYPE_ENUM = Enum(PAY_SYSTEM_TYPE);

/**
 * @description Tutorial State Enum
 */
export const TUTORIAL_STATE_ENUM = Enum(TUTORIAL_STATE);

/**
 * @description combines game mode enum with a root node for UI management
 */
@ccclass("GameModeType")
export class GameModeType {
	@property({ type: GAME_MODE_ENUM })
	type = GAME_MODE_ENUM.NORMAL_GAME;

	@property(cc.Node)
	rootNode: cc.Node = null;
}

/**
 * @description Defines currency type and corresponding JSON data for trial mode
 */
@ccclass("TrialModeCurrency")
export class TrialModeCurrency {
	@property({ type: CURRENCY_ENUM })
	type = CURRENCY_ENUM.USD;

	@property(cc.JsonAsset)
	data: cc.JsonAsset = null;
}

/**
 * @description combines game mode data following currencies for trial mode
 */
@ccclass("TrialModeData")
export class TrialModeData {
	@property({ type: GAME_MODE_ENUM })
	type = GAME_MODE_ENUM.NORMAL_GAME;

	@property(TrialModeCurrency)
	data: TrialModeCurrency[] = [];
}

/**
 * @description defines jackpot levels from small to large: MINI, MINOR, MAJOR, GRAND
 */
export const JACKPOT_TYPE_ENUM = Enum({
	GRAND: 0,    // Grand jackpot
	MAJOR: 1,    // Major jackpot
	MINOR: 2,    // Minor jackpot
	MINI: 3,     // Mini jackpot
});

/**
 * @description UI Toast Enum, types of toast notifications in UI to players
 */
export const UI_TOAST_ENUM = Enum({
	TURBO_ON: "TURBO_ON",     // Enable turbo mode
	TURBO_OFF: "TURBO_OFF",   // Disable turbo mode
	MAX_BET: "MAX_BET",       // Reached maximum bet level
	MIN_BET: "MIN_BET",       // Reached minimum bet level
});

/**
 * Symbol Index Type - Type of symbol index
 * @description Defines special symbol types using negative numbers, normal symbols have index >= 0
 */
export const SymbolIndexType = {
	UNUSED: -1, // UNUSED, Not used (to hold slot or fake symbols).
	STICKY: -2, // STICKY, Symbols are sticky and will not be removed during the spin.
	// NORMAL, Symbols are displayed and processed normally, index >= 0.
	GIGABLOX: -3, //GIGABLOX Symbols
};

/**
 * Symbol Owner Type - Type of symbol owner
 * @description Defines who owns/manages the symbol in the game
 */
export const SymbolOwnerType = {
	NONE: 'NONE',
	SYMBOL_MANAGER: 'SYMBOL_MANAGER',

	PAYLINE: 'PAYLINE',
	REMOVED_SYMBOL: 'REMOVED_SYMBOL',
	PAYLINE_DISAPPEAR: 'PAYLINE_DISAPPEAR',
	TRANSFORM_SYMBOL: 'TRANSFORM_SYMBOL',
	REEL_SYMBOL: 'REEL_SYMBOL',
	CASCADE_SYMBOL: 'CASCADE_SYMBOL',
	EFFECT: 'EFFECT'
};

/**
 * Game Speed Enum - Game playing speed
 * @description Defines speed levels: normal, turbo, instantly
 */
export const GAME_SPEED_ENUM = Enum({
	NORMAL: 0,
	TURBO: 1,
	INSTANTLY: 2,
});

/**
 * Game State Enum - Overall game state
 * @description Defines states in the lifecycle of a spin
 */
export const GAME_STATE_ENUM = Enum({
	IDLE: 0,              // Idle state, waiting for player
	RESUME: 1,            // Resuming game when reload game
	WAIT_FOR_RESULT: 2,   // Waiting for result from server
	RESULT_RECEIVED: 3,   // Result received, processing
	SHOW_RESULT: 4,       // Showing result to player
});

/**
 * Respin Sub State History Enum - History of respin sub-states
 * @description Defines which game mode the respin belongs to (Normal or Free)
 */
export const RESPIN_SUB_STATE_HISOTY_ENUM = Enum({
	RESPIN_NORMAL_GAME: 81,  // Respin in Normal Game
	RESPIN_FREE_GAME: 82,    // Respin in Free Game
});

/**
 * Win Effect Level Enum - Level of win effect
 * @description Defines effect levels when winning: BIG, MEGA, SUPER
 */
export enum WinEffectLevelEnum {
    BIG = 0,
    MEGA = 1,
    SUPER = 2,
}

export const SPECIAL_SYMBOL_KEY = '__special_symbol';
```
