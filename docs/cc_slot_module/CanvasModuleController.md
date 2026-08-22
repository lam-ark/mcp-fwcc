# CanvasModuleController

> **Source Path**: `assets/cc-common/cc-slot-module/Components/Compat/CanvasModuleController.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`CanvasModuleController`** extends `Component`

## CC Properties
- `autoOrientation`
- `isPortrait`
- `canvas`
- `fitByOrientation`
- `useCustomDesignResolution`
- `customDSWidth`
- `customDSHeight`
- `widgetNodes`
- `minScreenRatio`
- `isDebug`

## Key Methods
- `onLoad(): void`
- `start(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator, Component } = cc;
const { ccclass, property } = _decorator;

@ccclass
export class CanvasModuleController extends Component {
	@property(cc.Boolean) autoOrientation: boolean = false;
	@property(cc.Boolean) isPortrait: boolean = true;
	@property(cc.Canvas) canvas: cc.Canvas = null;
	@property(cc.Boolean) fitByOrientation: boolean = true;
	@property(cc.Boolean) useCustomDesignResolution: boolean = false;
	@property(cc.Integer) customDSWidth: number = 1280;
	@property(cc.Integer) customDSHeight: number = 720;
	@property([cc.Widget]) widgetNodes: Array<cc.Widget> = [];
	@property(cc.Integer) minScreenRatio: number = 0;

	@property(cc.Boolean) isDebug: boolean = false;
	_canvasController: eno.CanvasControllerWrapper;

	onLoad(): void {
		this._canvasController = new eno.CanvasControllerWrapper(
			this.autoOrientation,
			this.isPortrait,
			this.fitByOrientation,
			this.useCustomDesignResolution,
			this.customDSWidth,
			this.customDSHeight,
			this.widgetNodes,
			this.minScreenRatio,
			this.isDebug,
			this.canvas,
			this.node);
	}

	start(): void {
		this._canvasController && this._canvasController.start();
	}

	onDestroy(): void {
		this._canvasController && this._canvasController.onDestroy();
	}
}


```
