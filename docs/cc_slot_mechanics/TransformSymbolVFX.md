# TransformSymbolVFX

> **Source Path**: `assets/cc-common/cc-slot-mechanics/TransformSymbol/scripts/TransformSymbolVFX.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`export`**
- **`TransformSymbolVFX`** extends `Component`

## CC Properties
- `skeleton`

## Key Methods
- `onLoad(): void`
- `onPlayAnimation(): void`
- `onStopAnimation(): void`

## Source Implementation
```typescript
const { Component, _decorator } = cc;

const { ccclass, property } = _decorator;

@ccclass
export class TransformSymbolVFX extends Component {
	@property(sp.Skeleton) skeleton: sp.Skeleton = null;
	@property animation: string = "animation";
	@property isLoop: boolean = false;

	onLoad(): void {
		if (!this.skeleton) {
			this.skeleton = this.node.getComponent(sp.Skeleton);
		}

		if (this.skeleton) {
			this.node.on('PLAY_ANIMATION', this.onPlayAnimation, this);
			this.node.on('STOP_ANIMATION', this.onStopAnimation, this);
		}
		this.node.active = false;
	}

	onPlayAnimation(): void {
		this.skeleton.node.active = true;
		this.skeleton.setAnimation(0, this.animation, this.isLoop);
	}

	onStopAnimation(): void {
		this.skeleton.node.active = false;
	}
}
```
