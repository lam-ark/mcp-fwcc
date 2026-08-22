# ForceGetLastestState

> **Source Path**: `assets/cc-common/cc-slot-module/Components/ForceGetLastestState.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`ForceGetLastestState`** extends `SlotBaseModule`

## CC Properties
- `text`

## Key Methods
- `start(): void`
- `onEnableForceGlt(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { GameLogicUIEvents } from '../Core/GameLogicUIEvents';
import { SlotBaseModule } from '../Core/SlotBaseModule';
const { ccclass, property } = _decorator;

@ccclass
export class ForceGetLastestState extends SlotBaseModule {
	@property(cc.Node)
	text: cc.Node = null;
	canClick: boolean;
	isEnableGlt: boolean;

	start(): void {
		const { IS_PRODUCTION } = eno.environment.getConfig();
		//@ts-ignore
		if (this.gameLogic && !IS_PRODUCTION && CC_DEBUG) {
			this.canClick = true;
		} else {
			this.node.active = false;
		}
		this.isEnableGlt = false;
	}

	onEnableForceGlt(): void {
		if (!this.canClick) {
			return;
		}
		this.isEnableGlt = !this.isEnableGlt;
		this.text.active = this.isEnableGlt;
		this.gameLogic.emit(GameLogicUIEvents.ENABLE_FORCE_GET_LAST_STATE, this.isEnableGlt);
	}
}
```
