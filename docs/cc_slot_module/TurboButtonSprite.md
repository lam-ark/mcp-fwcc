# TurboButtonSprite

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/Turbo/TurboButtonSprite.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`TurboButtonSprite`** extends `SlotBaseModule`

## CC Properties
- `normal`
- `pressed`
- `hover`
- `disabled`

## Key Methods
- `onLoadExtend(): void`
- `onStateChange(): void`

## Source Implementation
```typescript
const { _decorator, Sprite } = cc;
import { SlotBaseModule } from '../../Core/SlotBaseModule';
const { ccclass, property } = _decorator;

export const BUTTON_STATE = {
	NORMAL: 0,
	PRESSED: 1,
	HOVER: 2,
	DISABLED: 3
}

@ccclass
export class TurboButtonSprite extends SlotBaseModule {
	@property(cc.SpriteFrame)
	normal: cc.SpriteFrame = null;
	@property(cc.SpriteFrame)
	pressed: cc.SpriteFrame = null;
	@property(cc.SpriteFrame)
	hover: cc.SpriteFrame = null;
	@property(cc.SpriteFrame)
	disabled: cc.SpriteFrame = null;

	buttonSprite: cc.Sprite = null;

	onLoadExtend(): void {
		this.node.on('TURBO_BUTTON_STATE_CHANGE', this.onStateChange.bind(this));
		this.buttonSprite = this.node.getComponent(Sprite);
	}

	onStateChange(state): void {
		switch (state) {
			case BUTTON_STATE.NORMAL:
				this.buttonSprite.spriteFrame = this.normal;
				break;
			case BUTTON_STATE.PRESSED:
				this.buttonSprite.spriteFrame = this.pressed;
				break;
			case BUTTON_STATE.HOVER:
				this.buttonSprite.spriteFrame = this.hover;
				break;
			case BUTTON_STATE.DISABLED:
				this.buttonSprite.spriteFrame = this.disabled;
				break;
		}
	}
}


```
