# NormalGameDirectorModule

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/NormalGame/NormalGameDirectorModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`NormalGameDirectorModule`** extends `GameModeDirectorModule`

## Key Methods
- `onJoinGameSuccess(): void`
- `_normalGameRestart(): Promise<void>`

## Source Implementation
```typescript
const { _decorator, warn } = cc;
import { GameModeDirectorModule } from '../GameModeDirectorModule';
import { GameUIEvents } from '../../Core/GameUIEvents';
const { ccclass } = _decorator;

@ccclass
export class NormalGameDirectorModule extends GameModeDirectorModule {
	onJoinGameSuccess(data: any): void {
		warn("%c onJoinGameSuccess ", "color: red", data);
		this.eventManager.emit(GameUIEvents.GAME_MODE.JOIN_GAME_SUCCESS, data);
	}

	_normalGameRestart(): Promise<void> {
		return Promise.resolve();
	}
}


```
