# TrialModeManager

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/TrialMode/TrialModeManager.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`TrialModeManager`** extends `SlotBaseModule`

## CC Properties
- `protected`
- `useSelectionPanel`

## Key Methods
- `onLoadExtend(): void`
- `setupObserver(): void`
- `updateTrialModePanel(): void`
- `hideTrialModePanel(): void`
- `updateOptions(): void`
- `playOption(): void`
- `onSkipPressed(): void`
- `safeCheckTrialMode(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { TrialModeData } from "../../Components/Common/SlotEnum";
import { SlotBaseModule } from "../../Core/SlotBaseModule";
import { GameLogicUIEvents } from "../../Core/GameLogicUIEvents";
import { verifyTrialModeData } from "../../GameViewUnitTest";
import { HelpDocuments } from "../../Components/Common/HelpDocuments";
const { ccclass, property, help } = _decorator;
const { setOpacity } = eno;

@ccclass
@help(HelpDocuments.TRIAL_MODE_DOCUMENT)
export class TrialModeManager extends SlotBaseModule {
	@property([TrialModeData]) protected trialModeData: TrialModeData[] = [];
	@property({ tooltip: "Use selection panel when having more than one option" })
	useSelectionPanel: boolean = false;
	@property({
		type: cc.Node,
		visible: function () {
			return this.useSelectionPanel;
		},
	})
	trialModePanel: cc.Node = null;
	@property({
		type: cc.Node,
		visible: function () {
			return this.useSelectionPanel;
		},
	})
	optionHolder: cc.Node = null;
	trialModel = null;
	uiManagerData = null;

	onLoadExtend(): void {
		this.hideTrialModePanel();
		this.gameLogic.emit(GameLogicUIEvents.INIT_TRIAL_MODE, this.trialModeData);
		this.setupObserver();
	}

	setupObserver(): void {
		this.trialModel = this.gameLogic.getDataModel().TrialModeData;
		this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
		this.observer.watch(this.trialModel, "isPopupDisplay", (isOpen) => {
			this.updateTrialModePanel(isOpen);
		}, this, { fireImmediately: true });

		this.observer.watch(this.trialModel, "tutorialOptions", (options) => {
			this.updateOptions(options);
		}, this, { fireImmediately: true });

		this.observer.watch(this.uiManagerData, "isTrialModeActive", (isActive) => {
			this.safeCheckTrialMode(isActive);
		}, this, { fireImmediately: true });
	}

	updateTrialModePanel(isOpen): void {
		if (this.useSelectionPanel && this.trialModePanel) {
			this.trialModePanel.active = isOpen;
			setOpacity(this.trialModePanel, isOpen ? 255 : 0);
		}
	}

	hideTrialModePanel(): void {
		if (this.trialModePanel) {
			this.trialModePanel.active = false;
			setOpacity(this.trialModePanel, 0);
		}
	}

	updateOptions(options): void {
		if (!this.optionHolder || !this.optionHolder.children) {
			return;
		}
		this.optionHolder.children.forEach((option, index) => {
			let interactable = !options.includes(index);
			option.emit("SET_INTERACTABLE", interactable);
		});
	}

	playOption(_event, option): void {
		this.gameLogic.emit(GameLogicUIEvents.PLAY_TUTORIAL_OPTION, Number(option));
	}

	onSkipPressed(): void {
		this.gameLogic.emit(GameLogicUIEvents.SKIP_TRIAL_DATA);
	}

	safeCheckTrialMode(isActive: boolean): void {
		if (!isActive) {
			return;
		}
		const currency = this.gameLogic.getDataStore().getCurrency();
		if (!verifyTrialModeData(currency, this.trialModeData)) {
			cc.error(`[TrialModeManager] No data for currency: ${currency}, please check the TrialModeData`);
		}
	}

	protected onDestroy(): void {
		this.observer.releaseAll(this.trialModel, this);
		this.observer.releaseAll(this.uiManagerData, this);
	}
}

```
