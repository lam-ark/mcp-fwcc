---
id: "cc_slot_module:InfoPanel:recipes:01_custom_paytable_red_cliff"
title: "Custom Paytable in Red Cliff"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "recipes", "red_cliff"]
---

# 💡 Custom Paytable in Red Cliff

---

## 1. Implementation

```typescript
const { ccclass } = cc._decorator;
import { InfoPanel } from 'assets/cc-common/cc-slot-module/Popup/Info/InfoPanel';

@ccclass('InfoPanel9666')
export class InfoPanel9666 extends InfoPanel {
    activeButtons(id: number): void {
        super.activeButtons(id);
        // Refresh dynamic payout multipliers based on current bet
        this.node.emit('UPDATE_SYMBOL_PAYOUTS', this.gameLogic.getDataModel().BetData.currentBet);
    }
}
```
