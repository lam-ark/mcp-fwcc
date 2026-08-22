# BonusGameItemModule

> **Source Path**: `assets/cc-common/cc-slot-module/GameMode/BonusGame/BonusGameItemModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`BonusItemSpriteFrame`**
- **`export`**
- **`BonusGameItemModule`** extends `SlotBaseModule`

## CC Properties
- `symbolId`
- `symbolSf`
- `protected`
- `protected`
- `protected`
- `protected`

## Key Methods
- `onLoad(): void`
- `init(): void`
- `onClickItem(): void`
- `dim(): void`
- `undim(): void`
- `showScore(): void`
- `setScore(): void`
- `enableClick(): void`
- `disableClick(): void`
- `resetBox(): void`
- `resetBoxUI(): void`

## Source Implementation
```typescript
const { _decorator, tween, Button, Color } = cc;
import { SlotBaseModule } from "../../Core/SlotBaseModule";
import { SlotCustomEvent } from "../../Components/Common/SlotCustomType";
const { ccclass, property } = _decorator;

@ccclass("BonusItemSpriteFrame")
export class BonusItemSpriteFrame {
	@property() symbolId: string = "";
	@property(cc.SpriteFrame) symbolSf: cc.SpriteFrame = null;
}

@ccclass
export class BonusGameItemModule extends SlotBaseModule {
	@property(cc.Sprite) protected itemSprite: cc.Sprite = null;
	@property(BonusItemSpriteFrame) protected itemSfList: BonusItemSpriteFrame[] = [];
	@property(cc.Color) protected colorNormal: cc.Color = new Color(255, 255, 255, 255);
	@property(cc.Color) protected colorDim: cc.Color = new Color(100, 100, 100, 255);
	@property
	soundBoxClick: string = "";
	@property
	soundBoxOpen: string = "";

	isAutoTrigger: boolean = false;
	tweenOpen: any = null;
	isSelected: boolean = false;
	itemId: number = 0;
	boxBtn: cc.Button = null;

	protected callback: Function = () => {};
	protected staticFrameAssets: Record<string, cc.SpriteFrame> = {};

	onLoad(): void {
		super.onLoad();
		this.node.on("INIT", this.init, this);
		this.node.on("DIM", this.dim, this);
		this.node.on("UNDIM", this.undim, this);
		this.node.on("BOX_OPEN", this.playAnimOpen, this);
		this.node.on("BOX_RESET", this.resetBox, this);
		this.node.on("ON_CLICK_ITEM", this.onClickItem, this);
		this.node.on("ENABLE_CLICK", this.enableClick, this);
		this.node.on("DISABLE_CLICK", this.disableClick, this);

		this.node["isOpen"] = false;

		for (const frame of this.itemSfList) {
			this.staticFrameAssets[frame.symbolId] = frame.symbolSf;
		}
		this.boxBtn = this.getComponent(Button);
	}

	init(itemId: number): void {
		this.itemId = itemId;
		this.resetBoxUI();
	}

	onClickItem(_e: any, isAutoTrigger: boolean = false): void {
		if (this.node["isOpen"]) {
			return;
		}
		let event = new SlotCustomEvent("CLICK_ITEM", true, { itemId: this.itemId, isAutoTrigger });
		this.node.dispatchEvent(event);
		this.isSelected = true;
	}

	playAnimOpen(value: number, callback: Function = () => {}): void {
		this.callback = callback;
		this.node["isOpen"] = true;
		this.disableClick();
		this.soundBoxOpen && this.soundPlayer && this.soundPlayer.playSfx(this.soundBoxOpen);
		this.itemSprite.node.active = true;
		this.itemSprite.spriteFrame = this.staticFrameAssets[value];

		if (this.tweenOpen) {
			this.tweenOpen.stop();
		}
		this.tweenOpen = tween(this.node)
			.delay(0.5)
			.call(() => {
				this.showScore(value);
			})
			.delay(0.5)
			.call(() => {
				this.callback && this.callback();
				this.callback = null;
				this.tweenOpen = null;
			});
		this.tweenOpen.start();
	}

	dim(): void {
		this.itemSprite.node.color = this.colorDim;
	}

	undim(): void {
		this.itemSprite.node.color = this.colorNormal;
	}

	showScore(value: number): void {
		// if (this.eventManager) {
		// 	this.eventManager.emit("SHOW_BONUS_VALUE", value, this.node.getWorldPosition());
		// }
	}

	setScore(value: number): void {
		this.itemSprite.node.active = false;
		// this.labelScore.getComponent(Label).string = 'x' + (value || 0);
		// this.labelScore._uiProps.opacity = 1;
	}

	enableClick(): void {
		this.boxBtn.interactable = true;
	}

	disableClick(): void {
		this.boxBtn.interactable = false;
	}

	resetBox(): void {
		this.resetBoxUI();
		this.node["isOpen"] = false;
		this.enableClick();
		this.isSelected = false;
	}

	resetBoxUI(): void {
		this.itemSprite.node.color = this.colorNormal;
		this.itemSprite.spriteFrame = this.staticFrameAssets["0"];
	}
}

```
