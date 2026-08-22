# PaylineWinFrame

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Payline/PaylineModule/WinFrame/scripts/PaylineWinFrame.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`PaylineWinFrame`** extends `Component`

## CC Properties
- `protected`

## Key Methods
- `onLoad(): void`
- `onDestroy(): void`
- `reuse(): void`
- `unuse(): void`
- `playAnimation(): void`
- `stopAnimation(): void`
- `show(): void`
- `hide(): void`
- `reset(): void`
- `onLoadExtend(): void`
- `onDestroyExtend(): void`
- `registerEvents(): void`
- `unregisterEvents(): void`

## Source Implementation
```typescript
const { _decorator, Component, isValid } = cc;
const { ccclass, property } = _decorator;
const { SpineUtils } = eno;

@ccclass
export class PaylineWinFrame extends Component {
	//#region Properties

	@property(sp.Skeleton)
	protected spine = null;

	@property
	protected defaultAnimName: string = 'animation';

	//#endregion

	//#region Life Circle

	protected onLoad(): void {
		this.registerEvents();
		this.onLoadExtend();
	}

	protected onDestroy(): void {
		this.unregisterEvents();
		this.onDestroyExtend();
	}

	public reuse(): void {
		this.node.active = true;
	}

	public unuse(): void {
		this.node.active = false;
	}

	//#endregion

	//#region Public Methods

	public playAnimation(animationName: string, duration: number = 2): void {
		this.unscheduleAllCallbacks();

		this.show();

		if (SpineUtils.hasAnimation(this.spine, animationName) == false) {
			animationName = this.defaultAnimName;
		}

		if (this.spine) {
			this.spine.setAnimation(0, animationName, false);
			this.scheduleOnce(this.hide, duration);
		}
	}

	public stopAnimation(): void {
		if (this.spine) {
			this.spine.clearTracks();
		}
	}

	public show(): void {
		this.node.active = true;
	}

	public hide(): void {
		this.node.active = false;
	}

	public reset(): void {
		if (this.spine) {
			this.spine.clearTracks();
		}
		this.node.active = false;
	}
	//#endregion

	//#region Internal Methods

	protected onLoadExtend(): void { }

	protected onDestroyExtend(): void { }

	protected registerEvents(): void {
		this.node.on("PLAY_ANIMATION", this.playAnimation, this);
		this.node.on("STOP_ANIMATION", this.stopAnimation, this);
		this.node.on("RESET", this.reset, this);
		this.node.on("SHOW", this.show, this);
		this.node.on("HIDE", this.hide, this);
	}

	protected unregisterEvents(): void {
		if (isValid(this.node)) {
			this.node.targetOff(this);
		}
	}

	//#endregion
}
```
