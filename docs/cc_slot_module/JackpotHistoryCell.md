# JackpotHistoryCell

> **Source Path**: `assets/cc-common/cc-slot-module/Popup/JackpotHistory/JackpotHistoryCell.ts`

## Overview
TypeScript module from `cc-common/cc-slot-module`.

## Classes
- **`JackpotSpriteType`**
- **`export`**
- **`JackpotHistoryCell`** extends `SlotBaseModule`

## CC Properties
- `jpName`
- `image`
- `jackpotType`
- `jackpotList`
- `lbTime`
- `lbAccount`
- `lbBet`
- `lbWinAmount`

## Key Methods
- `updateData(): void`
- `findJackpotStaticData(): JackpotSpriteType | null`

## Source Implementation
```typescript
const { _decorator } = cc;
const { ccclass, property } = _decorator;
import { SlotBaseModule } from '../../Core/SlotBaseModule';
const { inject, MoneyFormatter } = eno;

@ccclass("JackpotSpriteType")
export class JackpotSpriteType {
	@property()
	jpName = '';

	@property({ type: cc.SpriteFrame })
	image = null;
}

@ccclass
export class JackpotHistoryCell extends SlotBaseModule {
	@property(cc.Node) jackpotType: cc.Node = null;
	@property(JackpotSpriteType) jackpotList: JackpotSpriteType[] = [];
	@property(cc.Label) lbTime: cc.Label = null;
	@property(cc.Label) lbAccount: cc.Label = null;
	@property(cc.Label) lbBet: cc.Label = null;
	@property(cc.Label) lbWinAmount: cc.Label = null;
	@property timeFormat: string = "DD/MM hh:mm:ss";
	@property breakLineTimeString: boolean = false;
	@property maxCharAccount: number = 18;

	@inject(MoneyFormatter) moneyFormatter: any;

	updateData(data): void {
		if (!data) {
			return;
		}

		const baseBet = data.exDt && data.exDt.baseBet ? data.exDt.baseBet : 0;
		const totalBetAmount = baseBet || data.betAmt || 0;
		this.lbTime.string = eno.TimeUtils.formatTimeStamp(data.time, this.timeFormat, this.breakLineTimeString);
		this.lbAccount.string = eno.CommonUtils.formatUserName(data.dn, this.maxCharAccount);
		this.lbBet.string = this.moneyFormatter.formatMoney(totalBetAmount);
		this.lbWinAmount.string = this.moneyFormatter.formatMoney(data.jpAmt);
	}

	findJackpotStaticData(jackpotType: string) : JackpotSpriteType | null{
		for (let i = 0; i < this.jackpotList.length; i++) {
			if (this.jackpotList[i].jpName == jackpotType) {
				return this.jackpotList[i];
			}
		}

		return null;
	}
}
```
