# CustomCanvasModuleSize

> **Source Path**: `assets/cc-common/cc-slot-module/Components/Compat/CustomCanvasModuleSize.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`CustomCanvasModuleSize`** extends `Component`

## CC Properties
- `customDSWidth`
- `customDSHeight`
- `isPortrait`

## Key Methods
- `onLoad(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator, Component, director } = cc;
import { CanvasModuleController } from './CanvasModuleController';
const { ccclass, property } = _decorator;

@ccclass
export class CustomCanvasModuleSize extends Component {
	@property(cc.Integer) customDSWidth = 1280;
	@property(cc.Integer) customDSHeight = 720;
	@property(cc.Boolean) isPortrait: boolean = false;

	_customCanvasSize: eno.CustomCanvasSizeWrapper = null;

	onLoad(): void {
		const scene = director.getScene();
		const canvasController = scene.getComponentInChildren(CanvasModuleController);
		this._customCanvasSize = new eno.CustomCanvasSizeWrapper(this.customDSWidth, this.customDSHeight, this.isPortrait, canvasController._canvasController);
	}

	onDestroy(): void {
		this._customCanvasSize && this._customCanvasSize.onDestroy();
	}
}


```
