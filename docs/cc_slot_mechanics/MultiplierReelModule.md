# MultiplierReelModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/MultiplierReel/scripts/MultiplierReelModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`MultiplierReelModule`** extends `SlotBaseModule`

## CC Properties
- `prefabMultiplierReel`

## Key Methods
- `onLoadExtend(): void`
- `registerEvents(): void`
- `showMultiplier(): void`
- `resetMultiplier(): void`
- `initReel(): void`
- `resetAllEffectAndTasks(): void`

## Source Implementation
```typescript
const { _decorator, instantiate, Vec2 } = cc;
import { MultiplierReelData } from './MultiplierReelData';
import { SlotBaseModule } from '../../../cc-slot-module/SlotModuleExport';
import { MultiplierReelConfig } from './MultiplierReelConfig';
import { HelpDocuments } from '../../../cc-slot-module/Components/Common/HelpDocuments';
const { ccclass, property, help } = _decorator;

@ccclass
@help(HelpDocuments.MULTIPLIER_REELS_MODULE)
export class MultiplierReelModule extends SlotBaseModule {
	@property(cc.Prefab) prefabMultiplierReel: cc.Prefab = null;
    
	_data: MultiplierReelData;
	_config: MultiplierReelConfig;
	_multiplierReels: cc.Node[] = [];

	onLoadExtend(): void {
		this._data = this.getComponent(MultiplierReelData);
		this._config = this.getComponent(MultiplierReelConfig);
        
		this.initReel();
	}

	protected registerEvents(): void {
		this.moduleEvent.on('SHOW_MULTIPLIER_REEL', this.showMultiplier, this);
		this.moduleEvent.on('RESET_MULTIPLIER_REEL', this.resetMultiplier, this);
	}

	showMultiplier(): void {
		const prefix = this._config.MULTIPLIER_PREFIX;
		this._multiplierReels.forEach((reel, index) => {
			const multiplier = this._data.getMultiplierReel(index);
			reel.emit("SHOW_MULTIPLIER", multiplier, prefix);
		});
	}

	resetMultiplier(): void {
		this._multiplierReels.forEach(reel => {
			reel.emit("RESET_MULTIPLIER");
		});
	}

	initReel(): void {
		for (let i = 0; i < this._config.TOTAL_MULTIPLIER_REEL; i++) {
			const reel = instantiate(this.prefabMultiplierReel);
			reel.setPosition(this._config.MULTIPLIER_REEL_POSITION[i] || Vec2.ZERO);
			this.node.addChild(reel);
			this._multiplierReels.push(reel);
		}
	}

	resetAllEffectAndTasks(): void {
		this.resetMultiplier();
	}
}
```
