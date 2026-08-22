# GameConfig

> **Source Path**: `assets/cc-common/cc-slot-module/Core/GameConfig.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`GameConfig`** extends `Component`

## Key Methods
- `Example(): *  rate < 1 => level 1`
- `Example(): *  level 1 => 0s, level 2 => 0s, level 3 => 4s, level 4 => 6s`
- `Example(): *  level 1 => 1s, level 2 => 2s, level 3 => 4s, level 4 => 6s`

## Source Implementation
```typescript
const { _decorator, Component } = cc;
import { BONUS_GAME_TYPE_ENUM, PAY_SYSTEM_TYPE_ENUM } from "../Components/Common/SlotEnum";
import { GameText } from "./GameText";
const { ccclass } = _decorator;
/**
 * @description Contains all the configuration for the game
 */
@ccclass("GameConfig")
export class GameConfig extends Component {
	public GAME_ID: string = "9864";
	public JP_PREFIX_EVENT: string = "9864_";
	public PAY_SYSTEM = PAY_SYSTEM_TYPE_ENUM.ALLWAYS;
	public TOTAL_BET_CREDIT:number = 25; // win allways config
	public LINE_NUMBER = 25; // win per line config
	public STORAGE_KEY_BGM: string = "enableBackgroundMusic";
	public STORAGE_KEY_SFX: string = "enableSound";

	// default bet and extra bet config, betId = betKey + extraBetKey
	public DEFAULT_BET: string = "1";
	public DEFAULT_EXTRA_BET: string = "0";
	
	public DEFAULT_LANGUAGE: string = "EN";
	/**
	 * @description Override game text
	 * @example
	 * ```typescript
	 * public EXTEND_GAME_TEXT: any = {
	 * 	EN: {
	 * 		ACCOUNT_BLOCKED: "Your account has been blocked!!",
	 * 	}
	 * };
	 * ```
	 */
	public EXTEND_GAME_TEXT: any = null;

	public DEFAUT_CURRENCY: string = "USD";
	public CURRENCY_CONFIG: any = {
		VND: {
			MONEY_FORMAT: {
				DECIMAL_COUNT: 0,
				CURRENCY_PREFIX: "",
				TRIM_ZERO: true,
			},
			WALLET_FORMAT: {
				TRIM_ZERO: true,
				IS_SHORT_FORMAT: false,
			},
			BET_FORMAT: {
				DECIMAL_COUNT: 0,
				TRIM_ZERO: true,
				IS_SHORT_FORMAT: false,
			},
		},
		USD: {
			MONEY_FORMAT: {
				DECIMAL_COUNT: 2,
				CURRENCY_PREFIX: "$",
				TRIM_ZERO: false,
				CENT_UNIT: 0.5,
				CENT_SUFFIX: "¢",
			},
			WALLET_FORMAT: {
				DECIMAL_COUNT: 2,
				CURRENCY_PREFIX: "$",
				TRIM_ZERO: false,
				CENT_UNIT: 0.5,
				CENT_SUFFIX: "¢",
			},
			BET_FORMAT: {
				DECIMAL_COUNT: 2,
				IS_SHORT_FORMAT: false,
			},
		},
		THB: {
			MONEY_FORMAT: {
				DECIMAL_COUNT: 2,
				CURRENCY_PREFIX: "฿",
				TRIM_ZERO: false,
			},
			WALLET_FORMAT: {
				IS_SHORT_FORMAT: false,
				DECIMAL_COUNT: 2,
			},
			BET_FORMAT: {
				DECIMAL_COUNT: 0,
				IS_SHORT_FORMAT: false,
			},
		},
	};
	// free game option config for only console test
	public FREE_OPTION_CONFIG: any = {
		OPTIONS: [1, 2],
		TIMER: 30
	};
	// bonus game config
	public BONUS_GAME_CONFIG: any = {
		TOTAL_ITEM: 12, // only use when console test
		MAX_OPEN_ITEM: 9, // only use when console test
		BONUS_TYPE: BONUS_GAME_TYPE_ENUM.TYPE_1,
	};
	public readonly DEFAULT_TRIAL_JACKPOT: any = {
		VND: {
			"1_GRAND": 400000,
			"2_GRAND": 800000,
			"3_GRAND": 1200000,
			"4_GRAND": 2000000,
			"5_GRAND": 4000000,
			"6_GRAND": 8000000,
			"7_GRAND": 12000000,
			"8_GRAND": 20000000,
			"9_GRAND": 40000000,
			"a_GRAND": 200000000,
			"b_GRAND": 400000000,
		},
		USD: {
			"1_USD_GRAND": 200,
			"2_USD_GRAND": 400,
			"3_USD_GRAND": 800,
			"4_USD_GRAND": 1000,
			"5_USD_GRAND": 2000,
			"6_USD_GRAND": 3000,
			"7_USD_GRAND": 5000,
			"8_USD_GRAND": 10000,
			"9_USD_GRAND": 20000,
			"a_USD_GRAND": 30000,
			"b_USD_GRAND": 50000,
			"c_USD_GRAND": 100000,
		},
		THB: {
			"1_THB_GRAND": 3000,
			"2_THB_GRAND": 5000,
			"3_THB_GRAND": 10000,
			"4_THB_GRAND": 20000,
			"5_THB_GRAND": 30000,
			"6_THB_GRAND": 50000,
			"7_THB_GRAND": 100000,
			"8_THB_GRAND": 200000,
			"9_THB_GRAND": 300000,
			"a_THB_GRAND": 500000,
			"b_THB_GRAND": 1000000,
		}
	};

	public readonly DEFAULT_WALLET_TRIAL: any = {
		VND: 200000000,
		USD: 1000000,
		THB: 3000000,
	};

	public readonly DEFAULT_TRIAL_BET_ID: string = '55';
	public readonly MAX_TRIAL_SESSION: number = 20;

	public readonly MIN_BET_CIRCULAR: boolean = false;
	public readonly MAX_BET_CIRCULAR: boolean = false;
	public readonly MIN_EXTRA_BET_CIRCULAR: boolean = false;
	public readonly MAX_EXTRA_BET_CIRCULAR: boolean = false;

	// Win level configuration
	public readonly WIN_LEVEL_CONFIG: any = {
		/**
		 * win/totalBet ratio cutoffs to determine levels 2..4
		 * Example (ratio):
		 *  rate < 1 => level 1
		 *  1 <= rate < 5 => level 2
		 *  5 <= rate < 10 => level 3
		 *  rate >= 10 => level 4
		 */
		THRESHOLDS: [1, 5, 10],
		/**
		 * count money time for each level
		 * Example (seconds):
		 *  level 1 => 0s, level 2 => 0s, level 3 => 4s, level 4 => 6s
		 */
		COUNT_MONEY_TIME: { 1: 0, 2: 0, 3: 4, 4: 6 },
		/**
		 * win line time for each level
		 * Example (seconds):
		 *  level 1 => 1s, level 2 => 2s, level 3 => 4s, level 4 => 6s
		 */
		WIN_LINE_TIME: { 1: 1, 2: 2, 3: 4, 4: 6 },
	};

	// Symbol config
	public readonly SYMBOL_CONFIG: any = {
		Wild: {
			Priority: 1,
			Id: "K",
		},
		Scatter: {
			Priority: 2,
			Id: "A",
		},
		Bonus: {
			Priority: 3,
			Id: "N/A",
		},
		Jackpot: {
			Priority: 4,
			Id: "JP",
		}
	};

	// PROMOTION: Unblock this when testing promotion
	// public readonly PROMOTION_DATA_TEST = {
	// 	betId: "11",
	// 	promotionRemain: 2,
	// 	promotionTotal: 5,
	// }

	// support trial mode
	public readonly ENTER_TRIAL_MODE_DELAY_TIME: number = 0.5;
	public readonly BACK_TO_REAL_MODE_DELAY_TIME: number = 1;

	// table config
	public readonly SYMBOL_HEIGHT: number = 160;
	public readonly SYMBOL_WIDTH: number = 140;
	public readonly TABLE_FORMAT: number[] = [3, 3, 3, 3, 3];
	public readonly HAS_BUY_FEATURE: boolean = false;
	/**
	* @description Map extra bet feature, key is the extra bet key, value is the extra bet buy feature
	*/
	public readonly MAP_EXTRA_BET_FEATURE: { [key: string]: string[] } | null = null;
	public readonly GAME_TEXT: any = GameText;
}
```
