# InfoPanel

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/Info/InfoPanel.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`InfoPanel`** extends `BaseUIPopup`

## CC Properties
- `public`
- `public`
- `public`
- `public`
- `public`
- `scrollView`

## Key Methods
- `onLoadExtend(): void`
- `setupObserver(): void`
- `showInfoPanel(): void`
- `onEnable(): void`
- `pageViewEvent(): void`
- `next(): void`
- `previous(): void`
- `activeButtons(): void`
- `resetInfo(): void`
- `onExit(): void`
- `onResetPageView(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { GameLogicUIEvents } from "../../Core/GameLogicUIEvents";
import { BaseUIPopup } from "../BaseUIPopup";
const { ccclass, property } = _decorator;

@ccclass
export class InfoPanel extends BaseUIPopup {
	@property({ type: cc.Button })
	public nextBtn: cc.Button = null;
	@property({ type: cc.Button })
	public preBtn: cc.Button = null;
	@property({ type: cc.Sprite })
	public infoTitle: cc.Sprite = null;
	@property({ type: cc.SpriteFrame })
	public titles = [];

	@property({ type: cc.PageView, tooltip: "Using for Landscape Game" })
	public pageView: cc.PageView = null;

	@property({ type: cc.ScrollView, tooltip: "Using For Portrait Game" })
    scrollView: cc.ScrollView = null;
	
	curInfoID: number = 0;
	uiManagerData = null;

	onLoadExtend(): void {
		this.node.on("NEXT_GAME_INFO", this.next, this);
		this.node.on("PREVIOUS_GAME_INFO", this.previous, this);
		this.curInfoID = 0;
		this.pageView.node.on("page-turning", this.pageViewEvent, this);
		this.activeButtons(this.curInfoID);
		this.setupObserver();
		super.onLoadExtend();
	}

	setupObserver(): void {
		this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
		this.observer.watch(this.uiManagerData, 'isInfoOpen', this.showInfoPanel.bind(this), this);
	};

	showInfoPanel(isActive: boolean): void {
		this.togglePopup(isActive);
	}

	onEnable(): void {
		this.onResetPageView();
		this.resetInfo();
	}

	pageViewEvent(): void {
		let newIndex = this.pageView.getCurrentPageIndex();
		if (Math.abs(newIndex - this.curInfoID) !== 1) {
			this.pageView.scrollToPage(this.curInfoID, 0.1);
			return;
		}
		this.curInfoID = newIndex;
		this.activeButtons(this.curInfoID);
	}

	next(): void {
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
		this.pageView.scrollToPage(this.curInfoID + 1, 0);
		this.curInfoID++;
		this.activeButtons(this.curInfoID);
	}

	previous(): void {
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
		this.pageView.scrollToPage(this.curInfoID - 1, 0);
		this.curInfoID--;
		this.activeButtons(this.curInfoID);
	}

	activeButtons(id: number): void {
		const { nextBtn, preBtn, infoTitle } = this;

		const totalInfo = this.pageView.node.getChildByName("view").getChildByName("content").children.length;
		if (id >= totalInfo - 1) {
			id = totalInfo - 1;
			nextBtn && (nextBtn.interactable = false);
		} else {
			nextBtn && (nextBtn.interactable = true);
		}

		if (id <= 0) {
			id = 0;
			preBtn && (preBtn.interactable = false);
		} else {
			preBtn && (preBtn.interactable = true);
		}
		this.curInfoID = id;
		if (infoTitle) {
			infoTitle.spriteFrame = this.titles[this.curInfoID];
		}
	}

	resetInfo(): void {
		this.pageView.scrollToPage(0, 0);
		this.pageView._lastPageIdx = 0;
		this.curInfoID = 0;
		this.activeButtons(this.curInfoID);
		if (this.scrollView) {
            this.scrollView.scrollToTop(0);
        }
	}

	onExit(): void {
		if (this.popupBehavior && this.popupBehavior.isPlaying()) {
			return;
		}
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
		this.gameLogic.emit(GameLogicUIEvents.CLOSE_INFO_PANEL);
	}

	onResetPageView(): void {
		this.pageView.node.active = false;
		this.scheduleOnce(() => {
			this.pageView.node.active = true;
		});
	}

	protected onDestroy(): void {
		this.observer.releaseAll(this.uiManagerData, this);
	}
}

```
