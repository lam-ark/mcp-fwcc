# GameDataStore

> **Source Path**: `assets/cc-common/cc-slot-module/Core/GameDataStore.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`GameDataStore`** extends `Component`

## Key Methods
- `onLoad(): void`
- `setConfig(): void`
- `setGameSpeed(): void`
- `registerModule(): void`
- `parseDataPS(): void`
- `mapDataPS(): any`
- `parseDataPS(): void`
- `updateDataModules(): void`
- `getCurrentGameModeData(): any`
- `getGameModeData(): any`
- `setGameModeDataMap(): void`
- `convertData(): void`
- `setDataMap(): void`
- `getNextGameMode(): number`
- `hasPlaySession(): boolean`

## Source Implementation
```typescript
const { _decorator, Component, warn } = cc;
import { BaseDataModule } from "./BaseDataModule";
import { GAME_MODE_ENUM, GAME_SPEED_ENUM } from "../Components/Common/SlotEnum";
import { GameConfig } from "./GameConfig";
const { ccclass } = _decorator;
@ccclass
export class GameDataStore extends Component {
	playSession: any = {};
	freeSpinTimes: number = 0;
	isTrialMode: boolean = false;
	gameConfig: GameConfig = null;
	currentGameMode = GAME_MODE_ENUM.NORMAL_GAME;
	gameSpeed = GAME_SPEED_ENUM.NORMAL;

	private _dataMap: Map<string, any> = new Map();
	private _dataModules: Set<BaseDataModule> = new Set();

	gameModeData: Map<number, any> = new Map();

	protected onLoad(): void {
		this.getComponentsInChildren("BaseDataModule").forEach((module) => {
			this.registerModule(module as BaseDataModule);
		});
	}

	setConfig(gameConfig): void {
		this.gameConfig = gameConfig;
	}

	setGameSpeed(speed: number): void {
		this.gameSpeed = speed;
	}

	registerModule(module: BaseDataModule): void {
		if (module.isRegistered) {
			return;
		}
		this._dataModules.add(module);
		module.isRegistered = true;
	}

	/**
	 * @example
	 * parseDataPS(data: any): void {
	 * 	let updatedData = {...data};
	 * 	updatedData.customKey = 2; // add more keys
	 * 	super.parseDataPS(updatedData);
	 * 	this.playSession = this.mapDataPS(this.playSession); // map keys
	 * }
	 * 
	 * mapDataPS(data: any): any { // map keys function
	 * 	return this.mapNewKeys(data, {
	 * 		"key1": "fullKey1",
	 * 		"key2": "fullKey2",
	 * 	});
	 * }
	 */
	// override code here when add more keys, map keys, convert play session data
	parseDataPS(data): void {
		this.playSession = data;
		warn("%c data-update ", "color: red", data);
	}

	updateDataModules(): void {
		this.convertData(this.playSession);
		this.gameModeData.set(this.currentGameMode, this.playSession);
		this._dataModules.forEach((module) => {
			for (const key of module.registeredKeys) {
				if (this._dataMap.has(key)) {
					let value = this._dataMap.get(key);
					if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
						value = JSON.parse(JSON.stringify(value));
					}
					module.onDataUpdate(key, value);
				} else {
					module.clearDataWithKey(key);
				}
			}
		});
	}

	getCurrentGameModeData(): any {
		return this.gameModeData.get(this.currentGameMode) || {};
	}

	getGameModeData(gameMode: number): any {
		return this.gameModeData.get(gameMode) || {};
	}

	setGameModeDataMap(key: string, value: any): void {
		const data = this.gameModeData.get(this.currentGameMode) || {};
		data[key] = value;
	}

	convertData(data: Record<string, any>): void {
		this._dataMap.clear();
		for (const key in data) {
			if (data.hasOwnProperty(key)) {
				this.setDataMap(key, data[key]);
			}
		}
	}

	setDataMap(key: string, value: any): void {
		this._dataMap.set(key, value);
	}

	getNextGameMode(): number {
		return parseInt(this.playSession.nextMode);
	}

	hasPlaySession(): boolean {
		return Object.keys(this.playSession).length > 0;
	}

	getWinAmountPS(): number {
		let winAmountPS = this.playSession ? this.playSession.winAmountPS : 0;
		return winAmountPS;
	}

	getResumeWinAmount(): number {
		let winAmountPS = this.playSession ? this.playSession.winAmountPS : 0;
		return winAmountPS;
	}

	getBigWinData(): any {
		let { bigWinAmount, totalBet, winType, winAmountPS, isFinished } = this.playSession;
		const { winLevel, delayTime, time } = this.getWinAmountInfo();
		return { winAmount: bigWinAmount, totalBet, winType, winAmountPS, isFinished, winLevel, delayTime, time };
	}

	isBigWin(): boolean {
		let { bigWinAmount, winType } = this.playSession;
		return !!bigWinAmount && !!winType;
	}

	// ['9000_4_GRAND;2500000'] || ['9000_4_USD_GRAND;2500000']
	getJackpotInfo(): { jackpotType: string, jackpotValue: number } | null | undefined {
		const { jackpot } = this.playSession;
		if (!jackpot) {
			return null;
		}

		const jackpotInfo = jackpot[jackpot.length - 1].split(';');
		const jackpotResult = jackpotInfo[0].split('_');
		const jackpotValue = Number(jackpotInfo[1]);
		const jackpotType = jackpotResult[jackpotResult.length - 1];
		return { jackpotType, jackpotValue };
	}

	getWinAmountInfo(win?: number): { winAmount: number, time: number, winLevel: number, delayTime: number } {
		let { winAmount } = this.playSession;
		win = win || winAmount || 0;
		const winLevel = this.getWinLevel(win);
		return { winAmount: win, time: this.getCountMoneyTime(winLevel), winLevel, delayTime: this.getWinLineTime(winLevel) };
	}

	getWinLevel(win?: number): number {
		const { winAmount, totalBet } = this.playSession;
		win = win || winAmount || 0;
		const rate = totalBet ? eno.FloatUtils.div(win, totalBet) : 0;
		const thresholds: number[] = this.gameConfig && this.gameConfig.WIN_LEVEL_CONFIG && this.gameConfig.WIN_LEVEL_CONFIG.THRESHOLDS || [1, 5, 10];
		if (rate < thresholds[0]) {
			return 1;
		}
		if (rate < thresholds[1]) {
			return 2;
		}
		if (rate < thresholds[2]) {
			return 3;
		}
		return 4;
	};

	getCountMoneyTime(level: number): number {
		const map = this.gameConfig && this.gameConfig.WIN_LEVEL_CONFIG && this.gameConfig.WIN_LEVEL_CONFIG.COUNT_MONEY_TIME || { 1: 0, 2: 0, 3: 4, 4: 6 };
		return map[level] || 0;
	}

	getWinLineTime(level: number): number {
		const map = this.gameConfig && this.gameConfig.WIN_LEVEL_CONFIG && this.gameConfig.WIN_LEVEL_CONFIG.WIN_LINE_TIME || { 1: 1, 2: 2, 3: 4, 4: 6 };
		return map[level] || 0;
	}

	resetDataPS(): void {
		if (this.hasPlaySession()) {
			this.playSession.winAmountPS = 0;
			this.playSession.isFinished = true;
		}
	}

	resetWinAmount(): void {
		if (this.hasPlaySession() && this.currentGameMode === GAME_MODE_ENUM.NORMAL_GAME) {
			this.playSession.winAmountPS = 0;
			this.playSession.winAmount = 0;
		}
	}

	mapNewKeys(playSession: Record<string, any>, mapKeys: Record<string, string>): Record<string, any> {
		Object.keys(playSession).forEach(key => {
			if (mapKeys[key]) {
				const newKey = mapKeys[key];
				playSession[newKey] = playSession[key];
				delete playSession[key];
			}
		});

		return playSession;
	}
}

```
