# ClusterModule

> **Source Path**: `assets/cc-common/cc-slot-mechanics/Cluster/scripts/ClusterModule.ts`

## Overview
TypeScript module from `cc-common/cc-slot-mechanics`.

## Classes
- **`ClusterModule`** extends `VerticalCascadeModule`

## Key Methods
- `onLoadExtend(): void`
- `getConfig(): ClusterModuleConfig`
- `registerEvents(): void`
- `startRespinHandler(): void`
- `stopRespinHandler(): Promise<void>`
- `stopRespin(): Promise<void>`
- `updateNewSymbolPosition(): void`
- `generateNewSymbols(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { ClusterModuleConfig } from "./ClusterModuleConfig";
import { VerticalCascadeModule } from "../../../cc-slot-module/SlotModuleExport";
import { ClusterModuleData } from "./ClusterModuleData";
import { HelpDocuments } from "../../../cc-slot-module/Components/Common/HelpDocuments";

const { ccclass, help } = _decorator;

@ccclass
@help(HelpDocuments.CLUSTER_TABLE_MODULE)
export class ClusterModule extends VerticalCascadeModule {

	protected _clusterModuleData: ClusterModuleData;
	protected _listClusterSymbols = [];
	protected _listSymbolPosition = [];

	onLoadExtend(): void {
		super.onLoadExtend();
		this._clusterModuleData = this.getComponent(ClusterModuleData);
	}

	public getConfig(): ClusterModuleConfig {
		return this.getComponent(ClusterModuleConfig);
	}

	protected registerEvents(): void {
		if (!this.moduleEvent) {
			return;
		}

		this.moduleEvent.on("TABLE_START_RESPIN", this.startRespinHandler, this);
		this.moduleEvent.on("TABLE_STOP_RESPIN", this.stopRespinHandler, this);
	}


	startRespinHandler(): void {
		const { verticalMatrix, listTraceWayVertical, listClusters } = this._clusterModuleData.formatData();
		this._listClusterSymbols = listClusters;
		this.startRespin(verticalMatrix, listTraceWayVertical);
	}

	async stopRespinHandler(): Promise<void> {
		const { verticalMatrix, listTraceWayVertical, listClusters } = this._clusterModuleData.formatData();
		await this.stopRespin(verticalMatrix, listTraceWayVertical);
	}

	async stopRespin(matrix: string[][], traceWays: string[][]): Promise<void> {
		this.matrix = matrix;

		this.updateNewSymbolPosition();
		this.removeDroppedSymbols(); // remove symbol by traceWay data
		this.generateNewSymbols(); // generate new symbols
		this.checkForDropSymbols();
		this.processOldSymbols(); // get old symbols for dropping
		this.processNewSymbols(); // create all new symbols

		this.fallingSymbols(this.listDroppedSymbols);
		this.fallingSymbols(this.listNewSymbols);

		//TODO - for testing
		this.scheduleOnce(() => {
			this.listTraceWay = traceWays;
			this._stopRespinCB && this._stopRespinCB();
			this._stopRespinCB = null;
			this._listClusterSymbols = [];
			this._listSymbolPosition = [];
		}, 1);


		return new Promise((resolve) => {
			this._stopRespinCB = resolve;
		});
	}

	protected updateNewSymbolPosition(): void {
		for (let i = 0; i < this._listClusterSymbols.length; i++) {
			const { col, row } = this._listClusterSymbols[i];
			const symbol = this.getSymbolAt(col, row);
			if (symbol) {
				this._listSymbolPosition.push(new cc.Vec2(symbol.position.x, symbol.position.y));
			}
		}
	}

	protected generateNewSymbols(): void {
		for (let i = 0; i < this._listClusterSymbols.length; i++) {
			const { col, row } = this._listClusterSymbols[i];
			const oldRow = this.convertRow(col, row);
			//remove old symbol
			this.removeSymbolAt(col, oldRow);

			const { symbolValue } = this._listClusterSymbols[i];
			const { code, size } = this.mapSymbolData(symbolValue);

			const symbol = this.createNewSymbol(col, oldRow, code, size);
			symbol.setPosition(this._listSymbolPosition[i]);
			this.listSymbols[col][oldRow] = symbol;

			//update list traceway
			this.listTraceWay[col][row] = symbolValue;
		}
	}

}
```
