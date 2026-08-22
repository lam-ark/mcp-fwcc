# SlotTablePaylineData

> **Source Path**: `assets/cc-common/cc-slot-module/BaseModule/Payline/PaylineModule/scripts/SlotTablePaylineData.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`SlotTablePaylineData`** extends `BaseDataModule`

## Key Methods
- `onloadExtend(): void`
- `getPayLines(): any[]`
- `getWinSymbols(): `
- `getMatrix(): any[]`
- `convertPayLine(): any[]`
- `getJackpotPayline(): Object`
- `convertJackpotPayline(): Object`
- `sortPayLines(): any[]`
- `isRightPayLine(): boolean`

## Source Implementation
```typescript
const { _decorator } = cc;
import { BaseDataModule } from "../../../../Core/BaseDataModule";
import { GAME_MODE_ENUM } from "../../../../Components/Common/SlotEnum";
import { PAYLINE_TYPE } from "../../PaylineCommon/PaylineTypes";
import { PaylineConfig } from "./PaylineConfig";
import PaylineUtils from "../../PaylineCommon/PaylineUtils";
const { ccclass } = _decorator;

@ccclass
export class SlotTablePaylineData extends BaseDataModule {
	config: PaylineConfig = null;
	state: number = -1;
	isResume: boolean = false;
	registeredKeys = [
		"state", "isResume",
		"matrix0", "matrix", "normalGameMatrix", "freeGameMatrix", "respinGameMatrix",
		"payLines", "normalGamePayLines", "freeGamePayLines", "respinGamePayLines",
		"rightPayLines", "rightNormalGamePayLines", "rightFreeGamePayLines", "rightRespinGamePayLines",
		"jackpotPayline"
	];

	onloadExtend(): void {
		this.config = this.getComponent(PaylineConfig);
	}

	getPayLines(): any[] {
		let payLines = this["payLines"] || [];
		let rightPayLines = this["rightPayLines"] || [];
		if (!this.isResume && this.state == GAME_MODE_ENUM.RESPIN_GAME) {
			payLines = this["respinGamePayLines"] || payLines;
			rightPayLines = this["rightRespinGamePayLines"] || rightPayLines;
		} else if (this.isFreeMode()) {
			payLines = this["freeGamePayLines"] || payLines;
			rightPayLines = this["rightFreeGamePayLines"] || rightPayLines;
		} else {
			payLines = this["normalGamePayLines"] || payLines;
			rightPayLines = this["rightNormalGamePayLines"] || rightPayLines;
		}

		payLines = [...this.convertPayLine(payLines), ...this.convertPayLine(rightPayLines, true)];
		return this.sortPayLines(payLines);
	}

	getWinSymbols(): { reel: number, row: number, index: number }[] {
		const matrix = this.getMatrix();
		const payLines = this.getPayLines();
		const symbols = PaylineUtils.getAllWinSymbols(matrix, payLines);
		return symbols;
	}

	getMatrix(): any[] {
		let rawMatrix = this["matrix"] || this["matrix0"];

		if (!this.isResume && this.state == GAME_MODE_ENUM.RESPIN_GAME) {
			rawMatrix = this["respinGameMatrix"] || rawMatrix;
		} else if (this.isFreeMode()) {
			rawMatrix = this["freeGameMatrix"] || rawMatrix;
		} else {
			rawMatrix = this["normalGameMatrix"] || rawMatrix;
		}

		return eno.SlotUtils.convertSlotMatrix(rawMatrix, this.config.TABLE_CONFIG.format);
	}

	protected convertPayLine(payLines: string[] = [], isRight: boolean = false): any[] {
		let convertedPayLines = [];
		const matrix = this.getMatrix();

		switch (this.config.PAYLINE_TYPE) {
			case PAYLINE_TYPE.Lines:
				convertedPayLines = eno.SlotUtils.convertPayLine(payLines);
				break;
			case PAYLINE_TYPE.AllWays:
				convertedPayLines = eno.SlotUtils.convertPayLineAllWays(payLines);
				break;
			case PAYLINE_TYPE.Cluster:
				convertedPayLines = eno.SlotUtils.convertPayLineCluster(payLines);
				break;
			case PAYLINE_TYPE.ScatterPay:
				convertedPayLines = eno.SlotUtils.convertPayLineScatterPay(payLines);
				break;
		}

		convertedPayLines.forEach((payLine, index) => {
			if (isRight || this.isRightPayLine(payLines[index])) {
				payLine.isRight = true;
			}
			payLine.winSymbols = PaylineUtils.getWinIndexesInPayLine(matrix, payLine);
		});

		return convertedPayLines;
	}

	getJackpotPayline(): Object {
		const convertedPayLine = this.convertJackpotPayline();
		return convertedPayLine;
	}

	protected convertJackpotPayline(): Object {
		if (!this["jackpotPayline"]) {
			return null
		}
		const dataSplit = this["jackpotPayline"].split(';');
		if (!dataSplit || !dataSplit.length) {
			return null;
		}
		const payLine = {
			payLineID: dataSplit[0],
			payLineWinNumbers: Number(parseInt(dataSplit[1])),
			payLineWinAmount: Number(dataSplit[2]),
		};
		return payLine;
	}

	protected sortPayLines(payLines: any[]): any[] {
		const leftPayLines = payLines.filter(payLine => !payLine.isRight) || [];
		const rightPayLines = payLines.filter(payLine => payLine.isRight) || [];
		return [...leftPayLines, ...rightPayLines];
	}

	protected isRightPayLine(rawPayLine: string): boolean {
		const arr = rawPayLine.split(";");
		const lastElement = arr[arr.length - 1];
		return lastElement.includes("R");
	}
}

```
