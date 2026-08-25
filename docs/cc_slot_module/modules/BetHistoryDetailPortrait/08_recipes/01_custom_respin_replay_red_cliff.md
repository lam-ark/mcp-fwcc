---
id: "cc_slot_module:BetHistoryDetailPortrait:recipes:01_custom_respin_replay_red_cliff"
title: "Custom Respin Replay in Red Cliff"
category: "cc_slot_module"
tags: ["BetHistoryDetailPortrait", "bethistorydetailportrait", "cc_slot_module", "recipes", "red_cliff"]
---

# 💡 Custom Respin Replay in Red Cliff

---

## 1. Implementation

```typescript
const { ccclass } = cc._decorator;
import { BetHistoryDetailPortrait } from 'assets/cc-common/cc-slot-module/BasePortrait/BetHistoryPortrait/scripts/BetHistoryDetailPortrait';

@ccclass('BetHistoryDetailPortrait9666')
export class BetHistoryDetailPortrait9666 extends BetHistoryDetailPortrait {
    onNextRespinBtnClick(): void {
        super.onNextRespinBtnClick();
    }
}
```
