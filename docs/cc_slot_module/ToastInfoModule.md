# ToastInfoModule

> **Source Path**: `assets/cc-common/cc-slot-module/GUI/ToastInfo/ToastInfoModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`ToastInfoModule`** extends `SlotBaseModule`

## CC Properties
- `lblNotify`

## Key Methods
- `onLoadExtend(): void`
- `showMessage(): void`
- `hideMessage(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator, tween, v3 } = cc;
import { SlotBaseModule } from "../../Core/SlotBaseModule";
const { ccclass, property } = _decorator;
const { setOpacity } = eno;

@ccclass
export class ToastInfoModule extends SlotBaseModule {
	@property(cc.Label)
	lblNotify: cc.Label = null;
	@property
	delayTime: number = 1.5;

	_tweenToast: any = null;

	onLoadExtend(): void {
		this.gameLogic.on("NETWORK_WARNING", this.showMessage, this);
		this.node.active = false;
	}

	showMessage(message: string): void {
		this.lblNotify.string = message;
		setOpacity(this.node, 255);
		this.node.active = true;
		this.node.setScale(0.5);
		if (this._tweenToast) {
			this._tweenToast.stop();
		}
		this._tweenToast = tween(this.node)
			.to(0.2, { scale: 1 })
			.delay(this.delayTime)
			.call(() => {
				this._tweenToast = null;
				this.node.active = false;
			})
			.start();
	}

	hideMessage(): void {
		this.node.active = false;
	}

	onDestroy(): void {
		this._tweenToast && this._tweenToast.stop();
		this._tweenToast = null;
	}
}

```
