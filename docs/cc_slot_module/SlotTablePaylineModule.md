# SlotTablePaylineModule

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Payline/PaylineModule/scripts/SlotTablePaylineModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`SlotTablePaylineModule`** extends `SlotBaseModule`

## CC Properties
- `paylineComponents`

## Key Methods
- `onLoadExtend(): void`
- `init(): void`
- `initExtend(): void`
- `registerEvents(): void`
- `unregisterEvents(): void`
- `onTableFormatChanged(): void`
- `onSetupPaylines(): void`
- `getPaylineData(): SlotTablePaylineData`
- `getConfig(): PaylineConfig`
- `getSchedule(): SlotPaylineSchedule`
- `onDestroy(): void`

## Source Implementation
```typescript
const { _decorator, error, EventTarget } = cc;
import { PaylineEventTypes } from '../../PaylineCommon/PaylineTypes';
import { SlotBaseModule } from '../../../../Core/SlotBaseModule';
import { BasePaylineComponent } from './BasePaylineComponent';
import { PaylineConfig } from './PaylineConfig';
import { SlotPaylineSchedule } from './SlotPaylineSchedule';
import { SlotTablePaylineData } from './SlotTablePaylineData';
import PaylineUtils from '../../PaylineCommon/PaylineUtils';
import { HelpDocuments } from '../../../../Components/Common/HelpDocuments';

const { ccclass, property, help } = _decorator;

@ccclass
@help(HelpDocuments.SLOT_TABLE_PAYLINE_MODULE)
export class SlotTablePaylineModule extends SlotBaseModule {

	//#region Properties
	@property(BasePaylineComponent) paylineComponents: BasePaylineComponent[] = [];
	protected paylineConfig: PaylineConfig = null;
	protected paylineSchedule: SlotPaylineSchedule = null;
	protected slotTablePaylineData: SlotTablePaylineData = null;
	protected payLineEmitter: cc.EventTarget = null;

	//#endregion

	//#region Life Cycle

	onLoadExtend(): void {
		this.paylineConfig = this.getConfig();
		this.paylineSchedule = this.getSchedule();
		this.slotTablePaylineData = this.getPaylineData();

		this.init();
	}

	//#endregion

	//#region Internal Methods

	protected init(): void {
		if (!this.moduleEvent) {
			error("[SlotTablePaylineModule] moduleEvent is not set");
			return;
		}

		PaylineUtils.setConfig(this.paylineConfig);

		this.payLineEmitter = new EventTarget();

		if (!this.paylineComponents || this.paylineComponents.length === 0) {
			this.paylineComponents = this.getComponentsInChildren(BasePaylineComponent);
		}
		this.paylineComponents.push(this.paylineSchedule);

		for (const component of this.paylineComponents) {
			component.init({
				config: this.paylineConfig,
				payLineEmitter: this.payLineEmitter,
				moduleEvent: this.moduleEvent,
				eventManager: this.eventManager,
			});
		}
	}

	protected initExtend(): void { }

	protected registerEvents(): void {
		this.moduleEvent.on("SETUP_PAYLINES", this.onSetupPaylines, this);
		this.moduleEvent.on("TABLE_FORMAT_CHANGED", this.onTableFormatChanged, this);
	}

	protected unregisterEvents(): void {
		this.moduleEvent.off("SETUP_PAYLINES", this.onSetupPaylines, this);
		this.moduleEvent.off("TABLE_FORMAT_CHANGED", this.onSetupPaylines, this);

	}

	protected onTableFormatChanged(data: any): void {
		const config = this.slotTablePaylineData.getComponent(PaylineConfig);
		if (!config) {
			error("[SlotTablePaylineModule] PaylineConfig component not found");
			return;
		}
		config.TABLE_CONFIG.format = data.tableFormat;
	}

	protected onSetupPaylines(): void {
		PaylineUtils.setConfig(this.paylineConfig);
		const matrix = this.slotTablePaylineData.getMatrix();
		const payLines = this.slotTablePaylineData.getPayLines();
		const jackpotPayline = this.slotTablePaylineData.getJackpotPayline();
		const winSymbols = this.slotTablePaylineData.getWinSymbols();

		this.payLineEmitter.emit(PaylineEventTypes.PAYLINE_SET_DATA, {
			matrix,
			payLines,
			winSymbols,
			jackpotPayline
		});
	}

	protected getPaylineData(): SlotTablePaylineData {
		return this.getComponent(SlotTablePaylineData) || this.addComponent(SlotTablePaylineData);
	}

	protected getConfig(): PaylineConfig {
		return this.getComponent(PaylineConfig) || this.addComponent(PaylineConfig);
	}

	protected getSchedule(): SlotPaylineSchedule {
		return this.getComponent(SlotPaylineSchedule) || this.addComponent(SlotPaylineSchedule);
	}
	//#endregion
	
	onDestroy(): void {
		this.unregisterEvents();
	}
}
```
