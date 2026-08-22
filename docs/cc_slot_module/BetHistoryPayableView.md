# BetHistoryPayableView

> **Source Path**: `assets/cc-common/cc-slot-module/BasePortrait/BetHistoryPortrait/scripts/BetHistoryPayableView.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BetHistoryPayableView`** extends `SlotBaseModule`

## CC Properties
- `payableScrollView`
- `payableContainer`

## Key Methods
- `onLoadExtend(): void`
- `onEnable(): void`
- `resetPayableView(): void`
- `updatePayableView(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotBaseModule } from '../../../Core/SlotBaseModule';
import { PoolFactoryModule } from '../../../PoolFactory/PoolFactoryModule';
import { GameConfig } from '../../../Core/GameConfig';
import { PAY_SYSTEM_TYPE_ENUM } from '../../../Components/Common/SlotEnum';
const { inject } = eno;
const { ccclass, property } = _decorator;

@ccclass
export class BetHistoryPayableView extends SlotBaseModule {
    @property(cc.ScrollView)
    payableScrollView: cc.ScrollView = null;
    @property(cc.Node)
    payableContainer: cc.Node = null;
    @property
    maxScrollItem: number = 3;
    @inject(GameConfig) gameConfig: GameConfig;

    _poolFactory: PoolFactoryModule = null;
    _usingObjects: cc.Node[] = [];

    onLoadExtend(): void {
        this.node.on("RESET_PAYABLE_VIEW", this.resetPayableView, this);
        this.node.on("UPDATE_PAYABLE_VIEW", this.updatePayableView, this);
        this._poolFactory = this.getComponent(PoolFactoryModule);
    }

    onEnable(): void {
        this.payableScrollView.scrollToTop(0);
    }

    resetPayableView(): void {
        this.node.active = false;
        if (this._usingObjects.length) {
            this._usingObjects.forEach((item) => {
                this._poolFactory.returnObject(item);
            });
            this._usingObjects = [];
        }
    }

    updatePayableView(data): void {
        this.resetPayableView();
        const { paylines } = data.customData;
        if (!paylines || !paylines.length) {
            return;
        }
        this.node.active = true;

        const isEnableScroll = paylines.length > this.maxScrollItem;
        this.payableScrollView.enabled = isEnableScroll;
        if (this.payableScrollView.verticalScrollBar) {
            this.payableScrollView.verticalScrollBar.node.active = isEnableScroll;
        }

        let convertedPaylines = [];
        switch (this.gameConfig.PAY_SYSTEM) {
            case PAY_SYSTEM_TYPE_ENUM.ALLWAYS:
                convertedPaylines = eno.SlotUtils.convertPayLineAllWays(paylines);
                break;
            case PAY_SYSTEM_TYPE_ENUM.LINES:
                convertedPaylines = eno.SlotUtils.convertPayLine(paylines);
                break;
            case PAY_SYSTEM_TYPE_ENUM.CLUSTER:
                convertedPaylines = eno.SlotUtils.convertPayLineCluster(paylines);
                break;
            case PAY_SYSTEM_TYPE_ENUM.SCATTER_PAY:
                convertedPaylines = eno.SlotUtils.convertPayLineScatterPay(paylines);
                break;
        }
        convertedPaylines.forEach((paylineObject) => {
            const itemNode = this._poolFactory.getObject();
            this.payableContainer.addChild(itemNode);
            itemNode.active = true;
            itemNode.emit("UPDATE_PAYABLE_ITEM", paylineObject);
            this._usingObjects.push(itemNode);
        });
    }
}


```
