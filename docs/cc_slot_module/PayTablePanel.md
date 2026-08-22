# PayTablePanel

> **Source Path**: `assets/cc-common/cc-slot-module/BasePortrait/PayTablePanel/PayTablePanel.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`PayTablePanel`** extends `BaseUIPopup`

## CC Properties
- `scrollView`

## Key Methods
- `onLoadExtend(): void`
- `setupObserver(): void`
- `showPayTablePanel(): void`
- `openPanel(): void`
- `closePanel(): void`
- `onClosePanel(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { GameLogicUIEvents } from "../../Core/GameLogicUIEvents";
import { BaseUIPopup } from "../../Popup/BaseUIPopup";
const { ccclass, property } = _decorator;

@ccclass
export class PayTablePanel extends BaseUIPopup {
	@property({ type: cc.ScrollView })
    scrollView: cc.ScrollView = null;

	uiManagerData: eno.UIManagerData = null;
	onLoadExtend(): void {
		super.onLoadExtend();
		this.setupObserver();
	}

	setupObserver(): void {
		this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
		this.observer.watch(this.uiManagerData, 'isPayTablePanelOpen', this.showPayTablePanel.bind(this), this);
	}

	showPayTablePanel(isActive: boolean): void {
		this.togglePopup(isActive);

		if (isActive) {
			if (this.scrollView) {
				this.scrollView.scrollToTop(0);
			}
		}
	}

	openPanel(): void {
		this.node.active = true;
	}

	closePanel(): void {
		this.node.active = false;
	}

	onClosePanel(): void {
		if (this.popupBehavior && this.popupBehavior.isPlaying()) {
			return;
		}
		this.playSfxClick();
		this.gameLogic.emit(GameLogicUIEvents.CLOSE_PAY_TABLE_PANEL);
	}

	protected onDestroy(): void {
		this.observer.releaseAll(this.uiManagerData, this);
	}
}

```
