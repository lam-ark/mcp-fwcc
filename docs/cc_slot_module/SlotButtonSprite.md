# SlotButtonSprite

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/SpinButton/SlotButtonSprite.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SlotButtonSprite`** extends `SlotBaseModule`

## CC Properties
- `normal`
- `pressed`
- `hover`
- `disabled`
- `stopNormal`
- `stopHover`
- `stopPress`

## Key Methods
- `onLoadExtend(): void`
- `onStateChange(): void`

## Source Implementation
```typescript
const { _decorator, Sprite } = cc;
import { SlotBaseModule } from "../../Core/SlotBaseModule";
import { SPIN_BUTTON_STATE_ENUM } from "../../Components/Common/SlotEnum";
const { ccclass, property } = _decorator;

@ccclass
export class SlotButtonSprite extends SlotBaseModule {
	@property(cc.SpriteFrame)
	normal: cc.SpriteFrame = null;
	@property(cc.SpriteFrame)
	pressed: cc.SpriteFrame = null;
	@property(cc.SpriteFrame)
	hover: cc.SpriteFrame = null;
	@property(cc.SpriteFrame)
	disabled: cc.SpriteFrame = null;
	@property(cc.SpriteFrame)
	stopNormal: cc.SpriteFrame = null;
	@property(cc.SpriteFrame)
	stopHover: cc.SpriteFrame = null;
	@property(cc.SpriteFrame)
	stopPress: cc.SpriteFrame = null;
	
	buttonSprite: cc.Sprite = null;

	lastState: number = SPIN_BUTTON_STATE_ENUM.NORMAL;
	isAutoSpin: boolean = false;

	onLoadExtend(): void {
		this.node.on("SPIN_BUTTON_STATE_CHANGE", this.onStateChange, this);
		this.buttonSprite = this.node.getComponent(Sprite) || this.node.getComponentInChildren(Sprite);
	}

	onStateChange(state, isAutoSpin: boolean = false): void {
		this.isAutoSpin = isAutoSpin;
		let spriteFrame = null;

		switch (state) {
			case SPIN_BUTTON_STATE_ENUM.NORMAL:
				spriteFrame = this.normal;
				break;
			case SPIN_BUTTON_STATE_ENUM.HOVER:
				spriteFrame = this.hover;
				break;
			case SPIN_BUTTON_STATE_ENUM.SPINNING:
				spriteFrame = this.disabled;
				break;
			case SPIN_BUTTON_STATE_ENUM.STOPPABLE:
				spriteFrame = this.stopNormal;
				break;
			case SPIN_BUTTON_STATE_ENUM.DISABLE:
				spriteFrame = this.disabled;
				break;
		}

		if (spriteFrame) {
			this.buttonSprite.spriteFrame = spriteFrame;
		}

		this.lastState = state;
	}
}

```
