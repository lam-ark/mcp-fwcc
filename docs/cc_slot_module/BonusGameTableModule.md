# BonusGameTableModule

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/BonusGame/BonusGameTableModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BonusGameTableModule`** extends `SlotBaseModule`

## CC Properties
- `boxPrefab`

## Key Methods
- `onLoadExtend(): void`
- `registerEvents(): void`
- `randRange(): number`
- `initBoxes(): void`
- `getBonusGameConfig(): BonusTableConfig`
- `getBonusGameData(): BonusTableData`
- `setBoxValues(): void`
- `getPosByIndex(): cc.Vec3`
- `openBox(): void`
- `openFinalBox(): Promise<void>`
- `openAllBoxes(): Promise<void>`
- `resumeTable(): Promise<void>`
- `resetTable(): void`
- `autoClick(): void`
- `updateCurrentMatrix(): void`

## Source Implementation
```typescript
const { _decorator, instantiate, v3 } = cc;
import { SlotBaseModule } from "../../Core/SlotBaseModule";
import { BonusTableConfig, BonusType } from "./BonusTableConfig";
import { BonusTableData } from "./BonusTableData";
const { ccclass, property } = _decorator;

@ccclass
export class BonusGameTableModule extends SlotBaseModule {
	@property(cc.Prefab)
	boxPrefab: cc.Prefab = null;
	@property
	openAllBoxDelay: number = 3;

	listBoxes: cc.Node[] = [];
	resultList = [];
	boxValues = [];
	startX: number = 0;
	startY: number = 0;
	colNumber: number = 0;
	rowNumber: number = 0;
	widthStep: number = 0;
	heightStep: number = 0;
	_config: BonusTableConfig = null;
	_data: BonusTableData = null;
	betId: string = "";

	result: any = null;

	onLoadExtend(): void {
		this._config = this.getBonusGameConfig();
		this._data = this.getBonusGameData();
	}

	protected registerEvents(): void {
		if (this.moduleEvent) {
			this.moduleEvent.on("INIT_BONUS_GAME", this.initBoxes, this);
			this.moduleEvent.on("START_BONUS_GAME", this.setBoxValues, this);
			this.moduleEvent.on("AUTO_PLAY_BONUS_GAME", this.autoClick, this);
			this.moduleEvent.on("OPEN_ITEM", this.openBox, this);
			this.moduleEvent.on("OPEN_FINAL_ITEM", this.openFinalBox, this);
			this.moduleEvent.on("OPEN_ALL_ITEMS", this.openAllBoxes, this);
			this.moduleEvent.on("RESUME_BONUS_GAME", this.resumeTable, this);
			this.moduleEvent.on("RESET_BONUS_GAME", this.resetTable, this);
			this.moduleEvent.on("BLOCK_BONUS_GAME", this.disableAllBoxes, this);
			this.moduleEvent.on("UNBLOCK_BONUS_GAME", this.enableAllBoxes, this);
		}
	}

	randRange(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	initBoxes(): void {
		const { COL_NUMBER, ROW_NUMBER, WIDTH_STEP, HEIGHT_STEP } = this._config;
		this.startX = (-COL_NUMBER / 2) * WIDTH_STEP + WIDTH_STEP / 2;
		this.startY = (ROW_NUMBER / 2) * HEIGHT_STEP - HEIGHT_STEP / 2;

		const maxBox = COL_NUMBER * ROW_NUMBER;
		this.listBoxes = [];
		this.resultList = [];
		for (let index = 0; index < maxBox; index++) {
			const box = instantiate(this.boxPrefab);
			this.node.addChild(box);
			box.active = true;
			box["boxIndex"] = index;
			this.listBoxes.push(box);
			box.setPosition(this.getPosByIndex(index));
			box.emit("INIT", index, this._config);
		}
	}

	getBonusGameConfig(): BonusTableConfig {
		return this.getComponent(BonusTableConfig);
	}

	getBonusGameData(): BonusTableData {
		return this.getComponent(BonusTableData);
	}

	setBoxValues(betId: string): void {
		const { REWARD_BOX_VALUE, JACKPOT_BOX_VALUE, JACKPOT_BOX_VALUE_2 } = this._config;
		this.boxValues = [];
		if (this._config.bonusType === BonusType.RewardBox) {
			this.boxValues = REWARD_BOX_VALUE;
		} else if (this._config.bonusType === BonusType.JackpotBox) {
			this.boxValues = JACKPOT_BOX_VALUE;
		} else if (this._config.bonusType === BonusType.JackpotBox4L) {
			const extraBetKey = betId[1];
			const isSmallExtraBet = Number(extraBetKey) < 3;
			this.boxValues = isSmallExtraBet ? JACKPOT_BOX_VALUE : JACKPOT_BOX_VALUE_2;
		}
	}

	getPosByIndex(index: number): cc.Vec3 {
		const { ROW_NUMBER, WIDTH_STEP, HEIGHT_STEP } = this._config;
		let x = this.startX + WIDTH_STEP * Math.floor(index / ROW_NUMBER);
		let y = this.startY - HEIGHT_STEP * (index % ROW_NUMBER);
		return v3(x, y);
	}

	openBox(index, value: any): void {
		const bonusValue = value || this._data.getBonusValue();
		this.listBoxes[index].emit("BOX_OPEN", bonusValue);
	}

	openFinalBox(index, value: any): Promise<void> {
		const bonusValue = value || this._data.getBonusValue();
		return new Promise(resolve => {
			this.listBoxes[index].emit("BOX_OPEN", bonusValue, () => {
				resolve();
			});
		});
	}

	openAllBoxes(result: any): Promise<void> {
		this.result = result || this._data.getBonusGameMatrix();
		if (this._config.TOTAL_ITEM === 1) {
			return Promise.resolve();
		}
		this.updateCurrentMatrix();
		for (let i = 0; i < this.listBoxes.length; i++) {
			if (this.listBoxes[i]["isOpen"] === false) {
				let randValue = this.getRandomValue();
				this.listBoxes[i].emit("BOX_OPEN", randValue);
				this.listBoxes[i].emit("DIM");
			}
		}
		return new Promise(resolve => {
			this.scheduleOnce(() => {
				resolve();
			}, this._config.DELAY_OPEN_ALL_BOX);
		});
	}

	resumeTable(data: any[]): Promise<void> {
		const bonusData = data || this._data.getBonusGameMatrix();
		if (!bonusData) {
			return Promise.resolve();
		}
		for (let i = 0; i < bonusData.length; i++) {
			if (bonusData[i] !== this._config.DEFAULT_BONUS_VALUE) {
				this.listBoxes[i].emit("BOX_OPEN", bonusData[i]);
			}
		}
		return Promise.resolve();
	}

	resetTable(): void {
		for (let i = 0; i < this.listBoxes.length; i++) {
			this.listBoxes[i].emit("BOX_RESET");
		}
		this.resultList = [];
	}

	autoClick(): void {
		const index = this.randRange(0, this.listBoxes.length);
		if (this.listBoxes[index]["isOpen"]) {
			this.autoClick();
		} else {
			this.listBoxes[index].emit("ON_CLICK_ITEM", null, true);
		}
	}

	updateCurrentMatrix(): void {
		this.resultList = this.boxValues.map((item) => {
			return { value: item.value, count: item.count, currentCount: 0 };
		});
		for (let index = 0; index < this.listBoxes.length; index++) {
			if (this.listBoxes[index]["isOpen"]) {
				let item = this.resultList.find((item) => item.value === this.result[index]);
				if (item) {
					item.currentCount++;
				}
			}
		}
	}

	getRandomValue(): number {
		const index = this.randRange(0, this.resultList.length);
		const { currentCount, count } = this.resultList[index];
		if (currentCount < count) {
			this.resultList[index].currentCount++;
			return this.resultList[index].value;
		} else {
			return this.getRandomValue();
		}
	}

	disableAllBoxes(): void {
		this.listBoxes.forEach((box) => box.emit("DISABLE_CLICK"));
	}

	enableAllBoxes(): void {
		this.listBoxes.forEach((box) => {
			if (!box["isOpen"]) {
				box.emit("ENABLE_CLICK");
			}
		});
	}
}

```
