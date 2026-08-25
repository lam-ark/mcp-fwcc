---
id: "cc_slot_module:BetHistoryModule:recipes:01_custom_bet_history_red_cliff"
title: "Custom Bet History in Red Cliff Slot"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "recipes", "red_cliff", "g9666L"]
---

# 💡 Custom Bet History in Red Cliff Slot (`g9666L`)

---

## 1. Implementation Code

```typescript
const { ccclass, property } = cc._decorator;
import { BetHistoryModule } from 'assets/cc-common/cc-slot-module/Popup/BetHistory/BetHistoryModule';

@ccclass('BetHistoryModule9666')
export class BetHistoryModule9666 extends BetHistoryModule {
    @property(cc.Node)
    jackpotHighlightBadge: cc.Node = null;

    onLoadExtend(): void {
        this.itemPerPage = 6; // Custom 6 rows per page
        super.onLoadExtend();
    }

    onRecordDataChange(value: any): void {
        super.onRecordDataChange(value);
        if (this.jackpotHighlightBadge) {
            const hasJackpot = value && value.some((item: any) => item.isJackpotWin);
            this.jackpotHighlightBadge.active = hasJackpot;
        }
    }
}
```
