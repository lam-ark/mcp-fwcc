# SlotSymbolHistory

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/BetHistory/SlotSymbolHistory.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`HistorySymbolSpriteFrame`**
- **`export`**
- **`SlotSymbolHistory`** extends `SlotBaseModule`

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
- `getSymbolName(): string`

## Source Implementation
```typescript
const { _decorator, Color, Vec2 } = cc;
import { SlotBaseModule } from "../../Core/SlotBaseModule";
const { ccclass, property } = _decorator;

@ccclass("HistorySymbolSpriteFrame")
export class HistorySymbolSpriteFrame {
	@property()
	symbolCode: string = "";
	@property({ type: cc.SpriteFrame })
	symbolSf: cc.SpriteFrame = null;
}

@ccclass
export class SlotSymbolHistory extends SlotBaseModule {
	@property(cc.Sprite)
	symbolSprite: cc.Sprite = null;
	@property(HistorySymbolSpriteFrame)
	protected symbolSfList: HistorySymbolSpriteFrame[] = [];
	@property(cc.Color)
	dimColor: cc.Color = new Color(95, 95, 95, 255);
	@property(cc.Color)
	normalColor: cc.Color = new Color(255, 255, 255, 255);

	protected symbolAssets: any = {};
	protected symbolCode: string = "";
	protected symbolSize: cc.Vec2 = Vec2.ONE;

	onLoadExtend(): void {
		this.node.on("CHANGE_TO_SYMBOL", this.changeToSymbol, this);
		this.node.on("ENABLE_HIGHLIGHT", this.enableHighlight, this);
		this.node.on("DISABLE_HIGHLIGHT", this.disableHighlight, this);
		this.node.on("RESET", this.reset, this);

		this.symbolSfList.forEach((item) => {
			this.symbolAssets[item.symbolCode] = item.symbolSf;
		});
	}

	changeToSymbol(symbolCode: string, symbolSize: cc.Vec2 = null): void {
		this.symbolCode = symbolCode;
		this.symbolSize = symbolSize || Vec2.ONE;
		this.node["symbolCode"] = symbolCode;
		const symbolName = this.getSymbolName();

		this.node["symbolCode"] = this.symbolCode;
		this.node["symbolName"] = symbolName;

		this.symbolSprite.spriteFrame = this.symbolAssets[symbolName];
	}

	getSymbolCode(): string {
		return this.symbolCode;
	}

	enableHighlight(): void {
		this.node["isHighlight"] = true;
		this.symbolSprite.node.color = this.normalColor;
	}

	disableHighlight(): void {
		this.node["isHighlight"] = false;
		this.symbolSprite.node.color = this.dimColor;
	}

	reset(): void {
		this.enableHighlight();
	}

	protected getSymbolName(): string {
		return this.symbolSize.equals(Vec2.ONE) ? this.symbolCode : `${this.symbolCode}_${this.symbolSize.x}_${this.symbolSize.y}`;
	}
}

```
