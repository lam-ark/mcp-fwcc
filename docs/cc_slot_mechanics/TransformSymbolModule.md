# TransformSymbolModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/TransformSymbol/scripts/TransformSymbolModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`TransformSymbolModule`** extends `SlotBaseModule`

## CC Properties
- `symbolManager`
- `vfxPool`
- `vfxLayer`

## Key Methods
- `onLoadExtend(): void`
- `registerGameEvents(): void`
- `onTransformSymbol(): Promise<void>`
- `onStartSpin(): void`
- `reset(): void`
- `createVFXTransform(): void`
- `onDisable(): void`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { PoolFactoryModule, SlotBaseModule } from "../../../cc-slot-module/SlotModuleExport";
import { SlotSymbolManager } from "../../../cc-slot-module/SlotModuleExport";
import { TransformSymbolData } from "./TransformSymbolData";
import { TransformSymbolItem } from "./TransformSymbolItem";
import { TransformSymbolConfig } from "./TransformSymbolConfig";
import { SymbolOwnerType } from "../../../cc-slot-module/SlotModuleExport";
import { HelpDocuments } from "../../../cc-slot-module/Components/Common/HelpDocuments";

const { ccclass, property, help } = _decorator;
const { NodeUtils } = eno;

@ccclass
@help(HelpDocuments.TRANSFORM_SYMBOL_MODULE)
export class TransformSymbolModule extends SlotBaseModule {
	@property(SlotSymbolManager) symbolManager: SlotSymbolManager = null;
	@property(PoolFactoryModule) vfxPool: PoolFactoryModule = null;
	@property(cc.Node) vfxLayer: cc.Node = null;

	protected data: TransformSymbolData;
	protected config: TransformSymbolConfig;

	onLoadExtend(): void {
		this.data = this.getComponent(TransformSymbolData);
		this.config = this.getComponent(TransformSymbolConfig);
		this.registerGameEvents();
	}

	registerGameEvents(): void {
		if (this.moduleEvent) {
			this.moduleEvent.on('SHOW_TRANSFORM_SYMBOL', this.onTransformSymbol, this);
			this.moduleEvent.on('TABLE_START_SPIN', this.onStartSpin, this);
		}
	}

	onTransformSymbol(): Promise<void> {
		const transformData = this.data.getTransformData();

		if (transformData.length === 0) {
			return Promise.resolve();
		}

		for (const data of transformData) {
			const symbol = this.symbolManager.getSymbolByIndex(data.symbolIndex, SymbolOwnerType.TRANSFORM_SYMBOL);
			if (!symbol) {
				continue;
			}
			this.createVFXTransform(symbol);

			const cmp = symbol.getComponent(TransformSymbolItem);
			if (cmp) {
				cmp.transform(data.symbolCode)
			}

			this.scheduleOnce(() => {
				symbol.emit("TRANSFORM_TO_SYMBOL", data.symbolCode);
			}, this.config.DELAY_CHANGE_SYMBOL);
		}

		return new Promise((resolve) => {
			this.scheduleOnce(() => {
				resolve();
			}, this.config.TRANSFORM_DURATION);
		});
	}

	onStartSpin(): void {
		this.reset();
	}

	reset(): void {
		if (this.vfxPool) {
			this.vfxPool.clear();
		}
		this.unscheduleAllCallbacks();
	}

	createVFXTransform(symbol: cc.Node): void {
		if (!this.vfxPool) {
			return;
		}
		const vfx = this.vfxPool.getObject();

		const position = NodeUtils.getPositionInOtherNode(this.vfxLayer, symbol);
		vfx.setParent(this.vfxLayer);
		vfx.setPosition(position);
		vfx.active = true;
		vfx.emit("PLAY_ANIMATION");
	}

	onDisable(): void {
		this.reset();
	}

	onDestroy(): void {
		if (this.moduleEvent) {
			this.moduleEvent.targetOff(this);
		}
	}
}

```
