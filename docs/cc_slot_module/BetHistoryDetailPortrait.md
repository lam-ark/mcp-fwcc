# BetHistoryDetailPortrait

> **Source Path**: `assets/cc-common/cc-slot-module/BasePortrait/BetHistoryPortrait/scripts/BetHistoryDetailPortrait.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BetHistoryDetailPortrait`** extends `BetHistoryDetailModule`

## CC Properties
- `scrollItem`
- `scrollView`
- `scrollContent`

## Key Methods
- `initDetailView(): void`
- `setupObserver(): void`
- `activeNextRespinBtn(): void`
- `activePreviousRespinBtn(): void`
- `enableNextRespinBtn(): void`
- `enablePreviousRespinBtn(): void`
- `onPreviousRespinBtnClick(): void`
- `onNextRespinBtnClick(): void`
- `resetGameModeRespin(): void`
- `updateGameModeInfo(): void`

## Source Implementation
```typescript
const { _decorator, Button, Prefab, ScrollView } = cc;
import { GameLogicUIEvents } from '../../../Core/GameLogicUIEvents';
import { BetHistoryDetailModule } from '../../../Popup/BetHistory/BetHistoryDetailModule';
const { ccclass, property } = _decorator;

@ccclass
export class BetHistoryDetailPortrait extends BetHistoryDetailModule {
    @property({ type: Prefab, visible: false, override: true })
    scrollItem: cc.Prefab = null;
    @property({ type: ScrollView, visible: false, override: true })
    scrollView: cc.ScrollView = null;
    @property({ type: cc.Node, visible: false, override: true })
    scrollContent: cc.Node = null;
    @property
    hasRespin: boolean = true;
    @property({
        type: Button, visible: function () {
            return this.hasRespin;
        }
    })
    prevRespinBtn: cc.Button = null;
    @property({
        type: Button, visible: function () {
            return this.hasRespin;
        }
    })
    nextRespinBtn: cc.Button = null;

    initDetailView(data: any): void {
        if (this.hasRespin) {
            this._reset();
            this.gameLogic.emit(GameLogicUIEvents.INIT_BET_DETAIL, data, eno.BET_DEFAULT_HISTORY_TYPE.RESPIN_PORTAIT);
        } else {
            super.initDetailView(data);
        }
    };

    setupObserver(): void {
        super.setupObserver();
        if (this.hasRespin) {
            this.observer.watch(this.betHistoryDetailData, 'isEnableNextRespin', this.enableNextRespinBtn.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
            this.observer.watch(this.betHistoryDetailData, 'isEnablePrevRespin', this.enablePreviousRespinBtn.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
            this.observer.watch(this.betHistoryDetailData, 'isActiveNextRespin', this.activeNextRespinBtn.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
            this.observer.watch(this.betHistoryDetailData, 'isActivePrevRespin', this.activePreviousRespinBtn.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
        }
    };

    activeNextRespinBtn(isActiveNextRespin: boolean): void {
        this.nextRespinBtn.node.active = isActiveNextRespin;
    }
    activePreviousRespinBtn(isActivePrevRespin: boolean): void {
        this.prevRespinBtn.node.active = isActivePrevRespin;
    }

    enableNextRespinBtn(isEnableNextRespin: boolean): void {
        this.nextRespinBtn.interactable = isEnableNextRespin;
    }

    enablePreviousRespinBtn(isEnablePrevRespin: boolean): void {
        this.prevRespinBtn.interactable = isEnablePrevRespin;
    }

    onPreviousRespinBtnClick(): void {
        if (this.soundPlayer) {
            this.soundPlayer.playSFXClick();
        }
        this.resetGameModeRespin();
        this.gameLogic.emit(GameLogicUIEvents.BET_DETAIL_RESPIN_PREVIOUS_PAGE);
    }

    onNextRespinBtnClick(): void {
        if (this.soundPlayer) {
            this.soundPlayer.playSFXClick();
        }
        this.resetGameModeRespin();
        this.gameLogic.emit(GameLogicUIEvents.BET_DETAIL_RESPIN_NEXT_PAGE);
    }

    resetGameModeRespin(): void {
        this.gameModeView.emit("RESET_GAME_MODE_VIEW");
        this.infoLabel.string = "";
    }

    updateGameModeInfo(data: any): void {
        const { latestWinJackpotInfo, winAmount } = data.customData;
        const currentData = this.getCurrentData();
        if (!currentData) {
            cc.warn('currentData is null');
            return;
        }

        const { isRespin, gameMode, name } = currentData;
        let text = isRespin ? `${name}` : `${gameMode}`;

        if (winAmount || latestWinJackpotInfo) {
            if (winAmount === 0 && !latestWinJackpotInfo) {
                return;
            }

            if (latestWinJackpotInfo) {
                const jpAmount = latestWinJackpotInfo[0] && latestWinJackpotInfo[0].jackpotAmount;
                text += " + JACKPOT: " + this.moneyFormatter.formatMoney(jpAmount + winAmount);
            } else {
                text += ": " + this.moneyFormatter.formatMoney(winAmount);
            }
        }
        this.infoLabel.string = text;
    }
}


```
