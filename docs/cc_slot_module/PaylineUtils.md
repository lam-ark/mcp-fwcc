# PaylineUtils

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Payline/PaylineCommon/PaylineUtils.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`PaylineUtils`**

## Key Methods
- `setConfig(): void`
- `getAllWinSymbols(): `
- `getWinIndexesInPayLine(): `
- `getWinIndexesInLine(): `
- `getWinIndexesInAllways(): `
- `getWinIndexesInCluster(): `
- `getWinIndexesInScatterPay(): `
- `checkSymbolInPayline(): boolean`
- `convertToIndex(): number`
- `convertFromIndex(): `
- `isSymbolMatch(): boolean`
- `getReels(): number[]`

## Source Implementation
```typescript
const { error } = cc;
import { PaylineConfig } from "../PaylineModule/scripts/PaylineConfig";
import { PAYLINE_TYPE } from "./PaylineTypes";

export default class PaylineUtils {
	protected static CONFIG: PaylineConfig = null;

	static setConfig(payLineConfig: PaylineConfig): void {
		this.CONFIG = payLineConfig;
	}

	static getAllWinSymbols(matrix: any[][], payLines: any[]): { reel: number, row: number, index: number }[] {
		const seenIndexes = new Set<number>();
		const uniqueSymbols: { reel: number, row: number, index: number }[] = [];

		for (const payLine of payLines) {
			const winIndexes = this.getWinIndexesInPayLine(matrix, payLine);
			for (const symbol of winIndexes) {
				if (!seenIndexes.has(symbol.index)) {
					seenIndexes.add(symbol.index);
					uniqueSymbols.push(symbol);
				}
			}
		}

		return uniqueSymbols;
	}

	static getWinIndexesInPayLine(matrix: any[][], payLine: any): { reel: number, row: number, index: number }[] {
		if (this.CONFIG.PAYLINE_TYPE === PAYLINE_TYPE.Lines) {
			return this.getWinIndexesInLine(matrix, payLine);
		} else if (this.CONFIG.PAYLINE_TYPE === PAYLINE_TYPE.Cluster) {
			return this.getWinIndexesInCluster(matrix, payLine);
		} else if (this.CONFIG.PAYLINE_TYPE === PAYLINE_TYPE.ScatterPay) {
			return this.getWinIndexesInScatterPay(matrix, payLine);
		} else {
			return this.getWinIndexesInAllways(matrix, payLine);
		}
	}

	static getWinIndexesInLine(matrix: any[][], payLine: any): { reel: number, row: number, index: number }[] {
		const symbols: { reel: number, row: number, index: number }[] = [];
		const lineMatrix = this.CONFIG.PAY_LINE_MATRIX[payLine.payLineID];

		if (!lineMatrix) {
			if (this.CONFIG.IS_DEBUG) {
				error(`[PaylineUtils] Line matrix not found for payline ID: ${payLine.payLineID}`);
			}
			return [];
		}

		const reels = this.getReels(lineMatrix.length, payLine.isRight);
		for (const reel of reels) {
			const row = lineMatrix[reel];
			if (this.isSymbolMatch(matrix, reel, row, payLine.symbolId) && symbols.length < payLine.payLineWinNumbers) {
				symbols.push({ reel, row, index: this.convertToIndex(matrix, reel, row) });
			}
		}

		return symbols;
	}

	static getWinIndexesInAllways(matrix: any[][], payLine: any): { reel: number, row: number, index: number }[] {
		const symbols: { reel: number, row: number, index: number }[] = [];
		const reels = this.getReels(matrix.length, payLine.isRight).slice(0, payLine.reelCount);
		for (const reel of reels) {
			for (let row = 0; row < matrix[reel].length; row++) {
				if (this.isSymbolMatch(matrix, reel, row, payLine.symbolId)) {
					symbols.push({ reel, row, index: this.convertToIndex(matrix, reel, row) });
				}
			}
		}

		return symbols;
	}

	static getWinIndexesInCluster(matrix: any[][], payLine: any): { reel: number, row: number, index: number }[] {
		const symbols: { reel: number, row: number, index: number }[] = [];
		const traceWay = payLine.traceWay;

		if (traceWay && traceWay.length > 0) {
			for (const index of traceWay) {
				const { reel, row } = this.convertFromIndex(matrix, index);
				symbols.push({ reel, row, index });
			}
		} else {
			const payLineWinNumbers = payLine.payLineWinNumbers;
			if (payLineWinNumbers.length > 0) {
				symbols.length = payLineWinNumbers.length;
				for (let i = 0; i < payLineWinNumbers.length; i++) {
					const { reel, row } = this.convertFromIndex(matrix, payLineWinNumbers[i]);
					symbols[i] = { reel, row, index: payLineWinNumbers[i] };
				}
			}
		}

		return symbols;
	}

	static getWinIndexesInScatterPay(matrix: any[][], payLine: any): { reel: number, row: number, index: number }[] {
		const symbols: { reel: number, row: number, index: number }[] = [];
		const traceWay = payLine.traceWay;

		if (traceWay && traceWay.length > 0) {
			for (const index of traceWay) {
				const { reel, row } = this.convertFromIndex(matrix, index);
				symbols.push({ reel, row, index });
			}
		} else {
			const payLineWinNumbers = payLine.payLineWinNumbers;
			if (payLineWinNumbers.length > 0) {
				symbols.length = payLineWinNumbers.length;
				for (let i = 0; i < payLineWinNumbers.length; i++) {
					const { reel, row } = this.convertFromIndex(matrix, payLineWinNumbers[i]);
					symbols[i] = { reel, row, index: payLineWinNumbers[i] };
				}
			}
		}

		return symbols;
	}

	static checkSymbolInPayline(symbolCode: string, payLineCode: string): boolean {
		if (!symbolCode) {
			return false;
		}
		if (symbolCode == payLineCode) {
			return true;
		}
		for (const wildCode of this.CONFIG.WILD_CODE_CONFIG) {
			if (symbolCode === wildCode || symbolCode[0] === wildCode) {
				return true;
			}
		}
		return false;
	}

	static convertToIndex(matrix: any[][], reel: number, row: number): number {
		let index = 0;
		for (let i = 0; i < reel; i++) {
			index += matrix[i].length;
		}
		return index + row;
	}

	static convertFromIndex(matrix: any[][], index: number): { reel: number, row: number } {
		let currIndex = 0;
		for (let reel = 0;  reel < matrix.length;  reel++) {
			for (let row = 0; row < matrix[reel].length; row++) {
				if (currIndex === index) {
					return { reel, row };
				}
				currIndex++;
			}
		}
		throw new Error("Index out of bounds");
	}

	protected static isSymbolMatch(matrix: any[][], reel: number, row: number, payLineCode: string): boolean {
		const symbolCode = matrix[reel][row] && matrix[reel][row].split('_')[0];
		return this.checkSymbolInPayline(symbolCode, payLineCode);
	}

	protected static getReels(reelCount: number, isRight: boolean): number[] {
		let reels = Array.from({ length: reelCount }, (_, i) => i);
		if (isRight) {
			reels.reverse();
		}
		return reels;
	}
}

```
