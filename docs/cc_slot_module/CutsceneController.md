# CutsceneController

> **Source Path**: `assets/cc-common/cc-slot-module/CutScene/CutsceneController.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`CutsceneController`** extends `SlotBaseModule`

## CC Properties
- `cutsceneList`

## Key Methods
- `onLoadExtend(): void`
- `playCutScene(): Promise<void>`
- `closeCutScene(): Promise<void>`
- `skipCutScenes(): void`
- `isDisplayDialog(): boolean`
- `isDisplayCutscene(): boolean`
- `makeCutSceneList(): void`
- `getDisplayCutscene(): string`
- `closeAllNotices(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotBaseModule } from '../Core/SlotBaseModule';
import { BaseCutscene } from './BaseCutscene';
import { GameUIEvents } from '../Core/GameUIEvents';
const { ccclass, property } = _decorator;

@ccclass
export class CutsceneController extends SlotBaseModule {
	@property({ type: BaseCutscene })
	cutsceneList: BaseCutscene[] = [];

	cutScenes: Map<number, BaseCutscene> = new Map();

	onLoadExtend(): void {
		// Turn it on for entering onLoad
		this.node.children.forEach(child => {
			child.active = true;
		});
		this.makeCutSceneList();

		this.eventManager.on(GameUIEvents.CUTSCENES.PLAY_CUTSCENE, this.playCutScene, this);
		this.eventManager.on(GameUIEvents.CUTSCENES.CLOSE_CUTSCENE, this.closeCutScene, this);
		this.eventManager.on(GameUIEvents.CUTSCENES.SKIP_CUTSCENES, this.skipCutScenes, this);
		this.eventManager.on(GameUIEvents.CUTSCENES.CLOSE_ALL_NOTICES, this.closeAllNotices, this);
	}

	playCutScene({ cutsceneType, cutsceneData }): Promise<void> {
		return new Promise((resolve) => {
			if (this.cutScenes.has(cutsceneType)) {
				this.cutScenes.get(cutsceneType).play(cutsceneData, () => {
					resolve();
				});
			} else {
				resolve();
			}
		});
	}

	closeCutScene({ cutsceneType, cutsceneData }): Promise<void> {
		return new Promise((resolve) => {
			if (this.cutScenes.has(cutsceneType)) {
				this.cutScenes.get(cutsceneType).exit(cutsceneData, () => {
					resolve();
				});
			} else {
				resolve();
			}
		});
	}

	skipCutScenes(): void {
		this.cutScenes.forEach(cutScene => cutScene.skip());
	}

	isDisplayDialog(): boolean {
		return false;
	}

	isDisplayCutscene(): boolean {
		let isDisplay = false;
		this.cutScenes.forEach(cutScene => {
			if (cutScene.node.active && cutScene.fullDisplay) {
				isDisplay = true;
			}
		});

		return isDisplay;
	}

	makeCutSceneList(): void {
		this.cutScenes.clear();
		if (this.cutsceneList.length > 0) {
			this.cutsceneList.forEach(cutsceneMode => {
				cutsceneMode.init();
				this.cutScenes.set(cutsceneMode.cutsceneType, cutsceneMode);
			});
		} else {
			const cutSceneModes = this.node.getComponentsInChildren(BaseCutscene);
			cutSceneModes.forEach(cutSceneMode => {
				if (cutSceneMode) {
					cutSceneMode.init();
					this.cutScenes.set(cutSceneMode.cutsceneType, cutSceneMode);
				}
			});
		}
	}

	getDisplayCutscene(): string {
		this.cutScenes.forEach(cutScene => {
			if (cutScene.node.active) {
				return cutScene.name;
			}
		});

		return '';
	}

	closeAllNotices(): void {
		this.cutScenes.forEach(cutScene => {
			cutScene.node.emit("CLOSE_NOTICE");
		});
	}
}


```
