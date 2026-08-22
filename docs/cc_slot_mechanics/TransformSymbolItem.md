# TransformSymbolItem

> **Source Path**: `assets/cc-common/cc-slot-mechanics/TransformSymbol/scripts/TransformSymbolItem.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`TransformSymbolItem`** extends `Component`

## Key Methods
- `transform(): void`
- `playAnimationTransform(): void`

## Source Implementation
```typescript
const { Component, _decorator } = cc;

const { ccclass, property } = _decorator;

// ATTACH THIS COMPONENT TO SLOT SYMBOL NODE IF YOU WANT TO PLAY ANIMATION TRANSFORM SYMBOL

@ccclass
export class TransformSymbolItem extends Component {
	@property animationName: string = 'transform';
	@property transformDuration: number = 0;

	public transform(symbolCode: string): void {
		this.playAnimationTransform(symbolCode);
	}

	protected playAnimationTransform(_symbolCode: string): void {
		//TODO: Play animation transform symbol, this function will be override by each game
		if (this.animationName) {
			this.node.emit("PLAY_ANIMATION", this.animationName);
		}
	}
}
```
