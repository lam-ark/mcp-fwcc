# FreeGameDirectorModule

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/FreeGame/FreeGameDirectorModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`FreeGameDirectorModule`** extends `GameModeDirectorModule`

## Key Methods
- `enter(): void`
- `_resumeFreeTable(): Promise<void>`
- `syncSpinTimes(): void`
- `syncNormalTable(): void`
- `onBeforeSpinStart(): Promise<void>`
- `_beforeSpinStart(): Promise<void>`
- `_decreaseFreeGameSpinTimes(): Promise<void>`
- `_updateSpinTimes(): Promise<void>`
- `_gameExit(): Promise<void>`
- `_showWinPayline(): Promise<void>`

## Source Implementation
```typescript
const { _decorator } = cc;
import { GameModeDirectorModule } from "../GameModeDirectorModule";
import { GAME_MODE_ENUM } from "../../Components/Common/SlotEnum";
const { ccclass } = _decorator;

@ccclass
export class FreeGameDirectorModule extends GameModeDirectorModule {
	isFirstAutoSpin: boolean = false;

	enter(): void {
		this.playGameModeBGM();
		this.syncSpinTimes();

		if (!this.dataStore.playSession.isResume) {
			this.syncNormalTable();
		}
		this.isFirstAutoSpin = true;
	}

	_resumeFreeTable(): Promise<void> {
		this.moduleEvent.emit("SYNC_TABLE");
		return Promise.resolve();
	}

	syncSpinTimes(): void {
		const { freeGameRemain, freeGame } = this.dataStore.playSession;
		this.dataStore.freeSpinTimes = freeGameRemain || freeGame;
		this.spinTimes.emit("UPDATE_SPINTIMES", this.dataStore.freeSpinTimes);
	}

	syncNormalTable(data?): void {
		this.moduleEvent.emit("SYNC_TABLE", data, GAME_MODE_ENUM.NORMAL_GAME);
	}

	onBeforeSpinStart(): Promise<void> {
		return this.runAction("FreeSpinTrigger");
	}

	async _beforeSpinStart(): Promise<void> {
		this.resetGameSpeed();
		this.skipAllEffects();
		this.isFirstAutoSpin = false;
		await this.delayAutoSpin();
		return Promise.resolve();
	}

	_decreaseFreeGameSpinTimes(): Promise<void> {
		this.dataStore.freeSpinTimes--;
		this.spinTimes.emit("UPDATE_SPINTIMES", this.dataStore.freeSpinTimes);
		return Promise.resolve();
	}

	_updateSpinTimes(spinTimes): Promise<void> {
		this.dataStore.freeSpinTimes = spinTimes;
		this.spinTimes.emit("UPDATE_SPINTIMES", spinTimes);
		return Promise.resolve();
	}

	_gameExit(): Promise<void> {
		this.moduleEvent.emit("CLEAR_PAYLINES");
		this.moduleEvent.emit("SYNC_TABLE");
		return Promise.resolve();
	}

	async _showWinPayline(data): Promise<void> {
		const { delayTime } = data;
		const { winAmount, winAmountPS } = this.dataStore.playSession;

		const win = winAmountPS || winAmount;
		data.winAmount = win;

		this._updateWinningAmount(data);
		this.moduleEvent.emit("BLINK_ALL_PAYLINES", data).then(() => {
			this.moduleEvent.emit("SHOW_ALL_PAYLINES", data);
		});
		await this.delayAction(delayTime);

		return Promise.resolve();
	}
}

```
