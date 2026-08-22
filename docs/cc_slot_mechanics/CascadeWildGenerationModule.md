# CascadeWildGenerationModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/CascadeWildGeneration/scripts/CascadeWildGenerationModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`CascadeWildGenerationModule`** extends `VerticalCascadeModule`

## Key Methods
- `onLoadExtend(): void`
- `getConfig(): CascadeWildGenerationConfig`
- `registerEvents(): void`
- `startRespinHandler(): void`
- `stopRespinHandler(): Promise<void>`
- `stopRespin(): Promise<void>`
- `generateWild(): void`
- `updateWildGeneratedPosition(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { VerticalCascadeModule } from "../../../cc-slot-module/SlotModuleExport";
import { CascadeWildGenerationConfig } from "./CascadeWildGenerationConfig";
import { SlotSymbolManager } from "../../../cc-slot-module/SlotModuleExport";
import { CascadeWildGenerationData } from "./CascadeWildGenerationData";
import { HelpDocuments } from "../../../cc-slot-module/Components/Common/HelpDocuments";

const { ccclass, help } = _decorator;

@ccclass
@help(HelpDocuments.CASCADE_WILD_GENERATION_MODULE)
export class CascadeWildGenerationModule extends VerticalCascadeModule {
    
	protected cascadeWildGenerationData: CascadeWildGenerationData;
	protected generationPosition: cc.Vec2 = null;
	protected col: number;
	protected row: number;

	onLoadExtend(): void {
		this.config = this.getConfig();
		this.initLayout();
		if (!this.symbolManager) {
			this.symbolManager = this.getComponent(SlotSymbolManager);
		}
		this.cascadeWildGenerationData = this.getComponent(CascadeWildGenerationData);
	}

	public getConfig(): CascadeWildGenerationConfig {
		return this.getComponent(CascadeWildGenerationConfig);
	}

	protected registerEvents(): void {
		if (!this.moduleEvent) {
			return;
		}

		this.moduleEvent.on("TABLE_START_RESPIN", this.startRespinHandler, this);
		this.moduleEvent.on("TABLE_STOP_RESPIN", this.stopRespinHandler, this);
	}

	startRespinHandler(): void {
		const { verticalMatrix, listTraceWayVertical } = this.cascadeWildGenerationData.formatData();
		this.startRespin(verticalMatrix, listTraceWayVertical);
	}

	async stopRespinHandler(): Promise<void> {
		const { verticalMatrix, listTraceWayVertical } = this.cascadeWildGenerationData.formatData();
		const wildIndex = this.cascadeWildGenerationData.getWildIndex();
		this.col = wildIndex.col;
		this.row = wildIndex.row;
		await this.stopRespin(verticalMatrix, listTraceWayVertical);
	}

	async stopRespin(matrix: string[][], traceWays: string[][]): Promise<void>  {
		this.matrix = matrix;

		this.updateWildGeneratedPosition();
		this.generateWild(); // generate wild
		this.checkForDropSymbols();
		this.processOldSymbols(); // get old symbols for dropping
		this.processNewSymbols(); // create all new symbols
        
		this.fallingSymbols(this.listDroppedSymbols);
		this.fallingSymbols(this.listNewSymbols);

		//TODO - need making override here, default is after CASCADING_TIME_COMPLETED time will be continue to other modules
		this.scheduleOnce(() => {
			this.listTraceWay = traceWays;
			this._stopRespinCB && this._stopRespinCB();
			this._stopRespinCB = null;
			this.generationPosition = null;
		}, this.config.CASCADING_TIME_COMPLETED);

		this._hasStartRespin = false;
		this._hasRespinCompleted = true;

		return new Promise((resolve) => {
			this._stopRespinCB = resolve;
		});
	}
    
	protected generateWild(): void {
		if (this.col != -1 && this.row != -1) {
			const col = this.col;
			const row = this.row;
			const oldRow = this.convertRow(col, row);
			const oldSymbolValue = this.listTraceWay[col][row];
			if (!oldSymbolValue.startsWith('-1')) { // if it's not a dropped symbol, remove it
				this.removeSymbolAt(col, oldRow);
			}

			const symbol = this.createNewSymbol(col, oldRow, 'K', 1);
			symbol.setPosition(this.generationPosition); 
			this.listSymbols[col][oldRow] = symbol;
            
			//update list traceway
			this.listTraceWay[col][row] = 'K_1_1';
		} 
	}

	protected updateWildGeneratedPosition(): void {
		if (this.col != -1 && this.row != -1) {
			let newrow = this.convertRow(this.col, this.row);
			this.generationPosition = this.tableConfig.positions[this.col][newrow];
		} else {
			this.generationPosition = null;
		}
	}
}
```
