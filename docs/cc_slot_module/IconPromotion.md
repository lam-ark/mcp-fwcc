# IconPromotion

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/Promotion/IconPromotion.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`IconPromotion`** extends `SlotBaseModule`

## Key Methods
- `onLoadExtend(): void`
- `setupObserver(): void`
- `showPromotion(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotBaseModule } from '../../Core/SlotBaseModule';
const { ccclass, property } = _decorator;

@ccclass
export class IconPromotion extends SlotBaseModule {
	promotionDataModel: eno.PromotionData;

	onLoadExtend(): void {
		this.promotionDataModel = this.gameLogic.getDataModel().PromotionData;
		this.node.active = false;
		this.setupObserver();
	}

	setupObserver(): void {
		this.observer.watch(this.promotionDataModel, "isActive", this.showPromotion.bind(this), this, { fireImmediately: true });
	}

	showPromotion(isActive: boolean): void {
		this.node.active = isActive;
	}

	onDestroy(): void {
		this.observer.releaseAll(this.promotionDataModel, this);
	}
}


```
