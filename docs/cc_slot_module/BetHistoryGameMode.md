# BetHistoryGameMode

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/BetHistory/BetHistoryGameMode.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`CustomJackpotSpriteFrame`**
- **`export`**
- **`BetHistoryGameMode`** extends `SlotBaseModule`

## CC Properties
- `jpName`
- `image`
- `gameMode`
- `table`
- `symbolPrefab`
- `jackpotSprite`
- `jackpotSpriteFrames`

## Key Methods
- `onLoadExtend(): void`
- `getBetHistoryConfig(): BetHistoryConfig`
- `initSymbolLayerConfig(): void`
- `renderResult(): void`
- `renderGameTable(): void`
- `renderExtendData(): void`
- `updateSymbolSiblingIndex(): void`
- `sortSymbols(): cc.Node[]`
- `mapSymbolData(): `
- `Vec2(): this.config.DEFAULT_SYMBOL_SIZE`
- `getWinFeature(): any`
- `showAllPayLine(): void`
- `showWinJackpot(): void`
- `showWinBonusGame(): void`
- `showWinFreeGame(): void`

## Source Implementation
```typescript
const { _decorator, instantiate, NodePool, v2, Vec2 } = cc;
import { SlotBaseModule } from "../../Core/SlotBaseModule";
import { BetHistoryConfig } from "./BetHistoryConfig";
import { GameConfig } from "../../Core/GameConfig";
import { GAME_MODE_ENUM } from "../../Components/Common/SlotEnum";
const { inject } = eno;
const { ccclass, property } = _decorator;

@ccclass('CustomJackpotSpriteFrame')
export class CustomJackpotSpriteFrame {
	@property()
	jpName = ''
	@property({ type: cc.SpriteFrame })
	image = null;
};

@ccclass
export class BetHistoryGameMode extends SlotBaseModule {
	@property({ type: GAME_MODE_ENUM })
	gameMode = GAME_MODE_ENUM.NORMAL_GAME;
	@property(cc.Node)
	table: cc.Node = null;
	@property(cc.Prefab)
	symbolPrefab: cc.Prefab = null;
	@property
	canShowPayLine: boolean = true;
	@property(cc.Sprite)
	jackpotSprite: cc.Sprite = null;
	@property(CustomJackpotSpriteFrame)
	jackpotSpriteFrames: CustomJackpotSpriteFrame[] = [];
	@inject(GameConfig) gameConfig: GameConfig = null;

	symbolPool: cc.NodePool = null;
	listSymbol: cc.Node[] = [];
	modelData: any = null;
	currentData: any = null;
	config: BetHistoryConfig = null;
	isAllwaysPayLine: boolean = false;
	layerConfig: Record<string, number> = {};
	paySystem: number = eno.PAY_SYSTEM_TYPE.ALLWAYS;

	onLoadExtend(): void {
		this.node.on("RENDER_GAME_MODE", this.renderResult, this);
		this.node.on("RESET_GAME_MODE", this.reset, this);
		this.symbolPool = new NodePool("SymbolHistoryPool");
		this.config = this.getBetHistoryConfig();
		this.isAllwaysPayLine = this.gameConfig.PAY_SYSTEM === eno.PAY_SYSTEM_TYPE.ALLWAYS;
		this.paySystem = this.gameConfig.PAY_SYSTEM;
		this.initSymbolLayerConfig();
	}

	getBetHistoryConfig(): BetHistoryConfig {
		return this.getComponent(BetHistoryConfig);
	}

	initSymbolLayerConfig(): void {
		this.layerConfig = {};
		for (const key in this.gameConfig.SYMBOL_CONFIG) {
			const symbolConfig = this.gameConfig.SYMBOL_CONFIG[key];
			this.layerConfig[symbolConfig.Id] = symbolConfig.Priority;
		}
	}

	renderResult(data: any): void {
		const { rawData } = data;
		this.currentData = data;
		this.reset();
		const format = rawData.matrixFormat;
		let symbols = rawData.matrixResult;
		let matrix = [];
		let formatMatrix = rawData.result && rawData.result.metaDataDetail && rawData.result.metaDataDetail.formatMatrix || rawData.result && rawData.result.metaDataDetail && rawData.result.metaDataDetail.fmt;
		if (formatMatrix) {
			symbols = eno.SlotUtils.convertMegaSymbols(symbols, formatMatrix);
		}
		matrix = eno.SlotUtils.convertSlotMatrix(symbols, format);

		this.renderGameTable(matrix);
		if (this.canShowPayLine) {
			this.showAllPayLine(rawData.paylines);
		}
		this.renderExtendData(data);
		this.updateSymbolSiblingIndex(this.listSymbol);
	};

	renderGameTable(matrix: any[]): void {
		let count = 0;
		for (let col = 0; col < matrix.length; col++) {
			for (let row = 0; row < matrix[col].length; row++) {
				const symbolValue = matrix[col][row];
				if (!symbolValue) {
					continue;
				}
				const symbol = this.getSymbol();
				symbol.parent = this.table;
				const { symbolCode, symbolSize } = this.mapSymbolData(symbolValue);
				const symbolPos = this.getPosition(col, row, symbolSize, matrix);
				symbol.setPosition(symbolPos.x, symbolPos.y);
				symbol.emit("INIT", symbolCode, symbolSize);
				symbol.emit("CHANGE_TO_SYMBOL", symbolCode);
				symbol["col"] = col;
				symbol["row"] = row;
				symbol["symbolIndex"] = count;
				this.listSymbol.push(symbol);
				count++;
			}
		}
	};

	renderExtendData(_data: any): void { };

	updateSymbolSiblingIndex(symbols: cc.Node[]): void {
		if (!symbols || !symbols.length) {
			return;
		}

		const highlightSymbols: cc.Node[] = [];
		const unhighlightSymbols: cc.Node[] = [];

		for (const symbol of symbols) {
			(symbol['isHighlight'] !== false ? highlightSymbols : unhighlightSymbols).push(symbol);
		}

		const sortedSymbols = [
			...this.sortSymbols(unhighlightSymbols),
			...this.sortSymbols(highlightSymbols),
		];

		sortedSymbols.forEach((symbol, index) => symbol.setSiblingIndex(index));
	}

	protected sortSymbols(symbols: cc.Node[]): cc.Node[] {
		if (!symbols.length) {
			return [];
		}

		const layers: cc.Node[][] = [];

		for (const symbol of symbols) {
			const code = symbol['symbolCode'];
			if (!code) {
				continue;
			}
			let priority = this.layerConfig[code];

			if (priority == null) {
				priority = this.layerConfig[code[0]];
			}

			if (priority == null) {
				priority = 9999;
			}

			if (!layers[priority]) {
				layers[priority] = [];
			}
			layers[priority].push(symbol);
		}

		return eno.ArrayUtils.flatOnce(layers.filter(Boolean).reverse());
	}

	protected mapSymbolData(value: any): { symbolCode: string, symbolSize: cc.Vec2 } {
		if (value.indexOf('_') >= 0) {
			const resultList = value.split("_");
			const symbolCode = resultList[0];
			const sizeX = resultList[1];
			const sizeY = resultList[2];
			const symbolSize = sizeX && sizeY ? new Vec2(+sizeX, +sizeY) : this.config.DEFAULT_SYMBOL_SIZE;
			return { symbolCode, symbolSize };
		} else {
			return { symbolCode: value, symbolSize: this.config.DEFAULT_SYMBOL_SIZE };
		}
	}

	getWinFeature(): any {
		const { WIN_FREE_GAME, WIN_BONUS_GAME, WIN_JACKPOT } = this.config;
		let countFreeGame = 0, countBonusGame = 0, countJackpot = 0;
		this.listSymbol.forEach((symbol) => {
			const symbolCode = symbol["symbolCode"];
			if (symbolCode == WIN_FREE_GAME.SYMBOL_CODE) {
				countFreeGame++;
			} else if (symbolCode == WIN_BONUS_GAME.SYMBOL_CODE) {
				countBonusGame++;
			} else if (symbolCode == WIN_JACKPOT.SYMBOL_CODE) {
				countJackpot++;
			}
		});

		const isWinFreeGame = countFreeGame >= WIN_FREE_GAME.SYMBOL_COUNT;
		const isWinBonusGame = countBonusGame >= WIN_BONUS_GAME.SYMBOL_COUNT;
		const isWinJackpot = countJackpot >= WIN_JACKPOT.SYMBOL_COUNT;
		return { isWinFreeGame, isWinBonusGame, isWinJackpot };
	}

	showAllPayLine(payLine: any): void {
		this.clearPayLine();
		const { isWinFreeGame, isWinBonusGame, isWinJackpot } = this.getWinFeature();
		const hasWinFeature = isWinFreeGame || isWinBonusGame || isWinJackpot;
		const hasPayLine = payLine && payLine.length > 0;
		if (!hasWinFeature && !hasPayLine) {
			return;
		}
		this.disableHighlightSymbols();

		if (hasPayLine) {
			const convertedPayLine = this.convertPayLines(payLine);
			// convertedPayLine.forEach((payLineObject) => {
			// 	if (this.isAllwaysPayLine) {
			// 		this.showPayLineAllWay(payLineObject);
			// 	} else {
			// 		this.showPayLinePerLine(payLineObject);
			// 	}
			// });

			convertedPayLine.forEach((payLineObject) => {
				switch (this.paySystem) {
					case eno.PAY_SYSTEM_TYPE.ALLWAYS:
						this.showPayLineAllWay(payLineObject);
						break;
					case eno.PAY_SYSTEM_TYPE.LINES:
						this.showPayLinePerLine(payLineObject);
						break;
					case eno.PAY_SYSTEM_TYPE.CLUSTER:
						this.showPayLineCluster(payLineObject as eno.PayLineClusterResult);
						break;
					case eno.PAY_SYSTEM_TYPE.SCATTER_PAY:
						this.showPayLineScatterPay(payLineObject as eno.PayLineScatterPayResult);
						break;
					default:
						break;
				}
			});

		}

		if (isWinJackpot) {
			this.showWinJackpot();
		}
		if (isWinBonusGame) {
			this.showWinBonusGame();
		}
		if (isWinFreeGame) {
			this.showWinFreeGame();
		}
	};

	showWinJackpot(): void {
		this.listSymbol.forEach((symbol: any) => {
			const { symbolCode } = symbol;
			if (symbolCode === this.config.WIN_JACKPOT.SYMBOL_CODE) {
				symbol.emit('ENABLE_HIGHLIGHT');
			}
		});
	}

	showWinBonusGame(): void {
		this.listSymbol.forEach((symbol: any) => {
			const { symbolCode } = symbol;
			if (symbolCode === this.config.WIN_BONUS_GAME.SYMBOL_CODE) {
				symbol.emit('ENABLE_HIGHLIGHT');
			}
		});
	}

	showWinFreeGame(): void {
		this.listSymbol.forEach((symbol: any) => {
			const { symbolCode } = symbol;
			if (symbolCode === this.config.WIN_FREE_GAME.SYMBOL_CODE) {
				symbol.emit('ENABLE_HIGHLIGHT');
			}
		});
	}

	showPayLinePerLine({ payLineID, symbolId, payLineWinNumbers }: any): void {
		const payLine = this.config.PAY_LINE_MATRIX[payLineID];
		if (!payLine) {
			return;
		}
		this.listSymbol.forEach((symbol: any) => {
			const { symbolCode, col, row } = symbol;
			for (let paylinePos = 0; paylinePos < payLineWinNumbers; ++paylinePos) {
				const symbolRow = payLine[paylinePos];
				const symbolCol = paylinePos;
				if ((symbolCode === symbolId || symbolCode.includes(this.config.WILD_SYMBOL)) && symbolRow === row && symbolCol === col) {
					symbol.emit('ENABLE_HIGHLIGHT');
				}
			}
		});
	};

	showPayLineAllWay({ symbolId, reelCount }: any): void {
		this.listSymbol.forEach((symbol: any) => {
			const { symbolCode, col } = symbol;
			if ((symbolCode == symbolId || symbolCode.includes(this.config.WILD_SYMBOL)) && col < reelCount) {
				symbol.emit("ENABLE_HIGHLIGHT");
			}
		});
	};
	showPayLineCluster(data: eno.PayLineClusterResult): void {
		if (!data) {
			return;
		}

		const { symbolId, traceWay } = data;

		if (!traceWay || traceWay.length === 0) {
			return;
		}

		this.listSymbol.forEach((symbol: any) => {
			const { symbolCode, col, row } = symbol;
			const index = eno.ArrayUtils.getIndexFromRowCol(this.gameConfig.TABLE_FORMAT, col, row);

			if (traceWay.includes(index) && symbolCode == symbolId) {
				symbol.emit("ENABLE_HIGHLIGHT");
			}
		});
	};

	showPayLineScatterPay(data: eno.PayLineScatterPayResult): void {
		if (!data) {
			return;
		}

		const { symbolId, traceWay } = data;

		if (!traceWay || traceWay.length === 0) {
			return;
		}

		this.listSymbol.forEach((symbol: any) => {
			const { symbolCode, col, row } = symbol;
			const index = eno.ArrayUtils.getIndexFromRowCol(this.gameConfig.TABLE_FORMAT, row, col);

			if (traceWay.includes(index) && symbolCode == symbolId) {
				symbol.emit("ENABLE_HIGHLIGHT");
			}
		});
	};

	disableHighlightSymbols(): void {
		this.listSymbol.forEach((symbol) => {
			symbol.emit("DISABLE_HIGHLIGHT");
		});
	}

	enableHighlightSymbols(): void {
		this.listSymbol.forEach((symbol) => {
			symbol.emit("ENABLE_HIGHLIGHT");
		});
	}

	clearPayLine(): void {
		this.listSymbol.forEach((symbol) => {
			symbol.emit("RESET");
		});
	};

	clearTable(): void {
		this.listSymbol.forEach((symbol) => {
			this.symbolPool.put(symbol);
		});
		this.listSymbol = [];
	};

	reset(): void {
		this.clearPayLine();
		this.clearTable();
	};

	getPosition(col: number, row: number, size: cc.Vec2, matrix: any[]): cc.Vec2 {
		const { SYMBOL_HEIGHT, SYMBOL_WIDTH, DEFAULT_SYMBOL_SIZE } = this.config;
		const startX = (-matrix.length / 2 + 0.5) * SYMBOL_WIDTH;
		const startY = (matrix[col].length / 2 - 0.5) * SYMBOL_HEIGHT;

		const offsetX = size.x > DEFAULT_SYMBOL_SIZE.x ? (size.x / 2 - 0.5) * SYMBOL_WIDTH : 0;
		const offsetY = size.y > DEFAULT_SYMBOL_SIZE.y ? (size.y / 2 - 0.5) * SYMBOL_HEIGHT : 0;

		const x = startX + col * SYMBOL_WIDTH + offsetX;
		const y = startY - row * SYMBOL_HEIGHT + offsetY;
		return v2(x, y);
	};

	getSymbol(): cc.Node {
		let result = this.symbolPool.get();
		if (!result) {
			result = instantiate(this.symbolPrefab);
		}
		return result;
	};

	isRightPayLine(rawPayLine: string): boolean {
		const arr = rawPayLine.split(";");
		const lastElement = arr[arr.length - 1];
		return lastElement.includes("R");
	}

	// support for allways, lines, both ways
	convertPayLines(payLines: string[]): Object[] {
		let payLineConverted = [];

		switch (this.paySystem) {
			case eno.PAY_SYSTEM_TYPE.ALLWAYS:
				payLineConverted = eno.SlotUtils.convertPayLineAllWays(payLines);
				break;
			case eno.PAY_SYSTEM_TYPE.LINES:
				payLineConverted = eno.SlotUtils.convertPayLine(payLines);
				break;
			case eno.PAY_SYSTEM_TYPE.CLUSTER:
				payLineConverted = eno.SlotUtils.convertPayLineCluster(payLines);
				break;
			case eno.PAY_SYSTEM_TYPE.SCATTER_PAY:
				payLineConverted = eno.SlotUtils.convertPayLineScatterPay(payLines);
				break;
		}

		if (this.paySystem === eno.PAY_SYSTEM_TYPE.ALLWAYS || this.paySystem === eno.PAY_SYSTEM_TYPE.LINES) {
			payLineConverted.forEach((payLine, index) => {
				payLine.isRight = this.isRightPayLine(payLines[index]);
			});
		}

		return payLineConverted;
	}
}

```
