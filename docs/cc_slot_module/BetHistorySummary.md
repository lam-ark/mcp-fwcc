# BetHistorySummary

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/BetHistory/BetHistorySummary.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`export`**
- **`BetHistorySummary`** extends `SlotBaseModule`

## CC Properties
- `sessionLabel`
- `normalWinNode`
- `freeWinNode`
- `topUpWinNode`
- `bonusWinNode`
- `jackpotWinNode`
- `totalWinNode`

## Key Methods
- `onLoadExtend(): void`
- `setupData(): void`
- `resetData(): void`

## Source Implementation
```typescript
const { _decorator } = cc;
import { SlotBaseModule } from "../../Core/SlotBaseModule";
const { ccclass, property } = _decorator;
const { inject, MoneyFormatter } = eno;

@ccclass
export class BetHistorySummary extends SlotBaseModule {
	@property(cc.Label)
	sessionLabel: cc.Label = null;
	@property(cc.Node)
	normalWinNode: cc.Node = null;
	@property(cc.Node)
	freeWinNode: cc.Node = null;
	@property(cc.Node)
	topUpWinNode: cc.Node = null;
	@property(cc.Node)
	bonusWinNode: cc.Node = null;
	@property(cc.Node)
	jackpotWinNode: cc.Node = null;
	@property(cc.Node)
	totalWinNode: cc.Node = null;

	modelData = null;
	@inject(MoneyFormatter) moneyFormatter: eno.MoneyFormatter;

	onLoadExtend(): void {
		this.node.on("SET_SUMMARY_DATA", this.setupData, this);
		this.node.on("RESET_SUMMARY_DATA", this.resetData, this);
		this.resetData();
	}

	setupData(data: any): void {
		const { sessionId, normalWin, freeWin, topUpWin, bonusWin, jackpotWin, totalWin } = data;

		if (this.sessionLabel) {
			this.sessionLabel.string = `${sessionId}`;
		}
		if (this.normalWinNode) {
			this.normalWinNode.emit("UPDATE_RESULT", normalWin);
		}
		if (this.freeWinNode) {
			this.freeWinNode.emit("UPDATE_RESULT", freeWin);
		}
		if (this.topUpWinNode) {
			this.topUpWinNode.emit("UPDATE_RESULT", topUpWin);
		}
		if (this.bonusWinNode) {
			this.bonusWinNode.emit("UPDATE_RESULT", bonusWin);
		}
		if (this.jackpotWinNode) {
			this.jackpotWinNode.emit("UPDATE_RESULT", jackpotWin);
		}
		if (this.totalWinNode) {
			this.totalWinNode.emit("UPDATE_RESULT", totalWin);
		}
	}

	resetData(): void {
		if (this.sessionLabel) {
			this.sessionLabel.string = "";
		}
		if (this.normalWinNode) {
			this.normalWinNode.emit("RESET");
		}
		if (this.freeWinNode) {
			this.freeWinNode.emit("RESET");
		}
		if (this.topUpWinNode) {
			this.topUpWinNode.emit("RESET");
		}
		if (this.bonusWinNode) {
			this.bonusWinNode.emit("RESET");
		}
		if (this.jackpotWinNode) {
			this.jackpotWinNode.emit("RESET");
		}
		if (this.topUpWinNode) {
			this.topUpWinNode.emit("RESET");
		}
	}
}

```
