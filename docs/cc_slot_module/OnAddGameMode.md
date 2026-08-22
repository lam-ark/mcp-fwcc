# OnAddGameMode

> **Source Path**: `assets/cc-common/cc-slot-module/Editor/OnAddGameMode.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`OnAddGameMode`** extends `Component`

## Key Methods
- `onLoad(): void`
- `onChildAdded(): void`
- `onChildRemoved(): void`

## Source Implementation
```typescript
const { _decorator, Component, find, log, Node } = cc;
import { GameModeType } from '../Components/Common/SlotEnum';
import { GameDirector } from '../Core/GameDirector';
import { GameModeDirectorModule } from '../GameMode/GameModeDirectorModule';
const { ccclass, disallowMultiple, executeInEditMode } = _decorator;

@ccclass
@disallowMultiple
@executeInEditMode
export class OnAddGameMode extends Component {
    private _director: GameDirector;

    onLoad(): void {
        //@ts-ignore
        if (!CC_EDITOR) {
            return;
        }

        const canvas = cc.find('Canvas');
        if (canvas) {
            this._director = canvas.getComponentInChildren(GameDirector);
        }

        this.node.on(Node.EventType.CHILD_ADDED, this.onChildAdded, this);
        this.node.on(Node.EventType.CHILD_REMOVED, this.onChildRemoved, this);
    }

    onChildAdded(child: cc.Node): void {

        const slotDirector = child.getComponent(GameModeDirectorModule);
        if (!slotDirector) {
            return;
        }

        const gameMode = slotDirector.gameMode;

        const gameModes = this._director.gameModes;
        if (gameModes.find(it => it.type === gameMode)) {
            return;
        }

        const addGameMode = new GameModeType();
        addGameMode.type = gameMode;
        addGameMode.rootNode = child;

        this._director.gameModes.push(addGameMode);

        log('ADD GAME MODE: ', gameMode);
    }

    onChildRemoved(child: cc.Node): void {
        const slotDirector = child.getComponent(GameModeDirectorModule);
        if (!slotDirector) {
            return;
        }

        const gameMode = slotDirector.gameMode;
        const gameModes = this._director.gameModes;
        if (!gameModes.find(it => it.type === gameMode)) {
            return;
        }

        this._director.gameModes = this._director.gameModes.filter(it => it.type !== gameMode);

        log('REMOVE GAME MODE: ', gameMode);
    }
}


```
