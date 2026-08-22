# SpineLoop

> **Source Path**: `assets/cc-common/cc-slot-module/Components/UI/SpineLoop.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SpineLoopTimer`** extends `Component`

## Key Methods
- `onLoad(): void`
- `playAnimation(): void`

## Source Implementation
```typescript
const { _decorator, Component, tween } = cc;
const { ccclass, property } = _decorator;

@ccclass
export class SpineLoopTimer extends Component {
	@property animationName: string = "animation";
	@property interval: number = 5;

	protected onLoad(): void {
		this.playAnimation();
	}

	playAnimation(): void {
		const animation = this.getComponent(sp.Skeleton);
		if (!animation || !animation.findAnimation(this.animationName)) {
			return;
		}

		tween(this.node)
			.call(() => {
				animation.setAnimation(0, this.animationName, false);
			})
			.delay(this.interval)
			.union()
			.repeatForever()
			.start();
	}
}


```
