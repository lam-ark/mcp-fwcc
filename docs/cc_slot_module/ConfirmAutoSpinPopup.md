# ConfirmAutoSpinPopup

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/AutoSpinPanel/v3/ConfirmAutoSpinPopup.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`ConfirmAutoSpinPopup`** extends `SlotBaseModule`

## CC Properties
- `lbMessage`

## Key Methods
- `onLoadExtend(): void`
- `updateMessage(): void`
- `onActionOK(): void`
- `onActionCancel(): void`
- `showPopup(): void`
- `hidePopup(): void`

## Source Implementation
```typescript

import { GameUIEvents } from '../../../Core/GameUIEvents';
import { SlotBaseModule } from '../../../SlotModuleExport';
const { inject, MoneyFormatter } = eno;
const { ccclass, property } = cc._decorator;
@ccclass
export class ConfirmAutoSpinPopup extends SlotBaseModule {
    @inject(MoneyFormatter) moneyFormatter: eno.MoneyFormatter;
    @property(cc.Label) lbMessage: cc.Label = null;
    actionOK: () => void = null;
    actionCancel: () => void = null;

    onLoadExtend(): void {
        super.onLoadExtend();
        this.eventManager.on(GameUIEvents.AUTO_SPIN.SHOW_CONFIRM_AUTO_SPIN_POPUP, this.showConfirmAutoSpinPopup, this);
        this.node.active = false;
		eno.setOpacity(this.node, 0);
    }

    showConfirmAutoSpinPopup(autoSpinData: any, actionOK: () => void, actionCancel: () => void): void {
        this.showPopup();

        this.actionOK = actionOK;
        this.actionCancel = actionCancel;
        this.updateMessage(autoSpinData);
    }

    updateMessage(autoSpinData: any): void {
        const { totalCost, selectedSpinTimes } = autoSpinData;
        const confirmAutoSpinText = this.gameLogic.getGameText("CONFIRM_AUTO_SPIN") || `Confirm total of {1} to spin {2} rounds?`;
        this.lbMessage.string = confirmAutoSpinText.replace("{1}", this.moneyFormatter.formatMoney(totalCost)).replace("{2}", selectedSpinTimes);
    }

    onActionOK(): void {
        this.actionOK();
        this.hidePopup();
    }

    onActionCancel(): void {
        this.actionCancel();
        this.hidePopup();
    }

    showPopup(): void {
        this.node.active = true;
        eno.setOpacity(this.node, 255);
    }

    hidePopup(): void {
        this.node.active = false;
        eno.setOpacity(this.node, 0);
    }
}


```
