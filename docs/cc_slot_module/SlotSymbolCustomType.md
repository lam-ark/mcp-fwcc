# SlotSymbolCustomType

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolCustomType.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`SymbolModuleSpriteFrame`**
- **`SymbolModuleSkeleton`**
- **`SymbolAnimationName`**

## CC Properties
- `symbolCode`
- `symbolSf`
- `symbolCode`
- `skeletonData`
- `appear`
- `idle`
- `disappear`
- `win`

## Key Methods
- `getSymbolFrame(): cc.SpriteFrame`
- `getBlurSymbolFrame(): cc.SpriteFrame`
- `getBackgroundFrame(): cc.SpriteFrame`
- `getSymbolSkeleton(): sp.SkeletonData`
- `getColorNormal(): cc.Color`
- `getColorDim(): cc.Color`

## Source Implementation
```typescript
const { _decorator } = cc;

const { ccclass, property } = _decorator;
@ccclass("SymbolModuleSpriteFrame")
export class SymbolModuleSpriteFrame {
	@property() symbolCode: string = '';
	@property({ type: cc.SpriteFrame }) symbolSf: cc.SpriteFrame = null;
}

@ccclass("SymbolModuleSkeleton")
export class SymbolModuleSkeleton {
	@property() symbolCode: string = '';
	@property({ type: sp.SkeletonData }) skeletonData = null;
}

@ccclass("SymbolAnimationName")
export class SymbolAnimationName {
	@property() appear: string = 'Appear';
	@property() idle: string = 'Idle';
	@property() disappear: string = 'Disappear';
	@property() win: string = 'Win';
}

export interface ISlotSymbolResource {
	getSymbolFrame(symbolCode: string): cc.SpriteFrame;
	getBlurSymbolFrame(symbolCode: string): cc.SpriteFrame;
	getBackgroundFrame(symbolCode: string): cc.SpriteFrame;
	getSymbolSkeleton(symbolCode: string): sp.SkeletonData;
	getColorNormal(): cc.Color;
	getColorDim(): cc.Color;
}
```
