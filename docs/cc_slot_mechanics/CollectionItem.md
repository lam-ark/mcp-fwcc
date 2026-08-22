# CollectionItem

> **Source Path**: `assets/cc-common/cc-slot-mechanics/CollectionItem/scripts/CollectionItem.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`CollectionItem`** extends `SlotBaseModule`

## CC Properties
- `sprItem`
- `lbItemName`
- `lbCollection`
- `itemFrames`

## Key Methods
- `onLoadExtend(): void`
- `init(): void`
- `updateData(): void`
- `reset(): void`

## Source Implementation
```typescript
const { _decorator, SpriteFrame } = cc;
import { SlotBaseModule } from '../../../cc-slot-module/SlotModuleExport';
const { ccclass, property } = _decorator;

@ccclass
export class CollectionItem extends SlotBaseModule {
	@property(cc.Sprite) sprItem: cc.Sprite = null;
	@property(cc.Label) lbItemName: cc.Label = null;
	@property(cc.Label) lbCollection: cc.Label = null;
	@property prefix: string = '';

	@property([SpriteFrame]) itemFrames: cc.SpriteFrame[] = [];

	_itemName: string = "";
	_currentAmount: number = 0;
	_totalAmount: number = 0;
	_assets: Record<string, cc.SpriteFrame> = {};

	onLoadExtend(): void {
		this._assets = eno.CommonUtils.convertAssetArrayToObject(this.itemFrames);
	}

	init(itemName: string): void {
		this._itemName = itemName;
		const spriteFrame = this._assets[`${this.prefix}${itemName}`];
		if (spriteFrame) {
			this.sprItem.spriteFrame = spriteFrame;
		}

		this.lbItemName.string = itemName;
	}

	updateData(current: number, total: number): void {
		this._currentAmount = current;
		this._totalAmount = total;
		this.lbCollection.string = `${current}/${total}`;
	}

	reset(): void {
		this._currentAmount = 0;
		this._totalAmount = 0;
		this.lbCollection.string = `${this._currentAmount}/${this._totalAmount}`;
	}
}
```
