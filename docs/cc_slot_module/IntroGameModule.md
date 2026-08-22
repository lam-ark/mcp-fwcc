# IntroGameModule

> **Source Path**: `assets/cc-common/cc-slot-module/CutScene/IntroGame/IntroGameModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`IntroGameModule`** extends `SlotBaseModule`

## CC Properties
- `btnJoinGame`
- `doNotShowNode`
- `progressBar`

## Key Methods
- `onLoadExtend(): void`
- `joinGameSuccess(): void`
- `init(): void`
- `onClickJoinGame(): void`
- `playSfxClick(): void`
- `cacheHideIntroGame(): void`
- `onCheckDoNotShowAgain(): void`
- `showButtonJoinGame(): void`
- `onDisable(): void`

## Source Implementation
```typescript
const { _decorator, sys, tween } = cc;
import { SlotBaseModule } from '../../Core/SlotBaseModule';
import { GameUIEvents } from '../../Core/GameUIEvents';
import { GameConfig } from '../../Core/GameConfig';
const { inject } = eno;
const { ccclass, property } = _decorator;

@ccclass
export class IntroGameModule extends SlotBaseModule {
    @property(cc.Button)
    btnJoinGame: cc.Button = null;
    @property(cc.Node)
    doNotShowNode: cc.Node = null;
    @property(cc.Node)
    progressBar: cc.Node = null;
    @inject(GameConfig) gameConfig: GameConfig = null;
    @property
    gameId: string = "";

    protected _gameId: string = "";
    protected _isHideIntroGame: boolean = false;

    onLoadExtend(): void {
        this.eventManager.on(GameUIEvents.GAME_MODE.JOIN_GAME_SUCCESS, this.joinGameSuccess, this);
        this.init();
    }
    
    joinGameSuccess({ joinGameData }): void {
        const hasSkipIntroGame = joinGameData.isResume || joinGameData.promotionData;
        if (hasSkipIntroGame) {
            this.node.active = false;
            this.eventManager.emit(GameUIEvents.INTRO_GAME.SKIP_INTRO_GAME);
        } else {
            this.showButtonJoinGame(true);
        }
    }

    init(): void {
        this._gameId = this.gameConfig.GAME_ID || this.gameId;
        const cacheValue = JSON.parse(sys.localStorage.getItem("HideIntroGame")) || {};
        this._isHideIntroGame = !!cacheValue[this._gameId];
        this.node.active = !this._isHideIntroGame;
        if (!this._isHideIntroGame) {
            this.eventManager.emit(GameUIEvents.INTRO_GAME.SKIP_INTRO_GAME);
        }
        eno.setOpacity(this.node, 255);
        this.showButtonJoinGame(false);
    }

    onClickJoinGame(): void {
        this.playSfxClick();
        this.eventManager.emit(GameUIEvents.INTRO_GAME.ON_CLICK_JOIN_GAME);
        this.cacheHideIntroGame();
        tween(this.node)
            .call(() => eno.fadeOut(this.node, 0.2))
            .delay(0.2)
            .call(() => {
                this.node.active = false;
                this.eventManager.emit(GameUIEvents.INTRO_GAME.HIDE_INTRO_GAME, false);
            })
            .start();
    }

    playSfxClick(): void {
        this.soundPlayer && this.soundPlayer.playSFXClick();
    }

    cacheHideIntroGame(): void {
        const cacheValue = {};
        cacheValue[this._gameId] = this._isHideIntroGame;
        sys.localStorage.setItem("HideIntroGame", JSON.stringify(cacheValue));
    }
    
    onCheckDoNotShowAgain(): void {
        this.playSfxClick();
        this._isHideIntroGame = !this._isHideIntroGame;
    }

    showButtonJoinGame(isShow: boolean = true): void {
        if (this.progressBar) {
            this.progressBar.active = !isShow
        }
        if (this.doNotShowNode) {
            this.doNotShowNode.active = isShow
        }
        if (this.btnJoinGame) {
            this.btnJoinGame.node.active = isShow
        }
    }

    onDisable(): void {
        this.node.stopAllActions();
    }
}


```
