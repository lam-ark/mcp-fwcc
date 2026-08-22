# SymbolPayoutViewer

> **Source Path**: `assets/cc-common/cc-slot-module/BasePortrait/SymbolPaytable/SymbolPayoutViewer.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SymbolPayoutViewer`** extends `SlotBaseModule`

## CC Properties
- `symbolPayout`
- `payoutInfoSprite`
- `payoutInfoSf`
- `frame`
- `normalFrameSf`
- `specialFrameSf`

## Key Methods
- `showSymbolInfo(): void`
- `updateContent(): void`
- `updatePosition(): void`
- `updatePayoutInfo(): void`
- `layoutContent(): void`
- `calculateOffsetX(): number`
- `hideSymbolInfo(): void`
- `playSfxClick(): void`

## Source Implementation
```typescript
const { _decorator, Layout, warn } = cc;
import { SlotSymbolPayout, SymbolPayoutSf } from "./SlotSymbolPayout";
import { SlotBaseModule } from "../../Core/SlotBaseModule";

const { ccclass, property } = _decorator;
@ccclass
export class SymbolPayoutViewer extends SlotBaseModule {
	@property(SlotSymbolPayout)
	symbolPayout: SlotSymbolPayout = null;
	@property(cc.Sprite)
	payoutInfoSprite: cc.Sprite = null;
	@property(SymbolPayoutSf)
	payoutInfoSf: SymbolPayoutSf[] = [];
	@property(cc.Sprite)
	frame: cc.Sprite = null;
	@property(cc.SpriteFrame)
	normalFrameSf: cc.SpriteFrame = null;
	@property(cc.SpriteFrame)
	specialFrameSf: cc.SpriteFrame = null;
	@property
	normalSymbolFirstPosX: number = -50;
	@property
	normalSymbolSecondPosX: number = 50;
	@property
	specialSymbolFirstPosX: number = -50;
	@property
	specialSymbolSecondPosX: number = 50;

	data: any = null;

	showSymbolInfo(data: any): void {
		this.playSfxClick();
		this.data = data;
		this.updateContent();
		this.updatePosition();
		this.layoutContent();
	}

	updateContent(): void {
		const { isSpecialSymbol, symbolCode } = this.data;
		this.frame.spriteFrame = isSpecialSymbol ? this.specialFrameSf : this.normalFrameSf;
		this.updatePayoutInfo(symbolCode);
		this.symbolPayout.showSymbolPayout(symbolCode);
	}

	updatePosition(): void {
		const { symbolPos } = this.data;
		this.node.setPosition(symbolPos.x + this.calculateOffsetX(), symbolPos.y);
	}

	updatePayoutInfo(symbolCode: string): void {
		const symbolAsset = this.payoutInfoSf.find(sf => sf.symbolCode === symbolCode);
		if (!symbolAsset) {
			warn(`Symbol Payout Info not found: ${symbolCode}`);
			return;
		}
		this.payoutInfoSprite.spriteFrame = symbolAsset.symbolSf;
	}

	layoutContent(): void {
		const { isSpecialSymbol, direction } = this.data;
		const isLeftToRight = direction === Layout.HorizontalDirection.LEFT_TO_RIGHT;
		const firstPosX = isSpecialSymbol ? this.specialSymbolFirstPosX : this.normalSymbolFirstPosX;
		const secondPosX = isSpecialSymbol ? this.specialSymbolSecondPosX : this.normalSymbolSecondPosX;
		if (isLeftToRight) {
			this.symbolPayout.node.setPosition(firstPosX, 0, 0);
			this.payoutInfoSprite.node.setPosition(secondPosX, 0, 0);
		} else {
			if (isSpecialSymbol) {
                this.symbolPayout.node.setPosition(-firstPosX, 0, 0);
                this.payoutInfoSprite.node.setPosition(-secondPosX, 0, 0);
            } else {
                this.payoutInfoSprite.node.setPosition(firstPosX, 0, 0);
                this.symbolPayout.node.setPosition(secondPosX, 0, 0);
            }
		}
	}

	calculateOffsetX(): number {
		const { direction, symbolWidth } = this.data;
		const { LEFT_TO_RIGHT } = Layout.HorizontalDirection; 
		const halfFrame = this.frame.node.width / 2;
		const halfSymbol = symbolWidth / 2;
		const halfWidth = halfFrame - halfSymbol;
		return direction === LEFT_TO_RIGHT ? halfWidth : -halfWidth;
	}

	hideSymbolInfo(): void {
		this.playSfxClick();
		this.symbolPayout.resetSymbolPayout();
		this.node.active = false;
	}

	playSfxClick(): void {
		this.soundPlayer && this.soundPlayer.playSFXClick();
	}
}

```
