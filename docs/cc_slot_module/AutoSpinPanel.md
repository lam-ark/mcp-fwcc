# AutoSpinPanel

> **Source Path**: `assets/cc-common/cc-slot-module/BasePortrait/AutoSpinPanel/AutoSpinPanel.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`AutoSpinPanel`** extends `BaseUIPopup`

## CC Properties
- `public`
- `public`

## Key Methods
- `onLoadExtend(): void`
- `setupObserver(): void`
- `init(): void`
- `setDefaultSelectedIndex(): void`
- `onSelectAutoSpin(): void`
- `onStartAutoSpin(): void`
- `onAutoSpinPanelOpen(): void`
- `closePanel(): void`
- `playSfxClick(): void`
- `onEnable(): void`
- `onDisable(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator, instantiate } = cc;
import { AutoSpinPanelConfig } from "./AutoSpinPanelConfig";
import { AutoSpinNumber } from "./AutoSpinNumber";
import { BaseUIPopup } from "../../Popup/BaseUIPopup";
import { GameLogicUIEvents } from "../../Core/GameLogicUIEvents";
const { ccclass, property } = _decorator;

@ccclass
export class AutoSpinPanel extends BaseUIPopup {
	@property(cc.Node)
	public numberHolder: cc.Node = null;
	@property(cc.Prefab)
	public autoSpinNumberPrefab: cc.Prefab = null;

	config: AutoSpinPanelConfig = null;
	currentSelectedIndex: number = -1;
	autoSpinOption: Record<string, AutoSpinNumber> = {};
	uiManagerData = null;
	initialized: boolean = false;

	onLoadExtend(): void {
		this.setupObserver();
		this.init();
		super.onLoadExtend();
	}

	setupObserver(): void {
		this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
		this.observer.watch(this.uiManagerData, "isAutoSpinPanelOpen", this.onAutoSpinPanelOpen.bind(this), this);
	}

	init(): void {
		this.config = this.getComponent(AutoSpinPanelConfig);
		this.config.AUTO_SPIN_NUMBERS.forEach((number, index) => {
			const numberNode = instantiate(this.autoSpinNumberPrefab);
			numberNode.setParent(this.numberHolder);
			let numberComp = numberNode.getComponent(AutoSpinNumber);
			numberComp.init(number, this.onSelectAutoSpin.bind(this, index));
			this.autoSpinOption[index] = numberComp;
		});
	}

	setDefaultSelectedIndex(): void {
		this.currentSelectedIndex = this.config.AUTO_SPIN_NUMBERS.length - 1;
		this.onSelectAutoSpin(this.currentSelectedIndex);
		this.initialized = true;
	}

	onSelectAutoSpin(index: number): void {
		this.playSfxClick();
		this.currentSelectedIndex = index;

		for (const optionIndex in this.autoSpinOption) {
			const numberComp = this.autoSpinOption[optionIndex];
			numberComp.setHighlight(Number(optionIndex) == index);
		}
	}

	onStartAutoSpin(): void {
		this.playSfxClick();
		const selectedSpinTimes = this.config.AUTO_SPIN_NUMBERS[this.currentSelectedIndex];
		this.gameLogic.emit(GameLogicUIEvents.START_AUTO_SPIN, selectedSpinTimes);
		this.onAutoSpinPanelOpen(false);
	}

	onAutoSpinPanelOpen(isOpen: boolean): void {
		this.togglePopup(isOpen);
	}

	closePanel(): void {
		this.playSfxClick();
		this.onAutoSpinPanelOpen(false);
	}

	playSfxClick(): void {
		if (this.soundPlayer && this.initialized) {
			this.soundPlayer.playSFXClick();
		}
	}

	protected onEnable(): void {
		this.setDefaultSelectedIndex();
	}

	protected onDisable(): void {
		this.gameLogic.emit(GameLogicUIEvents.CLOSE_AUTO_SPIN_PANEL);
	}

	protected onDestroy(): void {
		this.observer.releaseAll(this.uiManagerData, this);
	}
}

```
