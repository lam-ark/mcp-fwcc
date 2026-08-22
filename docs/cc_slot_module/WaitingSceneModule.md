# WaitingSceneModule

> **Source Path**: `assets/cc-common/cc-slot-module/Components/WaitingSceneModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`WaitingSceneModule`** extends `SlotBaseModule`

## Key Methods
- `start(): void`
- `setupObserver(): void`
- `showWaitingScene(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotBaseModule } from '../Core/SlotBaseModule';
const { ccclass, property } = _decorator;
const { setOpacity } = eno;

@ccclass
export class WaitingSceneModule extends SlotBaseModule {
	waitingSceneData = null;

	start(): void {
		this.waitingSceneData = this.gameLogic.getDataModel().WaitingSceneData;
		this.setupObserver();
	}

	setupObserver(): void {
		this.observer.watch(this.waitingSceneData, "active", this.showWaitingScene.bind(this), this);
	}

	showWaitingScene(active: boolean): void {
		this.node.active = active;
		setOpacity(this.node, active ? 255 : 0);
	}

	onDestroy(): void {
		this.observer.releaseAll(this.waitingSceneData, this);
	}
}

```
