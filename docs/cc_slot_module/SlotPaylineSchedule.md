# SlotPaylineSchedule

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Payline/PaylineModule/scripts/SlotPaylineSchedule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SlotPaylineSchedule`** extends `BasePaylineComponent`

## Key Methods
- `setConfig(): void`
- `registerPaylineEvents(): void`
- `resetAllEffectAndTasks(): void`
- `setData(): void`
- `cleanUp(): void`
- `stopPaylines(): void`
- `showAllPaylines(): void`
- `blinkAllPaylines(): Promise<void>`
- `stopSchedule(): void`
- `onShowScatter(): Promise<void>`
- `onShowBonus(): Promise<void>`
- `onShowJackpot(): Promise<void>`
- `showJackpotLine(): Promise<void>`
- `showJackpotWinSymbols(): Promise<void>`
- `showPayline(): void`

## Source Implementation
```typescript
const { _decorator, log, tween, warn } = cc;
import { GameUIEvents } from "../../../../Core/GameUIEvents";
import { PAYLINE_TYPE, PaylineEventTypes } from "../../PaylineCommon/PaylineTypes";
import { BasePaylineComponent } from "./BasePaylineComponent";
import { PaylineConfig } from "./PaylineConfig";

const { ccclass } = _decorator;

@ccclass
export class SlotPaylineSchedule extends BasePaylineComponent {
	protected payLines: any[] = [];
	protected jackpotPayline = null;
	protected tweenSchedule: any = null;
	protected timelineConfig: any = null;

	protected setConfig(config: PaylineConfig): void {
		super.setConfig(config);
		this.timelineConfig = config.TIMELINE_CONFIG;
	}

	protected registerPaylineEvents(): void {
		if (this.moduleEvent) {
			// Register event fired from director
			this.moduleEvent.on("BLINK_ALL_PAYLINES", this.blinkAllPaylines, this);
			this.moduleEvent.on("SHOW_ALL_PAYLINES", this.showAllPaylines, this);
			this.moduleEvent.on("SHOW_SCATTER_PAYLINE", this.onShowScatter, this);
			this.moduleEvent.on("SHOW_BONUS_PAYLINE", this.onShowBonus, this);
			this.moduleEvent.on("SHOW_JACKPOT_PAYLINE", this.onShowJackpot, this);
			this.moduleEvent.on("CLEAR_PAYLINES", this.cleanUp, this);
			this.moduleEvent.on("STOP_PAYLINES", this.stopPaylines, this);
		}

		if (this.payLineEmitter) {
			// Register event fired from payline module
			this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SET_DATA, this.setData, this);
			this.payLineEmitter.on(PaylineEventTypes.PAYLINE_SHOW_SPECIAL_SYMBOL, this.stopSchedule, this);
		}
	}

	protected resetAllEffectAndTasks(): void {
		this.cleanUp();
	}

	protected setData(data: { payLines: any[], jackpotPayline }): void {
		this.payLines = data.payLines;
		this.jackpotPayline = data.jackpotPayline;
	}

	protected cleanUp(): void {
		this.stopSchedule();
		this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_CLEAR);
	}

	protected stopPaylines(): void {
		this.stopSchedule();
		this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_STOP_ALL);
	}

	protected showAllPaylines(): void {
		this.stopSchedule();

		if (!this.payLines || this.payLines.length === 0) {
			if (this.paylineConfig.IS_DEBUG) {
				warn('[SlotTablePaylineModule] No payLines to schedule');
			}
			return;
		}

		const actions: cc.Tween[] = [];
		this.payLines.sort((a, b) => a.payLineID - b.payLineID);
		for (let i = 0; i < this.payLines.length; i++) {
			// const duration = this.timelineConfig(this.payLines[i]);
			const duration = this.timelineConfig;
			actions.push(tween().call(() => this.showPayline(this.payLines[i], duration)));
			actions.push(tween().delay(duration));
		}

		this.tweenSchedule = tween(this.node)
			.sequence(...actions)
			.repeatForever()
			.start();
	}

	protected blinkAllPaylines(_data): Promise<void> {
		const blinkDuration = this.timelineConfig;

		if (!blinkDuration) {
			return Promise.resolve();
		}

		this.payLineEmitter && this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_BLINK_ALL, { blinkDuration });

		this.stopSchedule();
		return new Promise((resolve) => {
			this.tweenSchedule = tween(this.node)
				.delay(blinkDuration)
				.call(resolve)
				.start();
		});
	}

	protected stopSchedule(): void {
		if (this.tweenSchedule) {
			this.tweenSchedule.stop();
		}
		this.tweenSchedule = null;

		if (this.node) {
			this.node.stopAllActions();
		}

		this.eventManager.emit(GameUIEvents.PAYLINE_INFO.ON_HIDE_PAYLINE_INFO);
	}

	protected onShowScatter(): Promise<void> {
		const scatterSymbolId = this.gameConfig.SYMBOL_CONFIG.Scatter && this.gameConfig.SYMBOL_CONFIG.Scatter.Id;
		const duration = this.timelineConfig;
		this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_SHOW_SPECIAL_SYMBOL, scatterSymbolId, duration);

		this.stopSchedule();
		return new Promise((resolve) => {
			this.tweenSchedule = tween(this.node)
				.delay(this.timelineConfig)
				.call(resolve)
				.start();
		});

	}

	protected onShowBonus(): Promise<void> {
		const bonusSymbolId = this.gameConfig.SYMBOL_CONFIG.Bonus && this.gameConfig.SYMBOL_CONFIG.Bonus.Id;
		const duration = this.timelineConfig;
		this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_SHOW_SPECIAL_SYMBOL, bonusSymbolId, duration);

		this.stopSchedule();
		return new Promise((resolve) => {
			this.tweenSchedule = tween(this.node)
				.delay(duration)
				.call(resolve)
				.start();
		});
	}

	protected onShowJackpot(): Promise<void> {
		if (this.paylineConfig.PAYLINE_TYPE === PAYLINE_TYPE.Lines) {
			return this.showJackpotLine();
		} else {
			return this.showJackpotWinSymbols();
		}
	}

	protected showJackpotLine(): Promise<void> {
		const jackpotPayline = this.jackpotPayline;
		if (!jackpotPayline) {
			return Promise.resolve();
		}
		const duration = this.timelineConfig;
		this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_SHOW_JACKPOT_LINE, jackpotPayline, duration);

		this.stopSchedule();
		return new Promise((resolve) => {
			this.tweenSchedule = tween(this.node)
				.delay(duration)
				.call(resolve)
				.start();
		});
	}

	protected showJackpotWinSymbols(): Promise<void> {
		const jackpotSymbolId = this.gameConfig.SYMBOL_CONFIG.Jackpot && this.gameConfig.SYMBOL_CONFIG.Jackpot.Id;
		const duration = this.timelineConfig;
		this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_SHOW_SPECIAL_SYMBOL, jackpotSymbolId, duration);

		this.stopSchedule();
		return new Promise((resolve) => {
			this.tweenSchedule = tween(this.node)
				.delay(duration)
				.call(resolve)
				.start();
		});
	}

	protected showPayline(payline, duration: number): void {
		if (this.paylineConfig.IS_DEBUG) {
			log(`[BasePaylineSchedule] showPayline`, payline);
		}
		const symbolCount = payline.reelCount || payline.payLineWinNumbers;
		if (symbolCount) {
			payline.symbolCount = symbolCount;
		}
		this.eventManager.emit(GameUIEvents.PAYLINE_INFO.ON_SHOW_PAYLINE_INFO, payline);
		this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_SHOW_LINE, payline, duration);
	}
}
```
