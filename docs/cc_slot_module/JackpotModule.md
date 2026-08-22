# JackpotModule

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/Jackpot/JackpotModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`JackpotModuleItem`**
- **`export`**
- **`JackpotModule`** extends `SlotBaseModule`

## CC Properties
- `label`
- `jackpotType`
- `jackpotItems`

## Key Methods
- `onLoadExtend(): void`
- `setupObserver(): void`
- `setupJackpotObserver(): void`
- `updateJackpotData(): void`
- `showJackpot(): void`
- `updateJackpotValue(): void`
- `renderAllJackpot(): void`
- `onSwitchMode(): void`
- `pauseJackpot(): void`
- `resumeJackpot(): void`
- `onDestroy(): void`
- `getEnumKeyByValue(): string | null`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotBaseModule } from "../../Core/SlotBaseModule";
import { JACKPOT_TYPE_ENUM } from "../../Components/Common/SlotEnum";
import { GameUIEvents } from "../../Core/GameUIEvents";
const { ccclass, property } = _decorator;

@ccclass("JackpotModuleItem")
export class JackpotModuleItem {
	@property(cc.Label)
	label: cc.Label = null;

	@property({ type: JACKPOT_TYPE_ENUM })
	jackpotType = JACKPOT_TYPE_ENUM.GRAND;
}

const JACKPOT_PROGRESSIVE_TIME = {
	INIT: 0.3,
	PROGRESS: 3,
}

@ccclass
export class JackpotModule extends SlotBaseModule {
	@property([JackpotModuleItem])
	jackpotItems: JackpotModuleItem[] = [];

	isPauseJackpot: boolean = false;
	jackpotData: eno.JackpotData;
	uiManagerData: eno.UIManagerData;
	modelName: string = "JackpotData";
	jackpotObservers: any[] = [];
	observerJPIndex: Function = null;
	currentData: { [key: string]: { [key: string]: any } } = {};

	onLoadExtend(): void {
		this.eventManager.on(GameUIEvents.JACKPOT.PAUSE_JACKPOT, this.pauseJackpot, this);
		this.eventManager.on(GameUIEvents.JACKPOT.RESUME_JACKPOT, this.resumeJackpot, this);
		this.eventManager.on(GameUIEvents.JACKPOT.UPDATE_JACKPOT_VALUE, this.updateJackpotValue, this);

		this.jackpotData = this.gameLogic.getDataModel()[this.modelName];
		this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;

		this.setupJackpotObserver();
		this.setupObserver();
	}

	setupObserver(): void {
		this.observer.watch(this.jackpotData, "index", (index) => {
			this.currentData[index] = this.jackpotData.jackpots[index];

			this.observerJPIndex && this.observerJPIndex();
			this.observerJPIndex = this.observer.watch(this.jackpotData, `jackpots.${index}`, (data) => {
				
				this.currentData[index] = this.jackpotData.jackpots[index];
				this.renderAllJackpot(data, JACKPOT_PROGRESSIVE_TIME.PROGRESS);
			}, this, { fireImmediately: true, canTriggerSameValue: true });

			this.renderAllJackpot(this.jackpotData.jackpots[index]);
		}, this, { fireImmediately: true });

		this.observer.watch(this.jackpotData, "pauseUpdateJackpot", (isPause) => {
			this.isPauseJackpot = isPause;
		}, this, { fireImmediately: true });

		this.observer.watch(this.jackpotData, "jackpots", this.updateJackpotData.bind(this), this, { fireImmediately: true });
		this.observer.watch(this.uiManagerData, "isTrialModeActive", this.onSwitchMode.bind(this), this);
	}

	setupJackpotObserver(): void {
		this.observer.watch(this.uiManagerData, "isJackpotActive", this.showJackpot.bind(this), this, { fireImmediately: true });
	}

	updateJackpotData(jackpots: any): void {
		this.renderAllJackpot(jackpots[this.jackpotData.index]);
	}

	showJackpot(isActive: boolean): void {
		this.node.active = isActive;
	}

	updateJackpotValue({ jackpotType, jackpotValue }: { jackpotType: string, jackpotValue: number }): void {
		const jackpotIndex = JACKPOT_TYPE_ENUM[jackpotType];
		this.jackpotItems.forEach((item) => {
			if (item.jackpotType === jackpotIndex) {
				item.label.node.emit("ON_UPDATE_VALUE", jackpotValue, JACKPOT_PROGRESSIVE_TIME.INIT);
			}
		});
	}

	renderAllJackpot(data: any, time: number = JACKPOT_PROGRESSIVE_TIME.INIT): void {
		if (!data || this.jackpotData.pauseUpdateJackpot) {
			return;
		}

		this.jackpotItems.forEach((item) => {
			let jpType = getEnumKeyByValue(JACKPOT_TYPE_ENUM, item.jackpotType);
			item.label.node.emit("ON_UPDATE_VALUE", data[jpType], time);
		});
	}
	
	onSwitchMode(isTrialModeActive: boolean): void {
		if (isTrialModeActive) {
			this.resumeJackpot();
		}
	}

	pauseJackpot(): void {
		this.jackpotData.setPauseJackpot(true);
	}

	// isForce is used to force the jackpot to resume immediately without progressive time
	resumeJackpot(isForce: boolean = false): void {
		this.jackpotData.setPauseJackpot(false);
		
		this.renderAllJackpot(this.currentData[this.jackpotData.index], isForce ? 0 : JACKPOT_PROGRESSIVE_TIME.PROGRESS);
	}

	onDestroy(): void {
		this.observer.releaseAll(this.uiManagerData, this);
		this.observer.releaseAll(this.jackpotData, this);
	}
}

//TODO move to utils
function getEnumKeyByValue(enumObj: any, value: any): string | null {
	for (let key in enumObj) {
		if (enumObj[key] === value) {
			return key;
		}
	}

	return null;
}
```
