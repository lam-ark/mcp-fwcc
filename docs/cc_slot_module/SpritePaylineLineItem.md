# SpritePaylineLineItem

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Payline/LineDrawing/scripts/SpritePaylineLineItem.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SpritePaylineLineItem`** extends `SlotLineItem`

## CC Properties
- `protected`
- `protected`
- `protected`

## Key Methods
- `init(): void`

## Source Implementation
```typescript
const { _decorator, Sprite, Vec2 } = cc;
import { SlotLineItem } from './SlotLineItem';

const { ccclass, property } = _decorator;

@ccclass
export class SpritePaylineLineItem extends SlotLineItem {
	//#region Properties

	@property(cc.Sprite) protected spriteComponent: cc.Sprite = null;
	@property(cc.SpriteFrame) protected lineSpriteFrames: cc.SpriteFrame[] = [];
	@property(Vec2) protected linePositions: cc.Vec2[] = [];

	//#region Public Methods

	public init(payLineID: number): void {
		super.init(payLineID);
		if (!this.spriteComponent) {
			this.spriteComponent = this.getComponent(Sprite);
		}
		if (!this.spriteComponent) {
			return;
		}
		if (!this.lineSpriteFrames[payLineID]) {
			return;
		}

		this.spriteComponent.spriteFrame = this.lineSpriteFrames[payLineID];

		if (this.linePositions[payLineID]) {
			this.spriteComponent.node.setPosition(this.linePositions[payLineID].x, this.linePositions[payLineID].y, 0);
		}
	}

	//#endregion
}
```
