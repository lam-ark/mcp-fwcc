# BonusItemHistoryModule

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/BetHistory/BonusItemHistoryModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`HistoryBonusSymbolSpriteFrame`**
- **`export`**
- **`BonusItemHistoryModule`** extends `SlotBaseModule`

## CC Properties
- `symbolCode`
- `symbolSf`
- `symbolSprite`
- `protected`
- `dimColor`
- `normalColor`

## Key Methods
- `onLoadExtend(): void`
- `changeToSymbol(): void`
- `getSymbolCode(): string`
- `enableHighlight(): void`
- `disableHighlight(): void`
- `reset(): void`

## Source Implementation
```typescript
const { _decorator, Color } = cc;
import { SlotBaseModule } from "../../Core/SlotBaseModule";
const { ccclass, property } = _decorator;

@ccclass
export class HistoryBonusSymbolSpriteFrame {
	@property()
	symbolCode: string = "";
	@property({ type: cc.SpriteFrame })
	symbolSf: cc.SpriteFrame = null;
}

@ccclass
export class BonusItemHistoryModule extends SlotBaseModule {
	@property(cc.Sprite)
	symbolSprite: cc.Sprite = null;
	@property()
	protected symbolSfList: HistoryBonusSymbolSpriteFrame[] = [];
	@property(cc.Color)
	dimColor: cc.Color = new Color(95, 95, 95, 255);
	@property(cc.Color)
	normalColor: cc.Color = Color.WHITE;

	protected symbolAssets: any = {};
	protected symbolCode: string = "";

	onLoadExtend(): void {
		this.node.on("CHANGE_TO_SYMBOL", this.changeToSymbol, this);
		this.node.on("ENABLE_HIGHLIGHT", this.enableHighlight, this);
		this.node.on("DISABLE_HIGHLIGHT", this.disableHighlight, this);
		this.node.on("RESET", this.reset, this);

		this.symbolSfList.forEach((item) => {
			this.symbolAssets[item.symbolCode] = item.symbolSf;
		});
	}

	changeToSymbol(symbolCode: string): void {
		this.symbolCode = symbolCode;
		this.node["symbolCode"] = symbolCode;
		this.symbolSprite.spriteFrame = this.symbolAssets[symbolCode] || null;
	}

	getSymbolCode(): string {
		return this.symbolCode;
	}

	enableHighlight(): void {
		this.symbolSprite.node.color = this.normalColor;
	}

	disableHighlight(): void {
		this.symbolSprite.node.color = this.dimColor;
	}

	reset(): void {
		this.enableHighlight();
	}
}

```
