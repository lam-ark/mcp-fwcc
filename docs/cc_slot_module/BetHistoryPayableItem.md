# BetHistoryPayableItem

> **Source Path**: `assets/cc-common/cc-slot-module/BasePortrait/BetHistoryPortrait/scripts/BetHistoryPayableItem.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BetHistoryPayableItem`** extends `SlotBaseModule`

## CC Properties
- `symbolSprite`
- `description`
- `payLineWinAmount`

## Key Methods
- `onLoadExtend(): void`
- `initAssets(): void`
- `updatePayableItem(): void`
- `updateDescription(): void`

## Source Implementation
```typescript
const { _decorator, error } = cc;
import { SlotBaseModule } from '../../../Core/SlotBaseModule';
import { SlotSymbolResourceManager } from '../../../BaseModule/Table/SlotSymbol/SlotSymbolResourceManager';
const { inject } = eno;
const { ccclass, property } = _decorator;

@ccclass
export class BetHistoryPayableItem extends SlotBaseModule {
    @property(cc.Sprite)
    symbolSprite: cc.Sprite = null;

    @property(cc.Label)
    description: cc.Label = null;
    @property(cc.Label)
    payLineWinAmount: cc.Label = null;

    @inject(eno.MoneyFormatter) moneyFormatter: eno.MoneyFormatter;

    @inject(SlotSymbolResourceManager) _resourceManager: SlotSymbolResourceManager = null;

    onLoadExtend(): void {
        this.initAssets();
        this.node.on("UPDATE_PAYABLE_ITEM", this.updatePayableItem, this);
    }

    initAssets(): void {
        this._resourceManager = this.node.getComponent(SlotSymbolResourceManager);
    }

    updatePayableItem(paylineObject: any): void {
        const { symbolId, payLineWinAmount } = paylineObject;

        if (this._resourceManager) {
            this.symbolSprite.spriteFrame = this._resourceManager.getSymbolFrame(symbolId);
        } else {
            error(`[SlotSymbolModule] Resource Manager not found`);
        }

        this.updateDescription(paylineObject);
        this.payLineWinAmount.string = this.moneyFormatter.formatMoney(payLineWinAmount);
    }

    updateDescription(paylineObject): void {
        const { reelCount, payLineWinNumbers } = paylineObject;
        const numberSymbol = reelCount || payLineWinNumbers;
        this.description.string = `Win combination ${numberSymbol}`;
    }
}


```
