# AutoSpinPanelv2

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/AutoSpinPanel/v2/AutoSpinPanelv2.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`AutoSpinPanelv2`** extends `BaseUIPopup`

## CC Properties
- `public`
- `public`
- `infinityText`

## Key Methods
- `onLoadExtend(): void`
- `initConfig(): void`
- `setupPanel(): void`
- `setDefaultSelectedIndex(): void`
- `highlightSelectedIndex(): void`
- `unhighlightSelectedIndex(): void`
- `onSelectAutoSpin(): void`
- `onStartAutoSpin(): void`
- `openPanel(): void`
- `playOpenAnimation(): void`
- `closePanel(): void`
- `onTriggerSpaceButton(): void`
- `playCloseAnimation(): void`
- `playSfxClick(): void`
- `enableAllButtons(): void`

## Source Implementation
```typescript

import { AutoSpinConfigv2} from "./AutoSpinConfigv2";
import { BaseUIPopup } from "../../../Popup/BaseUIPopup";
import { GameLogicUIEvents } from "../../../Core/GameLogicUIEvents";
import { HelpDocuments } from "../../../Components/Common/HelpDocuments";
const { ccclass, property, help } = cc._decorator;

/**
 * Auto Spin Panel v2
 * @description Auto Spin Panel v2 is a panel that allows the player to select the number of spins to play. Support for multi-slot.
 */
@ccclass
@help(HelpDocuments.AUTO_SPIN_PANEL_DOCUMENT)
export class AutoSpinPanelv2 extends BaseUIPopup {
	@property(cc.Button)
	public buttonList: cc.Button[] = [];
	@property(cc.Label)
	public numberList: cc.Label[] = [];
	@property()
	infinityText: string = '∞';

	config: AutoSpinConfigv2 = null;
	currentSelectedIndex: number = -1;
	initialized: boolean = false;

	onLoadExtend(): void {
		this.initConfig();
        this.eventManager.on(GameLogicUIEvents.OPEN_AUTO_SPIN_PANEL, this.openPanel.bind(this), this);
        this.gameLogic.on(GameLogicUIEvents.TRIGGER_SPACE_BUTTON, this.onTriggerSpaceButton.bind(this), this);
        this.node.active = false;
		super.onLoadExtend();
	}

	initConfig(): void {
		this.config = this.getComponent(AutoSpinConfigv2);
	}

	setupPanel(): void {
		this.config.AUTO_SPIN_NUMBERS.forEach((number, index) => {
			this.numberList[index].string = number === Number.MAX_SAFE_INTEGER ? this.infinityText : number.toString();
			this.unhighlightSelectedIndex(index);
		});
        this.buttonList.forEach((button, index) => {
            button.node["autoSpinIndex"] = index;
        });
        this.enableAllButtons();
        this.setDefaultSelectedIndex();
        this.initialized = true;
	}

	setDefaultSelectedIndex(): void {
		this.currentSelectedIndex = this.config.DEFAULT_SELECTED_INDEX;
        this.highlightSelectedIndex();
	}

	highlightSelectedIndex(): void {
		this.numberList[this.currentSelectedIndex].node.color = new cc.Color(255, 0, 0, 255);
        this.buttonList[this.currentSelectedIndex].interactable = false;
	}

	unhighlightSelectedIndex(index: number): void {
		this.numberList[index].node.color = new cc.Color(255, 255, 255, 255);
	}

	onSelectAutoSpin(evt): void {
        const autoSpinIndex = evt.target["autoSpinIndex"];
		this.playSfxClick();
		this.currentSelectedIndex = autoSpinIndex;

		this.highlightSelectedIndex();
        this.onStartAutoSpin();
	}

	onStartAutoSpin(): void {
		this.playSfxClick();
		const selectedSpinTimes = this.config.AUTO_SPIN_NUMBERS[this.currentSelectedIndex];
		this.gameLogic.emit(GameLogicUIEvents.START_AUTO_SPIN, selectedSpinTimes);
		this.closePanel();
	}

	openPanel(): void {
        this.playOpenAnimation();
		this.setupPanel();
	}

    playOpenAnimation(): void {
        this.node.active = true;
        eno.setOpacity(this.node, 255);
    }

	closePanel(): void {
        this.disableAllButtons();
        this.initialized = false;
		this.playSfxClick();
        this.playCloseAnimation();
	}

	onTriggerSpaceButton(): void {
        if (this.node.active) {
            this.closePanel();
        }
	}

	playCloseAnimation(): void {
        eno.setOpacity(this.node, 0);
        this.node.active = false;
    }

	playSfxClick(): void {
		if (this.soundPlayer) {
			this.soundPlayer.playSFXClick();
		}
	}

    enableAllButtons(): void {
        this.buttonList.forEach((button) => {
            button.interactable = true;
        });
    }

    disableAllButtons(): void {
        this.buttonList.forEach((button) => {
            button.interactable = false;
        });
    }
}

```
