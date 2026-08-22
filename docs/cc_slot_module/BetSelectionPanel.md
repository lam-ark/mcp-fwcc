# BetSelectionPanel

> **Source Path**: `assets/cc-common/cc-slot-module/BasePortrait/BetSelectionPanel/BetSelectionPanel.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BetSelectionPanel`** extends `BaseUIPopup`

## CC Properties
- `betSelectionItem`
- `scrollViewDenom`
- `scrollViewTotal`
- `scrollContentDenom`
- `scrollContentTotal`
- `totalCreditLabel`
- `maxBetBtn`

## Key Methods
- `onLoadExtend(): void`
- `setupObserver(): void`
- `updateMainBets(): void`
- `updateTotalCreditLabel(): void`
- `onUpdateBetLineNumber(): void`
- `init(): void`
- `touchUpViewTotal(): void`
- `touchUpViewDenom(): void`
- `onMouseWheel(): void`
- `onScrollingTotal(): void`
- `onScrollingDenom(): void`
- `update(): void`
- `createTotalBetItem(): void`
- `createBetDenomItem(): void`
- `createItem(): cc.Node`

## Source Implementation
```typescript
const { _decorator, instantiate, Node, tween, v2, Vec2, Layout } = cc;
import { BetSelectionItem } from "./BetSelectionItem";
import { BaseUIPopup } from "../../Popup/BaseUIPopup";
import { GameLogicUIEvents } from "../../Core/GameLogicUIEvents";
const { inject, MoneyFormatter } = eno;
const { ccclass, property } = _decorator;

@ccclass
export class BetSelectionPanel extends BaseUIPopup {
	@inject(MoneyFormatter) moneyFormatter: any;
	@property(cc.Prefab) betSelectionItem: cc.Prefab = null;
	@property({ type: cc.ScrollView }) scrollViewDenom: cc.ScrollView = null;
	@property({ type: cc.ScrollView }) scrollViewTotal: cc.ScrollView = null;
	@property(cc.Node) scrollContentDenom: cc.Node = null;
	@property(cc.Node) scrollContentTotal: cc.Node = null;
	@property(cc.Label) totalCreditLabel: cc.Label = null;
	@property(cc.Button) maxBetBtn: cc.Button = null;
	@property scrollTime: number = 0.15;
	@property bufferTop: number = 1;
	@property bufferBot: number = 1;

	mapBetIdWithIndex = {};
	currentBetId: string;
	showItems: number = 0;
	startPosY: number = 0;
	isScrolling: boolean = false;
	totalCredit: number = 0;

	_tweenScrollingDenom: any = null;
	_tweenScrollingTotal: any = null;

	tweenShow = null;

	mouseWheelTime = 0;
	mouseWheelTotal = 0;
	mouseWheelDenom = 0;

	isTouchUpViewTotal = false;
	isTouchUpViewDenom = false;
	betModel: eno.BetData = null;
	uiManagerData: eno.UIManagerData = null;
	mainBets = {};
	totalBetItems = [];
	betDenomItems = [];
	isInited: boolean = false;

	onLoadExtend(): void {
		this.scrollViewDenom.node.on('scroll-ended', this.onScrollViewDenomEnded, this);
		this.scrollViewDenom.node.on('touch-up', this.touchUpViewDenom, this);
		this.scrollViewDenom.node.on(Node.EventType.TOUCH_END, this.touchUpViewDenom, this);
		this.scrollViewDenom.node.on(Node.EventType.TOUCH_CANCEL, this.touchUpViewDenom, this);
		this.scrollViewDenom.node.on(Node.EventType.MOUSE_WHEEL, this.onMouseWheel, this);

		this.scrollViewTotal.node.on('scroll-ended', this.onScrollViewTotalEnded, this);
		this.scrollViewTotal.node.on('touch-up', this.touchUpViewTotal, this);
		this.scrollViewTotal.node.on(Node.EventType.TOUCH_END, this.touchUpViewTotal, this);
		this.scrollViewTotal.node.on(Node.EventType.TOUCH_CANCEL, this.touchUpViewTotal, this);
		this.scrollViewTotal.node.on(Node.EventType.MOUSE_WHEEL, this.onMouseWheel, this);

		this.startPosY = this.scrollContentTotal.position.y;
		this.setupObserver();
		super.onLoadExtend();
	}

	setupObserver(): void {
		this.betModel = this.gameLogic.getDataModel().BetData;
		this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
		this.observer.watch(this.betModel, 'totalCredit', this.updateTotalCreditLabel.bind(this), this);
		this.observer.watch(this.betModel, "betLineNumber", this.onUpdateBetLineNumber.bind(this), this);
		this.observer.watch(this.betModel, 'mainBets', this.updateMainBets.bind(this),this);
		this.observer.watch(this.uiManagerData, "isBetSelectionPanelOpen", this.onBetSelectionPanelOpen.bind(this), this);
	};

	updateMainBets(mainBets: any): void {
		this.mainBets = mainBets;
	}

	updateTotalCreditLabel(value: number): void {
		if (this.betModel.isBetLine()) {
			return;
		}
		this.totalCredit = value;
		this.totalCreditLabel.string = `${this.moneyFormatter.formatBet(value)}`;
	}

	onUpdateBetLineNumber(value: number): void {
		if (!this.betModel.isBetLine()) {
			return;
		}
		this.totalCredit = value;
		this.totalCreditLabel.string = `${value}`;
	}

	init(): void {
		if (this.isInited) {
			return;
		}
		this.isInited = true;
		this.addBufferItem(true);
		Object.keys(this.mainBets).forEach((betId, index) => {
			this.createBetDenomItem(betId);
			this.createTotalBetItem(betId);
			this.mapBetIdWithIndex[betId] = index;
		});
		this.showItems = Object.keys(this.mainBets).length;
		this.addBufferItem(false);
	}

	touchUpViewTotal(): void {
		this.isTouchUpViewTotal = true;
		this.mouseWheelTotal = 0.15;
	}

	touchUpViewDenom(): void {
		this.isTouchUpViewDenom = true;
		this.mouseWheelDenom = 0.15;
	}

	onMouseWheel(): void {
		this.mouseWheelTime = 0.15;
	}

	onScrollingTotal(): void {}

	onScrollingDenom(): void {
		this.mouseWheelDenom = 0.15;
	}

	update(dt: number): void {
		if (this.mouseWheelTime > 0) {
			this.mouseWheelTime -= dt;
			if (this.mouseWheelTime < 0) {
				this.onScrollViewTotalEnded();
				this.onScrollViewDenomEnded();
			}
		}

		if (this.isTouchUpViewTotal && this.mouseWheelTotal > 0) {
			this.mouseWheelTotal -= dt;
			if (this.mouseWheelTotal < 0) {
				this.isTouchUpViewTotal = false;
				this.onScrollViewTotalEnded();
				this.onScrollViewDenomEnded();
			}
		}

		if (this.isTouchUpViewDenom && this.mouseWheelDenom > 0) {
			this.mouseWheelDenom -= dt;
			if (this.mouseWheelDenom < 0) {
				this.isTouchUpViewDenom = false;
				this.onScrollViewDenomEnded();
				this.onScrollViewTotalEnded();
			}
		}
	}

	createTotalBetItem(betId: string): void {
		const item = this.createItem(this.scrollContentTotal);
		const comp = item.getComponent(BetSelectionItem);
		const totalBet = this.mainBets[betId];
		comp.init(totalBet, betId, this.scrollItemClick.bind(this, betId, false));
		this.totalBetItems.push(comp);
	}

	createBetDenomItem(betId: string): void {
		const item = this.createItem(this.scrollContentDenom);
		const comp = item.getComponent(BetSelectionItem);
		const totalBet = this.mainBets[betId];
		const betDenom = totalBet / this.totalCredit;
		comp.init(betDenom, betId, this.scrollItemClick.bind(this, betId, true));
		this.betDenomItems.push(comp);
	}

	createItem(holder: cc.Node): cc.Node {
		const scrollItem = instantiate(this.betSelectionItem);
		scrollItem.active = true;
		holder.addChild(scrollItem);
		return scrollItem;
	}

	addBufferItem(isTopBuffer: boolean): void {
		const numOfItem = isTopBuffer ? this.bufferTop : this.bufferBot;
		for (let index = 0; index < numOfItem; index++) {
			const defaultValue = isTopBuffer ? (index === 0 ? this.getEmptyValue() : this.getEmptyValue2()) : (index === 0 ? this.getEmptyValue2() : this.getEmptyValue());

			const item1 = this.createItem(this.scrollContentTotal);
			const comp1 = item1.getComponent(BetSelectionItem);
			comp1.updateDefaultValue(defaultValue);

			const item2 = this.createItem(this.scrollContentDenom);
			const comp2 = item2.getComponent(BetSelectionItem);
			comp2.updateDefaultValue(defaultValue);
		}
	}

	getEmptyValue(): string {
		return "";
	}

	getEmptyValue2(): string {
		return "--";
	}

	selectCurrentBet(): void {
		this.updateLayout();
		const betKey = this.betModel.betKey || "1";
		this.currentBetId = betKey;
		const index = this.mapBetIdWithIndex[betKey];
		this.maxBetBtn.interactable = index < this.showItems - 1;
		const offsetY = this.calculateOffsetY(index);
		this.scrollViewTotal.scrollToOffset(v2(0, offsetY), 0);
		this.scrollViewDenom.scrollToOffset(v2(0, offsetY), 0);
		this.setHighlight();
	}

	calculateOffsetY(index: number): number {
		const scrollItem = this.totalBetItems[index];
		const scrollItemHeight = scrollItem.node.height;
		return index * scrollItemHeight + (this.bufferTop - 1) * scrollItemHeight;
	}

	findClosestItemIndex(scrollOffsetY: number): number {
		const itemHeight = this.betDenomItems[0].node.height;
		const bufferOffset = (this.bufferTop - 1) * itemHeight;
		const actualScrollOffset = scrollOffsetY - bufferOffset;
		let closestIndex = Math.round(actualScrollOffset / itemHeight);
		return closestIndex;
	}

	updateLayout(): void {
		const layoutTotal = this.scrollViewTotal.getComponentInChildren(Layout);
        const layoutDenom = this.scrollViewDenom.getComponentInChildren(Layout);

        if (layoutTotal) {
            layoutTotal.updateLayout();
        }
        if (layoutDenom) {
            layoutDenom.updateLayout();
        }
	}

	onSelectMaxBet(): void {
		if (this.isScrolling) {
			return;
		}
		this.maxBetBtn.interactable = false;
		this.soundPlayer.playSFXClick();
		const index = this.showItems - 1;
		const scrollItem = this.totalBetItems[index];
		const scrollItemHeight = scrollItem.node.height;
		const offsetY = index * scrollItemHeight + (this.bufferTop - 1) * scrollItemHeight;
		this.scrollViewTotal.scrollToOffset(v2(0, offsetY), this.scrollTime);
		this.scrollViewDenom.scrollToOffset(v2(0, offsetY), this.scrollTime);

		const comp = scrollItem.getComponent(BetSelectionItem);
		this.currentBetId = comp.betId;
		this.setHighlight();
	}

	setHighlight(): void {
		const scrollIndex = this.mapBetIdWithIndex[this.currentBetId];
		this.highlightScrollItem(this.totalBetItems, scrollIndex);
		this.highlightScrollItem(this.betDenomItems, scrollIndex);
	}

	highlightScrollItem(items: BetSelectionItem[], scrollIndex: number): void {
		items.filter((item) => item.betId !== "" && item.betId !== "--").forEach((item, index) => {
			item.setHighlight(scrollIndex === index);
		});
	}

	onConfirmBet(): void {
		this.soundPlayer.playSFXClick();
		if (this.currentBetId != this.betModel.betKey) {
			this.gameLogic.emit(GameLogicUIEvents.UPDATE_BET_ID, this.getBetId());
		}
		this.closePanel();
	}

	getBetId(): string {
		return `${this.currentBetId}${this.betModel.extraBetKey}`;
	}

	scrollItemClick(betId: string, isDenom: boolean): void {
		if (this.isScrolling) {
			return;
		}
		this.currentBetId = betId;
		const scrollIndex = this.mapBetIdWithIndex[betId];
		this.maxBetBtn.interactable = scrollIndex < this.showItems - 1;
		this.soundPlayer.playSFXClick();
		const scrollItem = isDenom ? this.betDenomItems[scrollIndex] : this.totalBetItems[scrollIndex];
		if (!scrollItem) {
			return;
		}
		const offsetY = this.calculateOffsetY(scrollIndex);
		this.onScrollToBetId(isDenom, offsetY);
		this.setHighlight();
	}

	onScrollViewTotalEnded(): void {
		this.onScrollViewEnd();
	}

	onScrollViewDenomEnded(): void {
		this.onScrollViewEnd(true);
	}

	onScrollViewEnd(isDenom = false): void {
		if (this.isScrolling) {
			return;
		}
		const scrollOffetY = isDenom ? this.scrollViewDenom.getScrollOffset().y : this.scrollViewTotal.getScrollOffset().y;
		
		// Find closest valid item index
		const scrollIndex = this.findClosestItemIndex(scrollOffetY);
		const scrollItem = isDenom ? this.betDenomItems[scrollIndex] : this.totalBetItems[scrollIndex];
		if (!scrollItem) {
			return;
		}
		this.currentBetId = scrollItem.getComponent(BetSelectionItem).betId;
		const offsetY = this.calculateOffsetY(scrollIndex);
		this.maxBetBtn.interactable = scrollIndex < this.showItems - 1;
		this.onScrollToBetId(isDenom, offsetY, true);
	}

	onScrollToBetId(isDenom, offsetY, isForce = false): void {
		if (isDenom) {
			this.onScrollToBetIdDenom(isDenom, offsetY, isForce);
		} else {
			this.onScrollToBetIdTotal(isDenom, offsetY, isForce);
		}
	}

	onScrollToBetIdDenom(isDenom, offsetY = 0, isForce = false): void {
		this.isScrolling = true;
		let firstScrollView: cc.ScrollView = isDenom ? this.scrollViewDenom : this.scrollViewTotal;
		let secondScrollView: cc.ScrollView = isDenom ? this.scrollViewTotal : this.scrollViewDenom;
		firstScrollView.scrollToOffset(new Vec2(0, offsetY), this.scrollTime);
		this._tweenScrollingDenom && this._tweenScrollingDenom.stop();
		this._tweenScrollingDenom = tween(this)
			.delay(isForce ? 0 : this.scrollTime)
			.call(() => {
				secondScrollView.scrollToOffset(new Vec2(0, offsetY), this.scrollTime);
			})
			.delay(this.scrollTime)
			.call(() => {
				this.setHighlight();
				this.isScrolling = false;
				this._tweenScrollingDenom = null;
			})
			.start();
	}

	onScrollToBetIdTotal(isDenom, offsetY = 0, isForce = false): void {
		this.isScrolling = true;
		let firstScrollView: cc.ScrollView = isDenom ? this.scrollViewDenom : this.scrollViewTotal;
		let secondScrollView: cc.ScrollView = isDenom ? this.scrollViewTotal : this.scrollViewDenom;
		firstScrollView.scrollToOffset(new Vec2(0, offsetY), this.scrollTime);
		this._tweenScrollingTotal && this._tweenScrollingTotal.stop();
		this._tweenScrollingTotal = tween(this)
			.delay(isForce ? 0 : this.scrollTime)
			.call(() => {
				secondScrollView.scrollToOffset(new Vec2(0, offsetY), this.scrollTime);
			})
			.delay(this.scrollTime)
			.call(() => {
				this.setHighlight();
				this.isScrolling = false;
				this._tweenScrollingTotal = null;
			})
			.start();
	}

	onBetSelectionPanelOpen(isOpen: boolean): void {
		this.togglePopup(isOpen);
		if (isOpen) {
			this.openPanel();
		}
	}

	openPanel(): void {
		this.playSfxClick();
		this.init();
		this.selectCurrentBet();
	}

	closePanel(): void {
		this.playSfxClick();
		this.onBetSelectionPanelOpen(false);
	}

	onDisable(): void {
		this.gameLogic.emit(GameLogicUIEvents.CLOSE_BET_SELECTION_PANEL);
	}

	onDestroy(): void {
		this._tweenScrollingDenom && this._tweenScrollingDenom.stop();
		this._tweenScrollingTotal && this._tweenScrollingTotal.stop();
		this.observer.releaseAll(this.betModel, this);
		this.observer.releaseAll(this.uiManagerData, this);
	}
}

```
