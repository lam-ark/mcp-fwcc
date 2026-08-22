# SlotPromotionSpinTimes

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/Promotion/SlotPromotionSpinTimes.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SlotPromotionSpinTimes`** extends `SlotBaseModule`

## CC Properties
- `spinTimesLabel`

## Key Methods
- `onLoadExtend(): void`
- `setupObserver(): void`
- `showPromotion(): void`
- `onUpdatePromotionRemain(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotBaseModule } from "../../Core/SlotBaseModule";

const { ccclass, property } = _decorator;

@ccclass
export class SlotPromotionSpinTimes extends SlotBaseModule {
	@property(cc.Label)
	spinTimesLabel: cc.Label = null!;

	promotionDataModel: eno.PromotionData;

	onLoadExtend(): void {
		this.promotionDataModel = this.gameLogic.getDataModel().PromotionData;
		this.node.active = false;
		this.setupObserver();
	}

	setupObserver(): void {
		if (this.promotionDataModel) {
			this.observer.watch(this.promotionDataModel, "isActive", this.showPromotion.bind(this), this);
			this.observer.watch(this.promotionDataModel, "promotionRemain", this.onUpdatePromotionRemain.bind(this), this);
		}
	}

	showPromotion(isActive: boolean): void {
		this.node.active = isActive;
	}

	onUpdatePromotionRemain(promotionRemain: number): void {
		this.spinTimesLabel.string = `${promotionRemain}`;
	}

	onDestroy(): void {
		this.observer.releaseAll(this.promotionDataModel, this);
	}
}

```
