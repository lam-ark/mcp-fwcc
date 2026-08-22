# SymbolPaytableViewer

> **Source Path**: `assets/cc-common/cc-slot-module/BasePortrait/SymbolPaytable/SymbolPaytableViewer.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SymbolPaytableViewer`** extends `SlotBaseModule`

## CC Properties
- `touchHolder`
- `bgNode`
- `topBlock`
- `symbolPayoutViewer`

## Key Methods
- `onLoadExtend(): void`
- `handleTouchSymbol(): void`
- `getSymbolCode(): string`
- `getSymbolByColRow(): string | null`
- `getSymbolByMatrix(): string | null`
- `getSymbolPosition(): cc.Vec2`
- `showSymbolInfo(): void`
- `hideSymbolInfo(): void`

## Source Implementation
```typescript
const { _decorator, Layout, Node, v2 } = cc;
import { SlotSymbolModule } from "../../BaseModule/Table/SlotSymbol/SlotSymbolModule";
import { SlotTableData } from "../../BaseModule/Table/SlotTable/scripts/SlotTableData";
import { SlotTableModule } from "../../BaseModule/Table/SlotTable/scripts/SlotTableModule";
import { TableModuleConfig } from "../../BaseModule/Table/SlotTable/scripts/TableModuleConfig";
import { GAME_STATE_ENUM } from "../../Components/Common/SlotEnum";
import { GameDataStore } from "../../Core/GameDataStore";
import { SlotBaseModule } from "../../Core/SlotBaseModule";
import { SlotGameSettings } from "../../Core/SlotGameSettings";
import { SymbolPayoutViewer } from "./SymbolPayoutViewer";
const { inject } = eno;
const { ccclass, property } = _decorator;

@ccclass
export class SymbolPaytableViewer extends SlotBaseModule {
	@property(cc.Node)
	touchHolder: cc.Node = null;
	@property(cc.Node)
	bgNode: cc.Node = null;
	@property(cc.Node)
	topBlock: cc.Node = null;
	@property(SymbolPayoutViewer)
	symbolPayoutViewer: SymbolPayoutViewer = null;
	@inject(GameDataStore) dataStore: GameDataStore = null;
	@inject(SlotGameSettings) gameSettings: SlotGameSettings = null;

	_config: TableModuleConfig = null;
	_matrix: string[][] = null;
	_table: SlotTableModule = null;
	_slotTableData: SlotTableData = null;

	onLoadExtend(): void {
		this.node.on("START_SPIN", this.hideSymbolInfo, this);

		this._config = this.getComponent(TableModuleConfig);
		this._table = this.getComponent(SlotTableModule);
		this._slotTableData = this.getComponent(SlotTableData);
		this.touchHolder.on(Node.EventType.TOUCH_END, this.handleTouchSymbol, this);
		this.symbolPayoutViewer.node.active = false;
	}

	protected handleTouchSymbol(event): void {
		const gameState = this.gameSettings.currentGameState;
		if (gameState !== GAME_STATE_ENUM.IDLE) {
			return;
		}
		const { TABLE_FORMAT, SYMBOL_WIDTH, SYMBOL_HEIGHT } = this._config;
		let worldTouch = event.getLocation();
		const localTouch = this.touchHolder.convertToNodeSpaceAR(new cc.Vec2(worldTouch.x, worldTouch.y)); // Convert accurately

		const x = localTouch.x + (SYMBOL_WIDTH * TABLE_FORMAT.length) / 2;
		const colIndex = Math.floor(x / SYMBOL_WIDTH);

		const colRows = TABLE_FORMAT[colIndex];
		const y = localTouch.y + (SYMBOL_HEIGHT * colRows) / 2;
		const rawRowIndex = Math.floor(y / SYMBOL_HEIGHT);
		const rowIndex = colRows - 1 - rawRowIndex;

		const symbolCode = this.getSymbolCode(colIndex, rowIndex);
		if (!symbolCode) {
			return this.hideSymbolInfo();
		}

		const midIndex = Math.floor(TABLE_FORMAT.length / 2);
		const isSpecialSymbol = this._config.SPECIAL_SYMBOLS.indexOf(symbolCode) !== -1;

		const symbolData = {
			symbolWidth: SYMBOL_WIDTH,
			symbolHeight: SYMBOL_HEIGHT,
			symbolCode, isSpecialSymbol,
			symbolPos: this.getSymbolPosition(colIndex, rowIndex),
			direction: colIndex <= midIndex ? Layout.HorizontalDirection.LEFT_TO_RIGHT : Layout.HorizontalDirection.RIGHT_TO_LEFT
		};
		this.showSymbolInfo(symbolData);
	}

	getSymbolCode(col, row): string {
		const symbolCode = this.getSymbolByMatrix(col, row) || this.getSymbolByColRow(col, row);
		return symbolCode;
	}

	getSymbolByColRow(col, row): string | null {
		if (!this._table) {
			return null;
		}
		const symbol = this._table.getSymbolByColRow(col, row);
		return symbol ? SlotSymbolModule.getModuleComponent(symbol).symbolCode : null;
	}

	getSymbolByMatrix(col, row): string | null {
		if (!this.dataStore.hasPlaySession()) {
			return null;
		}
		const matrix = this._slotTableData.getResumeMatrix();
		if (matrix && matrix[col] && matrix[col][row]) {
			return matrix[col][row];
		} else {
			return null;
		}
	}

	getSymbolPosition(col, row): cc.Vec2 {
		const { TABLE_FORMAT, SYMBOL_WIDTH, SYMBOL_HEIGHT } = this._config;
		const startX = -(TABLE_FORMAT.length / 2 - 0.5) * SYMBOL_WIDTH;
		const x = startX + SYMBOL_WIDTH * col;
		const y = (TABLE_FORMAT[col] / 2 - row - 0.5) * SYMBOL_HEIGHT;
		return v2(x, y);
	}

	showSymbolInfo(symbolData: any): void {
		this.bgNode && (this.bgNode.active = true);
		this.topBlock && (this.topBlock.active = true);
		this.symbolPayoutViewer.node.active = true;
		this.symbolPayoutViewer.showSymbolInfo(symbolData);
	}

	hideSymbolInfo(): void {
		this.bgNode && (this.bgNode.active = false);
		this.topBlock && (this.topBlock.active = false);
		this.symbolPayoutViewer.node.active = false;
		this.symbolPayoutViewer.hideSymbolInfo();
	}
}

```
