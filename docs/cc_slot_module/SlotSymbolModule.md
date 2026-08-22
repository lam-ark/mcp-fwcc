# SlotSymbolModule

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SlotSymbolModule`** extends `Component`

## CC Properties
- `protected`
- `protected`
- `protected`
- `animName`

## Key Methods
- `index(): number`
- `onLoad(): void`
- `onDestroy(): void`
- `getModuleComponent(): SlotSymbolModule`
- `setResourceManager(): void`
- `init(): void`
- `mapSymbolData(): `
- `setIndex(): void`
- `getIndex(): number`
- `getIsPlaying(): boolean`
- `setOwner(): void`
- `getOwner(): string`
- `setSize(): void`
- `registerEvents(): void`
- `unregisterEvents(): void`

## Source Implementation
```typescript
const { _decorator, Component, error, isValid, log, Vec2, warn } = cc;
import { SPECIAL_SYMBOL_KEY, SymbolIndexType, SymbolOwnerType } from "../../../Components/Common/SlotEnum";
import { ISlotSymbolResource, SymbolAnimationName } from "./SlotSymbolCustomType";
import { SlotSymbolResourceManager } from "./SlotSymbolResourceManager";
const { SpineUtils } = eno;
const { ccclass, property } = _decorator;

@ccclass
export class SlotSymbolModule extends Component {
	//#region Properties
	@property
	protected isDebug: boolean = false;
	@property(cc.Sprite) protected sprite = null;
	@property(sp.Skeleton) protected spine = null;
	@property(cc.Sprite) protected bg = null;
	@property(SymbolAnimationName)
	animName: SymbolAnimationName = null;

	protected isPlaying: boolean = false;
	protected hasSkeletonData: boolean = false;
	protected resourceManager: ISlotSymbolResource = null;

	public symbolCode: string = '';
	public size: cc.Vec2 = new Vec2(1, 1);
	public sizeCount: number = 1;

	private _index: number = SymbolIndexType.UNUSED;
	private _owner: string = SymbolOwnerType.NONE;

	_rendererList: cc.Node[] = [];

	get index(): number {
		return this._index;
	}
	set index(value: number) {
		this._index = value;
	}

	//#endregion

	//#region Life Circle

	onLoad(): void {
		// fast way to access component
		this.node['__SymbolModule__'] = this;

		this.setResourceManager();
		this.registerEvents();
		this.addRendererList();
		this.onLoadExtend();
	}

	onDestroy(): void {
		this.unregisterEvents();
		this.onDestroyExtend();
	}

	static getModuleComponent(node: cc.Node): SlotSymbolModule {
		return node['__SymbolModule__'] || node.getComponent(SlotSymbolModule);
	}

	//#endregion

	//#region Initialization methods

	setResourceManager(): void {
		this.resourceManager = this.getComponent(SlotSymbolResourceManager);
	}

	init(symbolValue: string, initSize: cc.Vec2 = null): void {
		if (!this.resourceManager) {
			this.setResourceManager();
		}

		const { symbolCode, symbolSize } = this.mapSymbolData(symbolValue, initSize);
		if (this.spine && this.symbolCode != symbolCode && !this.node[SPECIAL_SYMBOL_KEY]) {
			this.spine.skeletonData = null;
		}
		this.symbolCode = symbolCode;
		this.setSize(symbolSize);
		this.node["symbolCode"] = this.symbolCode;
		this.node["symbolName"] = this.getSymbolName();
		this.initExtend(symbolCode, symbolSize);
	}

	mapSymbolData(symbolValue: string, initSize: cc.Vec2 = null): { symbolCode: string, symbolSize: cc.Vec2 } {
		const splitData = symbolValue.split('_');
		let symbolSize = initSize;
		if (!initSize || initSize.equals(Vec2.ZERO)) {
			if (splitData.length > 1) {
				symbolSize = new Vec2(Number(splitData[1]), Number(splitData[2]));
			} else {
				symbolSize = Vec2.ONE;
			}
		}
		const symbolCode = !initSize || symbolSize.equals(Vec2.ONE) ? symbolValue : splitData[0];
		return { symbolCode, symbolSize };
	}

	setIndex(index: number): void {
		this._index = index;
	}

	getIndex(): number {
		return this._index;
	}

	getIsPlaying(): boolean {
		return this.isPlaying;
	}

	setOwner(owner: string): void {
		this._owner = owner;
	}

	getOwner(): string {
		return this._owner;
	}

	setSize(size: cc.Vec2): void {
		this.size = size;
		this.sizeCount = size.y;
	}

	protected registerEvents(): void {
		this.node.on('INIT', this.init, this);
		this.node.on('PLAY_ANIMATION', this.playAnimation, this);
		this.node.on('STOP_ANIMATION', this.stopAnimation, this);
		this.node.on('ADD_ANIMATION', this.addAnimation, this);
		this.node.on('PLAY_ANIMATION_APPEAR', this.playAnimationAppear, this);
		this.node.on('PLAY_ANIMATION_DISAPPEAR', this.playAnimationDisappear, this);
		this.node.on('PLAY_ANIMATION_IDLE', this.playAnimationIdle, this);
		this.node.on('PLAY_ANIMATION_WIN', this.playAnimationWin, this);
		this.node.on('ENABLE_HIGHLIGHT', this.enableHighlight, this);
		this.node.on('DISABLE_HIGHLIGHT', this.disableHighlight, this);
		this.node.on('RESET', this.reset, this);
		this.node.on('SHOW_STATIC', this.showStatic, this);
		this.node.on('HIDE_STATIC', this.hideStatic, this);
		this.node.on('TRANSFORM_TO_SYMBOL', this.transformToSymbol, this);
		this.node.on('CHANGE_TO_SYMBOL', this.changeToSymbol, this);
		this.node.on('CHANGE_TO_BLUR_SYMBOL', this.changeToBlurSymbol, this);
	}

	protected unregisterEvents(): void {
		if (isValid(this) && isValid(this.node)) {
			this.node.targetOff(this);
		}
	}

	protected onLoadExtend(): void { }

	protected onDestroyExtend(): void { }

	protected initExtend(_symbolCode: string, _symbolSize: cc.Vec2): void { }

	//#endregion

	//#region Static Sprite methods

	getSize(): cc.Vec2 {
		return this.size;
	}

	showStatic(): void {
		this.isPlaying = false;
		this.switchToStatic(true);
	}

	hideStatic(): void {
		this.switchToStatic(false);
	}

	transformToSymbol(symbolCode: string): void {
		this.changeToSymbol(symbolCode);
		this.playAnimationIdle();
	}

	changeToSymbol(symbolValue: string): void {
		this.symbolCode = this.mapSymbolData(symbolValue).symbolCode;
		const symbolName = this.getSymbolName();

		this.node["symbolCode"] = this.symbolCode;
		this.node["symbolName"] = symbolName;

		const symbolFrame = this.resourceManager.getSymbolFrame(symbolName);
		this.updateSymbolFrame(symbolFrame);

		const backgroundFrame = this.resourceManager.getBackgroundFrame(symbolName);
		this.updateBackgroundFrame(backgroundFrame);
		this.clearSkeletonData();
	}

	changeToStaticSymbol(): void {
		if (!this.resourceManager) {
			this.setResourceManager();
		}
		this.showStatic();

		const symbolName = this.getSymbolName();
		const symbolFrame = this.resourceManager.getSymbolFrame(symbolName);
		this.updateSymbolFrame(symbolFrame);

		const backgroundFrame = this.resourceManager.getBackgroundFrame(symbolName);
		this.updateBackgroundFrame(backgroundFrame);
	}

	changeToBlurSymbol(): void {
		const symbolName = this.getSymbolName();
		const symbolFrame = this.resourceManager.getBlurSymbolFrame(symbolName);
		this.updateSymbolFrame(symbolFrame);
		this.updateBackgroundFrame(null);
	}

	enableHighlight(): void {
		const colorNormal = this.resourceManager.getColorNormal();
		this.changeColor(colorNormal);
		this.node["isHighlight"] = true;
	}

	disableHighlight(): void {
		const colorDim = this.resourceManager.getColorDim();
		this.changeColor(colorDim);
		this.node["isHighlight"] = false;
	}

	changeColor(color: cc.Color): void {
		this._rendererList.forEach(renderer => {
			if (!renderer.color.equals(color)) {
				renderer.color = color;
			}
		});
	}

	resetToColorNormal(): void {
		if (!this.resourceManager) {
			this.setResourceManager();
		}
		const colorNormal = this.resourceManager.getColorNormal();
		this._rendererList.forEach(renderer => {
			if (!renderer.color.equals(colorNormal)) {
				renderer.color = colorNormal;
			}
		});
	}

	addRendererList(): void {
		if (this.node.children.length > 0) {
			this._rendererList = [...this.node.children];
		}
	}

	reset(): void {
		this.stopAnimation();
		this.showStatic();
		this.enableHighlight();
		this.clearSkeletonData();
	}

	resetBeforeBackToPool(): void {
		this.stopAnimation();
		this.showStatic();
		this.resetToColorNormal();
		this.clearSkeletonData();
	}

	clearSkeletonData(): void {
		if (this.spine && !this.node[SPECIAL_SYMBOL_KEY]) {
			this.spine.skeletonData = null;
		}
		this.hasSkeletonData = false;
	}

	//#endregion

	//#region Animation methods

	playSymbolIntro(symbolCode: string): void {
		this.changeToSymbol(symbolCode);
		this.playAnimationIdle();
	}

	playAnimation(animationName: string, loop: boolean = false): void {
		if (!isValid(this.spine) || !this.node.active || !this.node.activeInHierarchy) {
			return;
		}

		this.updateSymbolSkeleton();

		if (!this.hasSkeletonData) {
			return;
		}

		if (!SpineUtils.hasAnimation(this.spine, animationName)) {
			if (this.isDebug) {
				log(`[SlotSymbolModule] Animation ${animationName} not found in Symbol ${this.symbolCode}, stop animation and switch to static`);
			}
			this.stopAnimation();
			return;
		}

		this.hideStatic();
		this.spine.setAnimation(0, animationName, loop);
		this.isPlaying = true;
	}

	playAnimationAppear(): void {
		this.playAnimation(this.animName.appear, false);
		this.addAnimation(this.animName.idle, true);
	}

	playAnimationIdle(): void {
		this.playAnimation(this.animName.idle, true);
	}

	playAnimationDisappear(): void {
		this.playAnimation(this.animName.disappear, false);
	}

	playAnimationWin(loop: boolean = true): void {
		this.playAnimation(this.animName.win, loop);
	}

	addAnimation(animationName: string, loop: boolean = true): void {
		if (!isValid(this.spine) || !this.hasSkeletonData || !this.node.active || !this.node.activeInHierarchy) {
			return;
		}

		if (!SpineUtils.hasAnimation(this.spine, animationName)) {
			if (this.isDebug) {
				log(`[SlotSymbolModule] Animation ${animationName} not found in Symbol ${this.symbolCode}, stop animation and switch to static`);
			}
			this.stopAnimation();
			return;
		}

		this.spine.addAnimation(0, animationName, loop);
	}

	stopAnimation(): void {
		this.showStatic();
		if (this.spine && this.hasSkeletonData) {
			this.spine.setCompleteListener(() => { });
			this.spine.setToSetupPose();
		}
		this.isPlaying = false;
	}

	//#endregion

	//#region Internal methods

	protected updateSymbolSkeleton(): void {
		if (!isValid(this.spine)) {
			return;
		}

		const skeletonData = this.resourceManager.getSymbolSkeleton(this.symbolCode);
		const isSpecialSymbol = this.node[SPECIAL_SYMBOL_KEY] === true;
		
		// Update skeleton if: not a special symbol OR skeleton data has changed
		if (!isSpecialSymbol || this.spine.skeletonData !== skeletonData) {
			this.spine.skeletonData = skeletonData;
		}

		this.hasSkeletonData = this.spine.skeletonData != null;
	}

	protected updateSymbolFrame(frame: cc.SpriteFrame): void {
		this.sprite.spriteFrame = frame;
		if (!frame) {
			if (this.isDebug) {
				warn(`[SlotSymbolModule] Sprite Frame of Symbol ${this.symbolCode} not found`);
			}
		}
	}

	protected updateBackgroundFrame(frame: cc.SpriteFrame): void {
		if (isValid(this.bg)) {
			this.bg.spriteFrame = frame;
		}
	}

	protected getSymbolName(): string {
		return this.size.equals(Vec2.ONE) ? this.symbolCode : `${this.symbolCode}_${this.size.x}_${this.size.y}`;
	}

	protected switchToStatic(flagStatic: boolean): void {
		if (this.spine) {
			this.spine.setCompleteListener(() => { });
		} else {
			this.sprite.node.active = true;
			return;
		}

		this.sprite.node.active = flagStatic;
		this.spine.node.active = !flagStatic;
	}

	//#endregion
}
```
