# BetHistorySessionGroup

> **Source Path**: `assets/cc-common/cc-slot-module/BasePortrait/BetHistoryPortrait/scripts/BetHistorySessionGroup.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BetHistorySessionGroup`** extends `SlotBaseModule`

## CC Properties
- `sessionLabel`
- `toastNode`
- `toastText`

## Key Methods
- `onLoadExtend(): void`
- `setSessionId(): void`
- `resetSessionId(): void`
- `onCopyClick(): void`
- `showToast(): void`
- `hideToast(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator,  Layout,tween } = cc;
import { SlotBaseModule } from '../../../Core/SlotBaseModule';
const { ccclass, property } = _decorator;
const { JsbUtils, setOpacity, fadeOut } = eno;

@ccclass
export class BetHistorySessionGroup extends SlotBaseModule {
    @property(cc.Label)
    sessionLabel: cc.Label = null;
    @property(cc.Node)
    toastNode: cc.Node = null;
    @property(cc.Label)
    toastText: cc.Label = null;

    _layout: cc.Layout = null;
    _sessionId: string = "";

    onLoadExtend(): void {
        this.node.on("SET_SESSION_ID", this.setSessionId, this);
        this.node.on("RESET_SESSION_ID", this.resetSessionId, this);
        this._layout = this.node.getComponentInChildren(Layout);
        this._layout.node.active = false;
        this.toastNode.active = false;
        this.toastText.string = "";
    }

    setSessionId(sessionId: string = ""): void {
        this._sessionId = sessionId;
        this.sessionLabel.string = `${sessionId}`;
        this._layout.node.active = true;
        this._layout.updateLayout();
    }

    resetSessionId(): void {
        this.toastNode.stopAllActions();
        this.toastNode.active = false;
        this._sessionId = "";
        this._layout.node.active = false;
        this.sessionLabel.string = "";
    }

    onCopyClick(): void {
        this.soundPlayer && this.soundPlayer.playSFXClick();
        JsbUtils.copyTextToClipboard(this._sessionId);
        this.showToast("Copied!");
    }

    showToast(message: string): void {
        this.toastNode.stopAllActions();
        this.toastText.string = message;
        this.toastNode.active = true;
        setOpacity(this.toastNode, 255);
        this.toastNode.setScale(1, 1);
        tween(this.toastNode)
            .to(0.1, { scale: 1.2 })
            .to(0.1, { scale: 1 })
            .delay(2.5)
            .call(() => {
                this.hideToast();
            })
            .start();
    }

    hideToast(): void {
        fadeOut(this.toastNode, 0.5, {
            onComplete: () => {
                if (this.toastNode) {
                    this.toastNode.active = false;
                }
            }
        });
    }

    onDestroy(): void {
        this.toastNode.stopAllActions();
    }
}


```
