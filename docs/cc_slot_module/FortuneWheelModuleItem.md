# FortuneWheelModuleItem

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/FortuneWheelGame/Scripts/Table/FortuneWheelModuleItem.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`FortuneWheelModuleItem`** extends `SlotBaseModule`

## CC Properties
- `protected`
- `lbIndex`

## Key Methods
- `onLoad(): void`
- `init(): void`
- `extendInit(): void`
- `reset(): void`

## Source Implementation
```typescript
const { _decorator, Graphics } = cc;
import { SlotBaseModule } from "../../../../Core/SlotBaseModule";
const { ccclass, property } = _decorator;

@ccclass
export class FortuneWheelModuleItem extends SlotBaseModule {
	@property(cc.Sprite) protected itemSprite: cc.Sprite = null;
	@property(cc.Label) lbIndex: cc.Label = null;

	itemId: number = 0;
	protected staticFrameAssets: Record<string, cc.SpriteFrame> = {};

	onLoad(): void {
		super.onLoad();
		this.node.on("INIT", this.init, this);
		this.node.on("RESET", this.reset, this);
		this.onLoadExtend();
	}

	init(data: any): void {
		const { itemId, value } = data;
		this.itemId = itemId;
		this.lbIndex.string = itemId.toString();
		this.extendInit(itemId);
	}
	
	extendInit(itemId: number): void {
		const graphicsNode = this.node.getComponentInChildren(Graphics).node;
		graphicsNode.emit("INIT",itemId);
	}

	reset(): void {
		this.itemId = 0;
	}
}

```
