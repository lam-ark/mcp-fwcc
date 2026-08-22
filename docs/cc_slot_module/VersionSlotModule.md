# VersionSlotModule

> **Source Path**: `assets/cc-common/cc-slot-module/Components/VersionSlotModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`VersionSlotModule`** extends `SlotBaseModule`

## CC Properties
- `versionFile`
- `versionText`

## Key Methods
- `onLoadExtend(): void`
- `start(): void`
- `updateVersionLabel(): void`
- `getServerVersion(): ""`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotBaseModule } from '../Core/SlotBaseModule';
import { GameUIEvents } from '../Core/GameUIEvents';

const { ccclass, property } = _decorator;

@ccclass
export class VersionSlotModule extends SlotBaseModule {
	@property(cc.JsonAsset)
	versionFile: cc.JsonAsset = null;

	@property(cc.Label)
	versionText: cc.Label = null;
	onLoadExtend(): void {
		this.eventManager.on(GameUIEvents.GAME_MODE.JOIN_GAME_SUCCESS, this.updateVersionLabel, this);
	}

	start(): void {
		this.updateVersionLabel();
	}

	updateVersionLabel(): void {
		const clientVersion = this.versionFile.json.version;
		const serverVersion = this.gameLogic ? this.gameLogic.getServerVersion() : "";
		this.versionText.string = serverVersion ? `v${clientVersion}/v${serverVersion}` : `v${clientVersion}`;
	}
}
```
