# TrialModeTag

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/TrialMode/TrialModeTag.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`TrialModeTag`** extends `SlotBaseModule`

## Key Methods
- `onLoadExtend(): void`
- `setupObserver(): void`
- `showTrialModeTag(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotBaseModule } from '../../Core/SlotBaseModule';
const { ccclass } = _decorator;

@ccclass
export class TrialModeTag extends SlotBaseModule {
	uiManagerModel: eno.UIManagerData = null;

	onLoadExtend(): void {
		this.setupObserver();
	}

	setupObserver(): void {
		this.uiManagerModel = this.gameLogic.getDataModel().UIManagerData;
		this.observer.watch(this.uiManagerModel, "isTrialModeActive", (isOpen) => {
			this.showTrialModeTag(isOpen);
		}, this, { fireImmediately: true });
	}

	showTrialModeTag(isOpen: boolean): void {
		this.node.active = isOpen;
	}

	protected onDestroy(): void {
		this.observer.releaseAll(this.uiManagerModel, this);
	}
}


```
