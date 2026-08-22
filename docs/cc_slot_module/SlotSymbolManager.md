# SlotSymbolManager

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Table/SlotSymbol/SlotSymbolManager.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`SlotSymbolManager`** extends `SlotBaseModule`

## CC Properties
- `template`
- `initCount`
- `isSymbolPool`

## Key Methods
- `onLoadExtend(): void`
- `initSymbolPool(): void`
- `setGameConfig(): void`
- `getSymbolByIndex(): cc.Node`
- `getSymbol(): cc.Node`
- `getSymbolFromPool(): cc.Node`
- `get(): this.instantiateNewSymbol()`
- `removeSymbol(): void`
- `returnSymbol(): void`
- `removeAllSymbols(): void`
- `findObjectByIndex(): cc.Node`
- `createSymbol(): cc.Node`
- `createBlurSymbol(): cc.Node`
- `updateSymbolSiblingIndex(): void`
- `instantiateNewSymbol(): cc.Node`

## Source Implementation
```typescript
const { _decorator, instantiate, NodePool, log, director } = cc;
import { SymbolIndexType, SymbolOwnerType } from "../../../Components/Common/SlotEnum";
import { SlotSymbolModule } from "./SlotSymbolModule";
import { GameConfig } from "../../../Core/GameConfig";
import { SlotBaseModule } from "../../../Core/SlotBaseModule";
import { HelpDocuments } from "../../../Components/Common/HelpDocuments";
const { ccclass, property, help } = _decorator;

@ccclass
@help(HelpDocuments.SLOT_SYMBOL_MANAGER_MODULE)
export class SlotSymbolManager extends SlotBaseModule {
	@property(cc.Prefab) template: cc.Prefab = null;
	@property() initCount: number = 15;
	@property() isSymbolPool: boolean = true; // true: use symbol pool, false: use symbol manager
	
	symbolPool: cc.NodePool | any = null;
	usingSymbols: cc.Node[] = [];
	gameConfig: GameConfig = null;
	layerConfig: Record<string, number> = {};

	onLoadExtend(): void {
		this.initSymbolPool();
		//@ts-ignore
		if (CC_DEV) {
			director.on('show-log-using-symbols-owner', this.showLogUsingSymbolsWithOwner, this);
			director.on('show-log-using-symbols', this.showLogUsingSymbols, this);
		}
	}

	initSymbolPool(): void {
		this.symbolPool = new NodePool(this.name);
		for (let index = 0; index < this.initCount; index++) {
			if (!this.template) {
				continue;
			}
			let symbol = this.instantiateNewSymbol();
			this.symbolPool.put(symbol);
		}
	}

	setGameConfig(gameConfig: GameConfig): void {
		this.gameConfig = gameConfig;
		this.layerConfig = {};
		for (const key in gameConfig.SYMBOL_CONFIG) {
			const symbolConfig = gameConfig.SYMBOL_CONFIG[key];
			this.layerConfig[symbolConfig.Id] = symbolConfig.Priority;
		}
	}

	getSymbolByIndex(index: number = SymbolIndexType.UNUSED, owner: string = SymbolOwnerType.SYMBOL_MANAGER): cc.Node {
		let symbol = this.findObjectByIndex(index);
		if (!symbol) {
			symbol = this.getSymbol();
		}

		const symbolModule = this.getSymbolModule(symbol);
		symbolModule.setOwner(owner);
		symbolModule.setIndex(index);
		return symbol;
	}

	getSymbol(owner: string = "", code: string = ""): cc.Node {
		let symbol = this.getSymbolFromPool(code);
		if (owner) {
			const symbolModule = this.getSymbolModule(symbol);
			symbolModule.setOwner(owner);
		}
		this.usingSymbols.push(symbol);
		symbol.active = true;
		return symbol;
	}

	getSymbolFromPool(code: string): cc.Node {
		return this.symbolPool.size() ? this.symbolPool.get(code) : this.instantiateNewSymbol();
	}

	removeSymbol(symbol: cc.Node, isForce: boolean = false): void {
		const symbolModule = this.getSymbolModule(symbol);
		if (symbolModule && symbolModule.getIndex() === SymbolIndexType.STICKY && !isForce) {
			return;
		}

		symbolModule.resetBeforeBackToPool();
		symbolModule.setIndex(SymbolIndexType.UNUSED);
		symbolModule.setOwner(SymbolOwnerType.NONE);

		const indexOf = this.usingSymbols.indexOf(symbol);
		if (indexOf != -1) {
			this.usingSymbols.splice(indexOf, 1);
		}

		if (this.symbolPool) {
			this.symbolPool.put(symbol);
		} else {
			symbol.destroy();
		}
	}

	returnSymbol(symbol: cc.Node): void {
		if (!symbol) {
			return;
		}

		if (this.isSymbolPool) {
			this.removeSymbol(symbol);
		} else {
			const indexOf = this.usingSymbols.indexOf(symbol);
			if (indexOf === -1) {
				this.removeSymbol(symbol);
			} else {
				eno.changeParent(symbol, this.node);
			}
		}
	}

	removeAllSymbols(): void {
		[...this.usingSymbols].forEach((obj) => {
			const symbolModule = this.getSymbolModule(obj);
			const symbolIndex = symbolModule.getIndex();
			if (symbolIndex !== SymbolIndexType.STICKY && symbolIndex !== SymbolIndexType.GIGABLOX) {
				this.removeSymbol(obj);
			}
		});
	}

	findObjectByIndex(index: number): cc.Node {
		const symbol = this.usingSymbols.find((symbol) => this.getSymbolModule(symbol) && this.getSymbolModule(symbol).getIndex() === index);
		if (!symbol) {
			return null;
		}
		symbol.active = true;
		return symbol;
	}

	createSymbol(code: string, size: cc.Vec2, parent: cc.Node, owner: string = ""): cc.Node {
		const symbol = this.getSymbol(owner, code);
		symbol.setParent(parent);

		const symbolModule = this.getSymbolModule(symbol);
		symbolModule.init(code, size);
		symbolModule.changeToStaticSymbol();

		return symbol;
	}

	createBlurSymbol(code: string, size: cc.Vec2, parent: cc.Node, owner: string = ""): cc.Node {
		const symbol = this.getSymbol(owner);
		symbol.setParent(parent);

		const symbolModule = this.getSymbolModule(symbol);
		symbolModule.init(code, size);
		symbolModule.changeToBlurSymbol();

		return symbol;
	}

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

	protected instantiateNewSymbol(): cc.Node {
		const symbol = instantiate(this.template);

		return symbol;
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

	getSymbolModule(symbol: cc.Node): SlotSymbolModule {
		if (!symbol['__SymbolModule__']) {
			symbol['__SymbolModule__'] = symbol.getComponent(SlotSymbolModule);
		}
		return symbol['__SymbolModule__'];
	}

	protected resetAllEffectAndTasks(): void {
		// to do
	}

	// TODO: show log using for debug
	showLogUsingSymbolsWithOwner(tableFormat: number[] = []): void {
		if (!this.node.active || !this.enabledInHierarchy) {
			return;
		}

		const symbols = this.usingSymbols.map((symbol) => {
			return this.getSymbolModule(symbol) 
		});
		const allOwners: any = [...new Set(symbols.map((symbol) => symbol.getOwner()))];

		for (const owner of allOwners) {
			if (owner == SymbolOwnerType.NONE) {
				continue;
			}

			const filterSymbols = symbols.filter((symbol) => symbol.getOwner() == owner);

			if (tableFormat.length == 0) {
				const logSymbols = filterSymbols.map((symbol) => {
					const symbolIndex = symbol.getIndex();
					const symbolCode = symbol.symbolCode;
					const symbolOwner = symbol.getOwner();
					return {
						index: symbolIndex,
						symbol: symbolCode,
						owner: symbolOwner
					}
				});

				logSymbols.sort((a, b) => a.index - b.index);

				console.log(owner, logSymbols);
			} else {
				const matrix: string[][] = [];
				let index = 0;

				// convert matrix to 2d array
				for (let col = 0; col < tableFormat.length; col++) {
					matrix.push(Array(tableFormat[col]).fill(""));
					for (let row = 0; row < tableFormat[col]; row++) {
						const symbol = filterSymbols.find((it) => it.getIndex() == index);
						const symbolCode = symbol ? symbol.symbolCode : "";
						const symbolIndex = index;
						matrix[col][row] = symbol ? `index:${symbolIndex}, symbol:${symbolCode}` : "";
						index++;
					}
				}

				const transposeMatrix = eno.ArrayUtils.transposeJagged(matrix, 'x');
				console.log(owner);
				console.table(transposeMatrix);
			}
		}
	}

	showLogUsingSymbols(tableFormat: number[] = []): void {
		if (!this.node.active || !this.enabledInHierarchy) {
			return;
		}

		const usingSymbols = this.usingSymbols.map((symbol) => {
			return this.getSymbolModule(symbol) 
		});

		const symbols = usingSymbols.filter(symbol => {
			return symbol.getOwner() !== SymbolOwnerType.NONE && symbol.getIndex() !== SymbolIndexType.UNUSED;
		});

		symbols.sort((a, b) => a.getIndex() - b.getIndex());
		const logSymbols = symbols.map((symbol) => {
			return {
				index: symbol.getIndex(),
				symbol: symbol.symbolCode,
				owner: symbol.getOwner()
			}
		});
		if (tableFormat.length == 0) {
			log(logSymbols);
		} else {
			let index = 0;
			const matrix: any[][] = [];
			for (let col = 0; col < tableFormat.length; col++) {
				matrix.push(Array(tableFormat[col]).fill(""));
				for (let row = 0; row < tableFormat[col]; row++) {
					matrix[col][row] = logSymbols[index];
					index++;
				}
			}
			log(matrix);
		}
	}
}
```
