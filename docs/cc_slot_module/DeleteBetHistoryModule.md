# DeleteBetHistoryModule

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/BetHistory/DeleteBetHistoryModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`DeleteBetHistoryModule`** extends `SlotBaseModule`

## CC Properties
- `lbTimeDelete`
- `btnShowDeletePopup`
- `nodeHistory`

## Key Methods
- `onLoadExtend(): void`
- `onDestroy(): void`
- `start(): void`
- `onEnable(): void`
- `localizeText(): void`
- `setDefaultSettingDeleteHistory(): void`
- `getDisplayName(): string`
- `hideSettingDeleteHistory(): void`
- `showSettingDeleteHistory(): void`
- `onBtnShowDeleteHistory(): void`
- `onDeleteAllLSCSuccess(): void`
- `onChangeAutoDeleteTime(): void`
- `updateSettingDeleteHistory(): void`

## Source Implementation
```typescript
import { BetHistoryModule, SlotBaseModule } from '../../SlotModuleExport';
const { ccclass, property } = cc._decorator;

const KEY_SETTING_TIME_LSC = 'KEY_SETTING_TIME_LSC';

const TIME_IN_NAME = ["3 hours", "1 hours", "30 minutes", "15 minutes", "5 minutes", "1 minute", "No history"];
const TIME_IN_SEC = [10800, 3600, 1800, 900, 300, 60, 0];

@ccclass
export class DeleteBetHistoryModule extends SlotBaseModule {
    @property(cc.Label) lbTimeDelete: cc.Label = null;
    @property(cc.Node) btnShowDeletePopup: cc.Node = null;
    @property(cc.Node) nodeHistory: cc.Node = null;

    maxTimeDeleteHistory: number = 10800; // 3 hours in seconds

    isLoginIframe: boolean = false;

    onLoadExtend(): void {
        cc.director.on("GameEventMessage.DELETE_ALL_LSC_SUCCESS", this.onDeleteAllLSCSuccess, this);
        cc.director.on("GameEventMessage.CHANGE_AUTO_DELETE_TIME", this.onChangeAutoDeleteTime, this);

        const { IS_PRODUCTION, LOGIN_IFRAME } = globalThis.loadModuleConfigAsync.getConfig();
        this.isLoginIframe = LOGIN_IFRAME;

        // @ts-ignore
        if (!IS_PRODUCTION && CC_DEBUG) {
            this.setDefaultSettingDeleteHistory();
        }
    }

    onDestroy(): void {
        cc.director.off("GameEventMessage.DELETE_ALL_LSC_SUCCESS", this.onDeleteAllLSCSuccess);
        cc.director.off("GameEventMessage.CHANGE_AUTO_DELETE_TIME", this.onChangeAutoDeleteTime);
    }

    start(): void {
        this.localizeText();
    }

    onEnable(): void {
        if (this.isLoginIframe) {
            this.hideSettingDeleteHistory();
            return;
        }

        this.updateSettingDeleteHistory();
    }

    localizeText(): void {
        const secondsText = this.gameLogic.getGameText("SECOND_TEXT") || "seconds";
        const minutesText = this.gameLogic.getGameText("MINUTE_TEXT") || "minutes";
        const hoursText = this.gameLogic.getGameText("HOUR_TEXT") || "hours";
        const noDeleteHistoryText = this.gameLogic.getGameText("NO_DELETE_HISTORY_TEXT") || "No history";

        TIME_IN_NAME.forEach((name, index) => {
            TIME_IN_NAME[index] = TIME_IN_NAME[index]
                .replace("hours", hoursText)
                .replace("minutes", minutesText)
                .replace("seconds", secondsText)
                .replace("No history", noDeleteHistoryText);
        });
    }

    setDefaultSettingDeleteHistory(): void {
        const displayName = this.getDisplayName();
        if (!displayName) {
            return this.hideSettingDeleteHistory();
        }

        const key = displayName + KEY_SETTING_TIME_LSC;
        const value = cc.sys.localStorage.getItem(key);
        const seconds = parseInt(value);
        if (isNaN(seconds)) {
            cc.sys.localStorage.setItem(key, this.maxTimeDeleteHistory.toString());
        }
    }

    getDisplayName(): string {
        if (!this.gameLogic || !this.gameLogic.getUserDisplayName) {
            return '';
        }

        return this.gameLogic.getUserDisplayName() || '';
    }

    hideSettingDeleteHistory(): void {
        this.btnShowDeletePopup.active = false;
        this.lbTimeDelete.node.active = false;
    }

    showSettingDeleteHistory(): void {
        this.btnShowDeletePopup.active = true;
        this.lbTimeDelete.node.active = true;
    }

    onBtnShowDeleteHistory(): void {
        cc.director.emit("GameEventMessage.OPEN_SETTING_DELETE_LSC");
    }

    onDeleteAllLSCSuccess(): void {
        if (!this.node.active) {
            return;
        }

        if (this.nodeHistory) {
            const comp = this.nodeHistory.getComponent(BetHistoryModule);
            if(comp && comp.recordView) {
                comp.recordView.emit("CLEAR_DATA");
            }
        }
    }

    onChangeAutoDeleteTime(): void {
        if (!this.node.active) {
            return;
        }

        // update setting delete history
        this.updateSettingDeleteHistory();
    }

    updateSettingDeleteHistory(): void {
        const displayName = this.getDisplayName();
        if (!displayName) {
            return this.hideSettingDeleteHistory();
        }

        const key = displayName + KEY_SETTING_TIME_LSC;
        const value = cc.sys.localStorage.getItem(key);
        const seconds = parseInt(value);
        if (isNaN(seconds)) {
            this.hideSettingDeleteHistory();
            return;
        }

        this.showSettingDeleteHistory();
        this.lbTimeDelete.string = TIME_IN_NAME[TIME_IN_SEC.indexOf(seconds)] || "";
    }
}


```
