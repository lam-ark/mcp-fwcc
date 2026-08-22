# SetupModuleTest

> **Source Path**: `assets/cc-common/cc-slot-module/Core/SetupModuleTest.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SetupModuleTest`** extends `Component`

## Key Methods
- `init(): void`

## Source Implementation
```typescript
const { _decorator, Component } = cc;
import { GAME_MODE_ENUM } from '../Components/Common/SlotEnum';
import { BaseGameMode } from '../GameMode/BaseGameMode';
import { GameModuleEvent } from '../GameMode/GameModuleEvent';
import { SlotBaseModule } from './SlotBaseModule';
const { ccclass, property } = _decorator;

@ccclass
export class SetupModuleTest extends Component {
    init(logger: any): void {

		const gameModes = this.node.getComponentsInChildren(BaseGameMode);
		if (!gameModes.length) {
			const moduleEvent = new GameModuleEvent();
			moduleEvent.setLogger(logger, '[ModuleEvent]');
			const moduleComponents =this.node.getComponentsInChildren(SlotBaseModule)
			moduleComponents.forEach((module) => {
				module.setupModule(moduleEvent, GAME_MODE_ENUM.NORMAL_GAME);
			});
		}
    }
}


```
