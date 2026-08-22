# PageViewIndicatorModule

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/Info/PageViewIndicatorModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`PageViewIndicatorModule`** extends `PageViewIndicator`

## CC Properties
- `unSelectedSpriteFrame`

## Key Methods
- `_changedState(): void`
- `setSpriteFrame(): void`

## Source Implementation
```typescript

const { _decorator, PageViewIndicator } = cc;
const { ccclass, property } = _decorator;

@ccclass
export class PageViewIndicatorModule extends PageViewIndicator {
	@property(cc.SpriteFrame)
	unSelectedSpriteFrame: cc.SpriteFrame = null;

	_changedState(): void {
		let indicators = this._indicators;
		if (indicators.length === 0) {
			return;
		}
		let idx = (this._pageView as any)._curPageIdx;
		if (idx >= indicators.length) {
			return;
		}
		for (let i = 0; i < indicators.length; ++i) {
			let node = indicators[i];
			if(node){
				let sprite = node.getComponent(cc.Sprite);
				if(sprite){
					sprite.spriteFrame = this.unSelectedSpriteFrame;
				}
			}
		}
		this.setSpriteFrame({indicators, idx});
	};

	setSpriteFrame({indicators, idx}: {indicators: cc.Node[], idx: number}): void {
		let node = indicators[idx];
		if(node){
			let sprite = node.getComponent(cc.Sprite);
			if(sprite){
				sprite.spriteFrame = this.spriteFrame;
			}
		}
	}
}

```
