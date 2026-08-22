# SlotReelModule

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Table/SlotTable/scripts/SlotReelModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`ReelManager`**
- **`export`**
- **`SlotReelModule`** extends `Component`

## Key Methods
- `onIdle(): void`
- `onStart(): void`
- `onShowResult(): void`
- `onStop(): void`
- `reset(): void`
- `changeState(): void`
- `initReel(): void`
- `runReelSpin(): void`
- `showResult(): void`
- `fastStop(): void`
- `clearSymbols(): void`
- `resumeReel(): void`
- `getSymbolByRow(): cc.Node`
- `getRealSymbols(): cc.Node[]`
- `getResultSymbols(): cc.Node[]`

## Source Implementation
```typescript
const { _decorator, Component, tween, Vec2, v2 } = cc;
import { ReelSpinState } from "./SlotTableModuleEnum";
import { SymbolIndexType, SymbolOwnerType } from "../../../../Components/Common/SlotEnum";
import { SlotSymbolManager } from "../../SlotSymbol/SlotSymbolManager";
import { SlotSymbolModule } from "../../SlotSymbol/SlotSymbolModule";

const { ccclass } = _decorator;

export class ReelManager {
	totalSymbol: number;
	showSymbol: number;
	index: number = 0;
	step: number = Number.MAX_SAFE_INTEGER;
	stop: number = 0;
	speed: number = 0;
	startX: number = 0;
	startY: number = 0;
	result: string[] = [];
	state: ReelSpinState = ReelSpinState.IDLE;
	protected stateHandlerMapper: Record<ReelSpinState, () => void>;

	constructor(totalSymbol: number, showSymbol: number) {
		this.totalSymbol = totalSymbol;
		this.showSymbol = showSymbol;
		this.stateHandlerMapper = {
			[ReelSpinState.IDLE]: this.onIdle.bind(this),
			[ReelSpinState.START]: this.onStart.bind(this),
			[ReelSpinState.SHOWING_RESULT]: this.onShowResult.bind(this),
			[ReelSpinState.STOPPED]: this.onStop.bind(this),
		};
	}

	onIdle(): void { }

	onStart(): void {
		this.reset();
	}

	onShowResult(): void { }

	onStop(): void {
		this.reset();
	}

	reset(): void {
		this.step = Number.MAX_SAFE_INTEGER;
		this.stop = 0;
		this.index = 0;
	}

	changeState(newState: ReelSpinState): void {
		if (newState !== this.state) {
			this.state = newState;
			this.stateHandlerMapper[newState] && this.stateHandlerMapper[newState]();
		}
	}
}

export interface IReelComponent {
	initReel({ reelIndex, config, pool }: { reelIndex: number, config: any, pool: SlotSymbolManager }): void;
	runReelSpin(mode): void;
	showResult(symbols, reelStopCallback, reelPreStopCallback?): void;
	fastStop(): void;
	clearSymbols(): void;
	resumeReel(symbols): void;
	getSymbolByRow(row): cc.Node;
	getRealSymbols(): cc.Node[];
	getResultSymbols(): cc.Node[];
}

@ccclass
export class SlotReelModule extends Component implements IReelComponent {
	protected config: any;
	protected reelIndex: number;
	protected currentMode;

	protected listSymbols: cc.Node[] = [];
	protected resultSymbols: cc.Node[] = [];
	protected tween: any | null = null;
	protected data: string[] = [];
	protected stopCallback: (() => void);
	protected reelStopCB: Function = null;
	protected reelPreStopCB: Function = null;

	protected SYMBOL_WIDTH: number;
	protected SYMBOL_HEIGHT: number;
	protected DEFAULT_SIZE: cc.Vec2;
	protected DEFAULT_FORMAT: number[];
	protected RANDOM_SYMBOLS_CODE: string[];
	protected EXCEPTION_SYMBOLS: string[];

	protected reelManager: ReelManager;
	protected symbolManager: SlotSymbolManager;
	protected originalPosition: cc.Vec2 = null;

	initReel({ reelIndex, config, pool }): void {
		this.reelIndex = reelIndex;
		this.config = config;
		this.symbolManager = pool;

		this.getConfigValue();
		this.initReelManager();
		this.initSymbolsInReel();

		this.originalPosition = new cc.Vec2(this.node.position.x, this.node.position.y);
	}

	initReelManager(): void {
		const { visibleSymbol, totalSymbol } = this.initSymbol(this.reelIndex);
		const startX = (visibleSymbol / 2 + this.config.BUFFER_LEFT - 0.5) * this.SYMBOL_WIDTH;
		const startY = (visibleSymbol / 2 + this.config.BUFFER_TOP - 0.5) * this.SYMBOL_HEIGHT;

		this.reelManager = new ReelManager(totalSymbol, visibleSymbol);
		this.reelManager.startX = startX;
		this.reelManager.startY = startY;
	}

	initSymbolsInReel(): void {
		for (let i = 0; i < this.reelManager.totalSymbol; i++) {
			const symbol = this.createInitialSymbol();
			const symbolSize = SlotSymbolModule.getModuleComponent(symbol).size;
			const position = this.initPositionByType(i, symbolSize);
			symbol.setPosition(position.x, position.y);
			this.listSymbols.push(symbol);
		}
	}

	protected initSymbol(reelIndex: number): { visibleSymbol: number, totalSymbol: number } {
		const visibleSymbol = this.DEFAULT_FORMAT[reelIndex];
		const totalSymbol = visibleSymbol + this.config.BUFFER_TOP + this.config.BUFFER_BOT;

		return { visibleSymbol, totalSymbol };
	}

	getResultSymbols(): cc.Node[] {
		return [...this.resultSymbols];
	}

	protected isRealSymbol(index: number): boolean {
		return index >= this.config.BUFFER_TOP && index < this.reelManager.totalSymbol - this.config.BUFFER_BOT;
	}

	protected initPositionByType(index: number, size: cc.Vec2): cc.Vec2 {
		const { startY } = this.reelManager;
		const offsetX = size.x > this.DEFAULT_SIZE.x ? (size.x / 2 - 0.5) * this.SYMBOL_WIDTH : 0;
		const offsetY = size.y > this.DEFAULT_SIZE.y ? (size.y / 2 - 0.5) * this.SYMBOL_HEIGHT : 0;
		const x = offsetX;
		const y = startY - index * this.SYMBOL_HEIGHT + offsetY;

		return v2(x, y);
	}

	protected getConfigValue(): void {
		this.SYMBOL_WIDTH = this.config.SYMBOL_WIDTH;
		this.SYMBOL_HEIGHT = this.config.SYMBOL_HEIGHT;
		this.DEFAULT_SIZE = this.config.DEFAULT_SIZE;
		this.DEFAULT_FORMAT = this.config.TABLE_FORMAT;
		this.EXCEPTION_SYMBOLS = this.config.EXCEPTION_SYMBOLS;
		this.RANDOM_SYMBOLS_CODE = this.config.RANDOM_SYMBOLS_CODE;
	}

	runReelSpin(mode): void {
		this.data = [];
		this.node.active = true;
		this.currentMode = mode;
		this.reelManager.speed = this.currentMode.speed;
		this.reelManager.changeState(ReelSpinState.START);

		this.reelStopCB = null;
		this.tween && this.tween.stop();
		this.listSymbols.forEach((symbol) => {
			symbol.active = true;
		});
		this.spinAction();
	}

	spinAction(): void {
		if (this.reelManager.state === ReelSpinState.STOPPED) {
			this.playStopAnimation();
			return;
		}

		const newPosition: cc.Vec2 = new cc.Vec2(0, -this.SYMBOL_HEIGHT);
		const slowdownFactor = this.currentMode.slowdownFactor || 4;
		const time = this.reelManager.speed + this.reelManager.speed * this.reelManager.stop / slowdownFactor;
		this.tween = tween(this.node)
			.by(time, { position: newPosition })
			.call(() => {
				this.tween = null;
				this.recycleSymbol();
				this.spinAction();
			})
			.start();
	}

	showResult(symbols, reelStopCallback, reelPreStopCallback): void {
		this.resultSymbols = [];
		this.updateReelResult(symbols);
		this.setUpStopCallback();
		this.reelStopCB = reelStopCallback;
		this.reelPreStopCB = reelPreStopCallback;
	}

	showRandomResult(reelStopCallback, reelPreStopCallback): void {
		this.resultSymbols = [];
		this.setUpStopCallback();
		this.reelStopCB = reelStopCallback;
		this.reelPreStopCB = reelPreStopCallback;
	}

	updateReelResult(symbols): void {
		this.data = [...symbols].reverse();
		for (let index = 0; index < this.config.BUFFER_BOT; index++) {
			this.data.unshift(this.getRandomSymbolWithException().symbolCode);
		}

		for (let index = 0; index < this.config.BUFFER_TOP; index++) {
			this.data.push(this.getRandomSymbolWithException().symbolCode);
		}
	}

	fastStop(): void {
		this.stopCallback && this.unschedule(this.stopCallback);
		this.reelManager.state = ReelSpinState.SHOWING_RESULT;
		this.reelManager.speed = this.reelManager.speed / this.config.FAST_SPIN_RATE;
	}

	protected createInitialSymbol(): cc.Node {
		const { symbolCode } = this.getRandomSymbolWithException();

		const symbolSize = this.DEFAULT_SIZE;
		const symbol = this.symbolManager.createSymbol(symbolCode, symbolSize, this.node, SymbolOwnerType.REEL_SYMBOL);
		return symbol;
	}

	protected getRandomSymbolWithException(): { symbolCode: string, symbolSize: cc.Vec2 } {
		const randomSymbol = this.getRandomSymbol();
		if (this.EXCEPTION_SYMBOLS.indexOf(randomSymbol.symbolCode) > -1) {
			return this.getRandomSymbolWithException();
		} else {
			return randomSymbol;
		}
	}

	protected recycleSymbol(): void {
		if (!this.listSymbols.length) {
			return;
		}

		const length = this.listSymbols.length;
		const symbol = this.listSymbols[length - 1];
		const comp = SlotSymbolModule.getModuleComponent(symbol);

		if (!comp.getSize().equals(this.DEFAULT_SIZE) && comp.sizeCount > 1) {
			comp.sizeCount--;
		} else {
			this.symbolManager.removeSymbol(symbol);
			this.listSymbols.pop();
		}

		this.reelManager.step--;
		if (this.reelManager.step < this.reelManager.totalSymbol) {
			this.reelManager.changeState(ReelSpinState.SHOWING_RESULT);
		}

		const newSymbol = this.spawnReelSymbol();
		this.customizeNewSymbol(newSymbol);

		if (this.reelManager.stop >= this.reelManager.totalSymbol) {
			this.reelManager.changeState(ReelSpinState.STOPPED);
		}
	}

	customizeNewSymbol(symbol: cc.Node): void {
		// override this method to handle new symbol
	}

	protected playStopAnimation(): void {
		const spinSpeed = this.currentMode.easingTimeStop;
		this.onReelPreStop();

		this.playSymbolAppearAnimation();

		const { positionStep1, positionStep2 } = this.getPositionStopStep();

		this.tween = tween(this.node)
			.by(spinSpeed, { position: positionStep1 })
			.by(spinSpeed, { position: positionStep2 })
			.call(() => {
				this.tween = null;
				this.resetReel();
				this.reelStopCB && this.reelStopCB(this.reelIndex);
				this.unschedule(this.setStepToStop);
			})
			.start();
	}

	playSymbolAppearAnimation(): void {
		const realSymbols = this.getRealSymbols();
		for (const symbol of realSymbols) {
			symbol.emit("PLAY_ANIMATION_APPEAR");
		}
	}

	getPositionStopStep(): { positionStep1: cc.Vec2, positionStep2: cc.Vec2 } {
		const stepDistance = this.currentMode.easingStop;
		const positionStep1 = new cc.Vec2(0, -stepDistance);
		const positionStep2 = new cc.Vec2(0, stepDistance);

		return { positionStep1, positionStep2 };
	}

	resetReel(): void {
		const offset = Math.abs(this.node.position.y);
		this.listSymbols.forEach((s) => s.setPosition(s.position.x, s.position.y - offset));
		this.listSymbols.sort((a, b) => b.position.y - a.position.y);
		this.node.setPosition(this.originalPosition);

		this.hideFakeSymbols();
	}

	hideFakeSymbols(): void {
		this.listSymbols.forEach((symbol, index) => {
			if (index < this.config.BUFFER_TOP || index >= this.reelManager.totalSymbol - this.config.BUFFER_BOT) {
				symbol.active = false;
			}
		});
	}

	protected onReelPreStop(): void {
		this.reelPreStopCB && this.reelPreStopCB(this.reelIndex);
	}

	protected spawnReelSymbol(): cc.Node {
		let code = "", size = Vec2.ONE;
		let skip = false;
		let stop = 0;
		let indexSymbol = -1;
		let isBlurSymbol = false;

		if (this.reelManager.state === ReelSpinState.SHOWING_RESULT && this.data.length) {
			const symbolValue = this.data[this.reelManager.index];
			indexSymbol = this.getIndexSymbol(this.reelManager.index);

			if (symbolValue) {
				({ symbolCode: code, symbolSize: size, stop } = this.mapSymbolData(symbolValue));
				this.reelManager.stop += stop;
			} else {
				skip = true;
			}

			this.reelManager.index++;
		} else {
			isBlurSymbol = true;
			({ symbolCode: code, symbolSize: size } = this.getRandomSymbol());
		}

		if (!this.canPlaceSymbol() || skip) {
			return;
		}

		const symbol = this.spawnSymbol(code, size, isBlurSymbol);

		if (indexSymbol != SymbolIndexType.UNUSED) {
			SlotSymbolModule.getModuleComponent(symbol).setIndex(indexSymbol);
			this.resultSymbols.push(symbol);
		}

		return symbol;
	}

	protected spawnSymbol(code: string, size: cc.Vec2, isBlur: boolean = false): cc.Node {
		const offsetX = size.x > this.DEFAULT_SIZE.x ? (size.x / 2 - 0.5) * this.SYMBOL_WIDTH : 0;
		const offsetY = size.y > this.DEFAULT_SIZE.y ? (size.y / 2 - 0.5) * this.SYMBOL_HEIGHT : 0;
		const topY = this.originalPosition.y + Math.abs(this.node.position.y) + this.reelManager.startY;

		let symbol = null;
		if (isBlur) {
			symbol = this.symbolManager.createBlurSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);
		} else {
			symbol = this.symbolManager.createSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);
		}

		symbol.setPosition(offsetX, topY + offsetY);

		this.listSymbols.unshift(symbol);
		return symbol;
	}

	protected setUpStopCallback(): void {
		const cb = (): void => this.setStepToStop();
		this.stopCallback = cb;
		this.scheduleOnce(cb, this.reelIndex * this.currentMode.delayStop);
	}

	protected setStepToStop(): void {
		this.reelManager.step = this.currentMode.stepStop;
	}

	protected mapSymbolData(value: string): { symbolCode: string, symbolSize: cc.Vec2, stop: number } {
		if (value.indexOf('_') >= 0) {
			const resultList = value.split("_");
			const [symbolCode, sizeX, sizeY] = resultList;
			const symbolSize = sizeX && sizeY ? v2(+sizeX, +sizeY) : this.config.DEFAULT_SIZE;
			return { symbolCode, symbolSize, stop: symbolSize.y };
		} else {
			return { symbolCode: value, symbolSize: this.config.DEFAULT_SIZE, stop: this.config.DEFAULT_SIZE.y };
		}
	}

	protected canPlaceSymbol(): boolean {
		let totalSize = 0;
		this.listSymbols.forEach(symbol => {
			const comp = SlotSymbolModule.getModuleComponent(symbol);
			totalSize += comp.sizeCount;
		});
		return totalSize < this.reelManager.totalSymbol;
	}

	protected getRandomSymbol(): { symbolCode: string, symbolSize: cc.Vec2 } {
		const randomSymbols = this.RANDOM_SYMBOLS_CODE[this.reelIndex];
		const totalSymbols = randomSymbols.length;
		const randomCode = randomSymbols[Math.floor(Math.random() * totalSymbols)];
		const { symbolCode, symbolSize } = this.mapSymbolData(randomCode);
		return { symbolCode, symbolSize };
	}

	resumeReel(symbols): void {
		this.data = [...symbols];

		for (let index = 0; index < this.config.BUFFER_BOT; index++) {
			this.data.push(this.getRandomSymbolWithException().symbolCode);
		}

		for (let index = 0; index < this.config.BUFFER_TOP; index++) {
			this.data.unshift(this.getRandomSymbolWithException().symbolCode);
		}

		this.data.forEach((symbolValue, index) => {
			if (symbolValue) {
				const revertIndex = this.data.length - index - 1;
				const { symbolCode: code, symbolSize: size } = this.mapSymbolData(symbolValue);
				const symbol = this.symbolManager.createSymbol(code, size, this.node, SymbolOwnerType.REEL_SYMBOL);
				SlotSymbolModule.getModuleComponent(symbol).setIndex(this.getIndexSymbol(revertIndex));
				const position = this.initPositionByType(index, size);
				symbol.setPosition(position.x, position.y);
				this.listSymbols.push(symbol);
			}
		});
		this.symbolManager.updateSymbolSiblingIndex(this.listSymbols);
	}

	clearSymbols(): void {
		this.resultSymbols = [];
		this.listSymbols = [];
	}

	getIndexSymbol(indexData: number): number {
		const symbolsIndex = [...this.config.SYMBOL_INDEXES[this.reelIndex]].reverse();

		const bufferTop = Array(this.config.BUFFER_TOP).fill(-1);
		const bufferBot = Array(this.config.BUFFER_BOT).fill(-1);
		symbolsIndex.push(...bufferTop);
		symbolsIndex.unshift(...bufferBot);

		return symbolsIndex[indexData];
	}

	extendTimeToStop(isNearWin: boolean, isLastReel: boolean): void {
		if (isNearWin) {
			this.config.NEAR_WIN_DELAY_STOP += (isLastReel ? this.config.NEAR_WIN_DELAY_TIME_LAST_REEL : this.config.NEAR_WIN_DELAY_TIME);
		} else {
			this.config.NEAR_WIN_DELAY_STOP += this.currentMode.delayStop;
		}

		this.unschedule(this.stopCallback);
		this.scheduleOnce(this.stopCallback, this.config.NEAR_WIN_DELAY_STOP);
	}

	getSymbolByRow(row: number): cc.Node {
		let realSymbols = this.getRealSymbols();
		const symbol = realSymbols[row];
		return symbol;
	}

	getRealSymbols(): cc.Node[] {
		const cloneSymbol = [...this.listSymbols];
		cloneSymbol.sort((a: cc.Node, b: cc.Node) => b.position.y - a.position.y);
		let count = 0;
		const realSymbols = cloneSymbol.filter((symbol) => {
			const size = SlotSymbolModule.getModuleComponent(symbol).size.y;
			const bufferSize = size > this.DEFAULT_SIZE.y ? size - this.DEFAULT_SIZE.y : 0;
			const isReal = this.isRealSymbol(count + bufferSize);
			count += size;
			return isReal;
		});
		return realSymbols;
	}
}
```
