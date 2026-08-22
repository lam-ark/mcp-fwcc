# SlotSymbolResourceManager

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolResourceManager.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SlotSymbolResourceManager`** extends `Component`

## CC Properties
- `protected`
- `protected`
- `protected`
- `protected`
- `protected`
- `protected`

## Key Methods
- `onLoad(): void`
- `getSymbolFrame(): cc.SpriteFrame`
- `getBlurSymbolFrame(): cc.SpriteFrame`
- `getBackgroundFrame(): cc.SpriteFrame`
- `getSymbolSkeleton(): sp.SkeletonData`
- `getColorNormal(): cc.Color`
- `getColorDim(): cc.Color`
- `initAssets(): void`

## Source Implementation
```typescript
const { Color, Component, _decorator } = cc;
import { SymbolModuleSpriteFrame, SymbolModuleSkeleton, ISlotSymbolResource } from "./SlotSymbolCustomType";

const { ccclass, property } = _decorator;

@ccclass
export class SlotSymbolResourceManager extends Component implements ISlotSymbolResource {

	//#region ------------------------------------------------------------------ Declare variables
	@property(SymbolModuleSpriteFrame) protected symbolSfList: SymbolModuleSpriteFrame[] = [];
	@property(SymbolModuleSpriteFrame) protected blurSymbolSfList: SymbolModuleSpriteFrame[] = [];
	@property(SymbolModuleSpriteFrame) protected backgroundSymbolSfList: SymbolModuleSpriteFrame[] = [];
	@property(SymbolModuleSkeleton) protected symbolSkeletons: SymbolModuleSkeleton[] = [];
	@property(cc.Color) protected colorNormal: cc.Color = new Color(255, 255, 255, 255);
	@property(cc.Color) protected colorDim: cc.Color = new Color(100, 100, 100, 255);

	protected staticFrameAssets: Record<string, cc.SpriteFrame> = {};
	protected blurFrameAssets: Record<string, cc.SpriteFrame> = {};
	protected backgroundFrameAssets: Record<string, cc.SpriteFrame> = {};
	protected skeletonAssets: Record<string, sp.SkeletonData> = {};

	//#endregion

	//#region  --------------------------------------------------------------- Component functions

	onLoad(): void {
		this.initAssets();
	}

	//#endregion

	//#region  ------------------------------------------------------------------ public functions

	getSymbolFrame(symbolCode: string): cc.SpriteFrame {
		return this.staticFrameAssets[symbolCode];
	}

	getBlurSymbolFrame(symbolCode: string): cc.SpriteFrame {
		return this.blurFrameAssets[symbolCode] || this.staticFrameAssets[symbolCode];
	}

	getBackgroundFrame(symbolCode: string): cc.SpriteFrame {
		return this.backgroundFrameAssets[symbolCode];
	}

	getSymbolSkeleton(symbolCode: string): sp.SkeletonData {
		return this.skeletonAssets[symbolCode];
	}

	getColorNormal(): cc.Color {
		return this.colorNormal;
	}

	getColorDim(): cc.Color {
		return this.colorDim;
	}

	//#endregion

	//#region  ----------------------------------------------------------------- private functions

	protected initAssets(): void {
		for (const frame of this.symbolSfList) {
			this.staticFrameAssets[frame.symbolCode] = frame.symbolSf;
		}

		for (const frame of this.blurSymbolSfList) {
			this.blurFrameAssets[frame.symbolCode] = frame.symbolSf;
		}

		for (const frame of this.backgroundSymbolSfList) {
			this.backgroundFrameAssets[frame.symbolCode] = frame.symbolSf;
		}

		for (const skeleton of this.symbolSkeletons) {
			this.skeletonAssets[skeleton.symbolCode] = skeleton.skeletonData;
		}
	}

	//#endregion
}
```
