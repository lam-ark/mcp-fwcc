# AutoSpinPanelv3

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/AutoSpinPanel/v3/AutoSpinPanelv3.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`AutoSpinPanelv3`** extends `BaseUIPopup`

## CC Properties
- `public`
- `public`
- `public`
- `public`
- `public`
- `public`
- `infinityText`

## Key Methods
- `onLoadExtend(): void`
- `start(): void`
- `onDisable(): void`
- `onDestroy(): void`
- `initializeConfig(): void`
- `setupObservers(): void`
- `localizeText(): void`
- `openPanel(): void`
- `closePanel(): void`
- `setupPanel(): void`
- `initializeNumberLabels(): void`
- `getDisplayTextForNumber(): string`
- `setupButtonEventListeners(): void`
- `removeButtonEventListeners(): void`
- `resetPanel(): void`

## Source Implementation
```typescript

import { HelpDocuments } from "../../../Components/Common/HelpDocuments";
import { GameLogicUIEvents } from "../../../Core/GameLogicUIEvents";
import { GameUIEvents } from "../../../Core/GameUIEvents";
import { BaseUIPopup } from "../../../Popup/BaseUIPopup";

import { AutoSpinConfigv3 } from "./AutoSpinConfigv3";
const { inject, MoneyFormatter, WALLET_TYPE } = eno;
const { ccclass, property, help } = cc._decorator;

/**
 * Auto Spin Panel v3
 * @description Auto Spin Panel v3 is a panel that allows the player to select the number of spins to play.
 * Displays single round cost and total cost. Includes confirm popup for validation.
 */
@ccclass
@help(HelpDocuments.AUTO_SPIN_PANEL_DOCUMENT)
export class AutoSpinPanelv3 extends BaseUIPopup {
	// Dependencies
	@inject(MoneyFormatter) moneyFormatter: eno.MoneyFormatter;

	// UI Components
	@property(cc.Button) public buttonList: cc.Button[] = [];
	@property(cc.Label) public numberList: cc.Label[] = [];
	@property(cc.Label) public singleRoundCostLabel: cc.Label = null;
	@property(cc.Label) public totalCostLabel: cc.Label = null;
	@property(cc.Label) public tooltipLabel: cc.Label = null;
	@property(cc.Button) public confirmButton: cc.Button = null;
	@property() infinityText: string = '∞';

	// Data Models
	betData: eno.BetData = null;
	uiManagerData: eno.UIManagerData = null;
	config: AutoSpinConfigv3 = null;
	currentSelectedIndex: number = -1;
	private _walletManager: eno.WalletManager = null;

	// Constants
	SELECTED_COLOR = new cc.Color(255, 0, 0, 255);
	NORMAL_COLOR = new cc.Color(255, 255, 255, 255);
	NO_SELECTION_INDEX = -1;

	// ==================== Lifecycle Methods ====================
	onLoadExtend(): void {
		this.initializeConfig();
		this.setupObservers();
		super.onLoadExtend();
	}

	start(): void {
		this.localizeText();
	}

	protected onDisable(): void {
		this.gameLogic.emit(GameLogicUIEvents.CLOSE_AUTO_SPIN_PANEL);
	}

	protected onDestroy(): void {
		this.observer.releaseAll(this.uiManagerData, this);
		this.removeButtonEventListeners();
	}

	// ==================== Initialization Methods ====================
	initializeConfig(): void {
		this.config = this.getComponent(AutoSpinConfigv3);
	}

	setupObservers(): void {
		this.betData = this.gameLogic.getDataModel().BetData;
		this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
		this._walletManager = this.gameLogic.getWalletManager();
		this.observer.watch(
			this.uiManagerData,
			"isAutoSpinPanelOpen",
			(isOpen: boolean) => {
				if (isOpen) {
					this.openPanel();
				}
			},
			this
		);
	}

	localizeText(): void {
		const insufficientBalanceText = this.gameLogic.getGameText("INSUFFICIENT_BALANCE");
		this.tooltipLabel.string = insufficientBalanceText || "Insufficient balance";
	}

	// ==================== Panel Management Methods ====================
	openPanel(): void {
		this.playOpenAnimation();
		this.setupPanel();
	}

	closePanel(): void {
		this.disableAllButtons();
		this.resetPanel();
		this.playSfxClick();
		this.playCloseAnimation();
	}

	setupPanel(): void {
		this.resetPanel();
		this.initializeNumberLabels();
		this.setupButtonEventListeners();
		this.updateSingleRoundCost();
		this.updateButtonStates();
	}

	initializeNumberLabels(): void {
		this.config.AUTO_SPIN_NUMBERS.forEach((number, index) => {
			const displayText = this.getDisplayTextForNumber(number);
			this.numberList[index].string = displayText;
			this.resetNumberLabelStyle(index);
		});
	}

	getDisplayTextForNumber(number: number): string {
		return number === Number.MAX_SAFE_INTEGER ? this.infinityText : number.toString();
	}

	setupButtonEventListeners(): void {
		this.buttonList.forEach((button, index) => {
			button.node["autoSpinIndex"] = index;
			button.node.on(cc.Node.EventType.TOUCH_END, this.onSelectAutoSpin, this);
		});
	}

	removeButtonEventListeners(): void {
		this.buttonList.forEach((button) => {
			if (button.node) {
				button.node.off(cc.Node.EventType.TOUCH_END, this.onSelectAutoSpin, this);
			}
		});
	}

	resetPanel(): void {
		this.updateCostLabels(0, 0);
		this.currentSelectedIndex = this.NO_SELECTION_INDEX;
		this.hideTooltip();
		this.setConfirmButtonEnabled(false);
	}

	// ==================== Cost Calculation & Display Methods ====================
	updateSingleRoundCost(): void {
		const singleRoundCost = this.betData.totalBet;
		this.singleRoundCostLabel.string = this.moneyFormatter.formatMoney(singleRoundCost);
	}

	updateTotalCost(): void {
		if (this.currentSelectedIndex === this.NO_SELECTION_INDEX) {
			return;
		}
		const totalCost = this.calculateTotalCost(this.currentSelectedIndex);
		this.totalCostLabel.string = this.moneyFormatter.formatMoney(totalCost);
	}

	calculateTotalCost(index: number): number {
		if (index < 0 || index >= this.config.AUTO_SPIN_NUMBERS.length) {
			return 0;
		}
		const selectedSpinTimes = this.config.AUTO_SPIN_NUMBERS[index];
		return eno.FloatUtils.mul(selectedSpinTimes, this.betData.totalBet);
	}

	updateCostLabels(singleRoundCost: number, totalCost: number): void {
		this.singleRoundCostLabel.string = this.moneyFormatter.formatMoney(singleRoundCost);
		this.totalCostLabel.string = this.moneyFormatter.formatMoney(totalCost);
	}

	// ==================== Selection & Validation Methods ====================
	onSelectAutoSpin(evt: any): void {
		const selectedIndex = evt.target["autoSpinIndex"] as number;

		if (!this.isValidOption(selectedIndex)) {
			this.currentSelectedIndex = selectedIndex;
			this.handleInvalidSelection();
			return;
		}

		if (selectedIndex === this.currentSelectedIndex) {
			this.handleDuplicateSelection();
			return;
		}

		this.currentSelectedIndex = selectedIndex;
		this.handleValidSelection();
	}

	isValidOption(index: number): boolean {
		if (index < 0 || index >= this.config.AUTO_SPIN_NUMBERS.length) {
			return false;
		}

		const totalCost = this.calculateTotalCost(index);
		const currentBalance = this._walletManager.getCurrentWallet();

		const remainingBalance = eno.FloatUtils.minus(currentBalance, totalCost);
		return remainingBalance >= 0;
	}

	handleValidSelection(): void {
		this.playSfxClick();
		this.hideTooltip();
		this.setConfirmButtonEnabled(true);
		this.highlightSelectedIndex();
		this.updateTotalCost();
		this.updateSingleRoundCost();
	}

	handleInvalidSelection(): void {
		this.resetAllOptions();
		this.showTooltip();
		this.setConfirmButtonEnabled(false);
		this.updateTotalCost();
		this.updateSingleRoundCost();
		this.updateButtonStates();
	}

	handleDuplicateSelection(): void {
		this.hideTooltip();
		this.setConfirmButtonEnabled(true);
	}

	highlightSelectedIndex(): void {
		this.resetAllOptions();
		if (this.currentSelectedIndex !== this.NO_SELECTION_INDEX) {
			this.numberList[this.currentSelectedIndex].node.color = this.SELECTED_COLOR;
			this.buttonList[this.currentSelectedIndex].interactable = false;
		}
		this.updateButtonStates();
	}

	resetAllOptions(): void {
		this.numberList.forEach((_label, index) => {
			this.resetNumberLabelStyle(index);
		});
	}

	resetNumberLabelStyle(index: number): void {
		this.numberList[index].node.color = this.NORMAL_COLOR;
	}

	showTooltip(): void {
		this.tooltipLabel.node.active = true;
	}

	hideTooltip(): void {
		this.tooltipLabel.node.active = false;
	}

	setConfirmButtonEnabled(enabled: boolean): void {
		this.confirmButton.interactable = enabled;
	}

	// ==================== cc.Button State Management ====================
	updateButtonStates(): void {
		this.scheduleOnce(() => {
			this.buttonList.forEach((button, index) => {
				const isValid = this.isValidOption(index);
				const isSelected = index === this.currentSelectedIndex;
				button.interactable = isValid && !isSelected;
			});
		});
	}

	disableAllButtons(): void {
		this.buttonList.forEach((button) => {
			button.interactable = false;
		});
	}

	// ==================== Confirm & Auto Spin Methods ====================
	onAutoSpinConfirm(): void {
		this.playSfxClick();

		const autoSpinData = this.getAutoSpinData();
		const onConfirm = (): void => {
			this.gameLogic.emit(GameLogicUIEvents.START_AUTO_SPIN, autoSpinData.selectedSpinTimes);
			this.closePanel();
		};
		const onCancel = (): void => {
			// User can select again
		};

		this.eventManager.emit(
			GameUIEvents.AUTO_SPIN.SHOW_CONFIRM_AUTO_SPIN_POPUP,
			autoSpinData,
			onConfirm,
			onCancel
		);
	}

	getAutoSpinData(): { selectedSpinTimes: number; totalCost: number } {
		const selectedSpinTimes = this.config.AUTO_SPIN_NUMBERS[this.currentSelectedIndex];
		const totalCost = eno.FloatUtils.mul(selectedSpinTimes, this.betData.totalBet);
		return { selectedSpinTimes, totalCost };
	}

	// ==================== cc.Animation Methods ====================
	playOpenAnimation(): void {
		this.togglePopup(true);
	}

	playCloseAnimation(): void {
		this.togglePopup(false);
	}

	// ==================== Sound Methods ====================
	playSfxClick(): void {
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
	}
}

```
