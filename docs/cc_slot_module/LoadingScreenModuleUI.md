# LoadingScreenModuleUI

> **Source Path**: `assets/cc-common/cc-slot-module/Components/LoadingScreenModuleUI.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`LoadingScreenModuleUI`** extends `Component`

## CC Properties
- `icon`

## Key Methods
- `onLoad(): void`
- `update(): void`

## Source Implementation
```typescript
const { _decorator, Component } = cc;
import { LoadingScreenModule } from './LoadingScreenModule';
const { ccclass, property } = _decorator;

@ccclass
export class LoadingScreenModuleUI extends Component {
	@property({ type: cc.Node }) icon: cc.Node = null;
	@property barWidth: number = 0;

	loadingScreen: LoadingScreenModule = null;
	startPosX: number = 0;
	maskStartPosX: number = 0;

	onLoad(): void {
		this.loadingScreen = this.node.getComponent(LoadingScreenModule);
		if (this.icon) {
			this.startPosX = this.icon.position.x;
		}
	}

	update(dt: number): void {
		let percent = (this.loadingScreen.totalPercent - this.loadingScreen.progressBar.progress) / 20;
		if (percent > 0) {
			if (this.icon) {
				const movingX = this.barWidth * this.loadingScreen.progressBar.progress;
				this.icon.setPosition(this.startPosX + movingX, this.icon.position.y);
			}
		}
	}
}


```
