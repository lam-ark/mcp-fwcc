---
id: "cc_slot_module:JackpotHistoryModule:recipes:01_custom_tier_filtering_red_cliff"
title: "Custom Tier Filtering in Red Cliff"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "recipes", "red_cliff"]
---

# 💡 Custom Tier Filtering in Red Cliff

---

## 1. Implementation

```typescript
const { ccclass } = cc._decorator;
import { JackpotHistoryModule } from 'assets/cc-common/cc-slot-module/Popup/JackpotHistory/JackpotHistoryModule';

@ccclass('JackpotHistoryModule9666')
export class JackpotHistoryModule9666 extends JackpotHistoryModule {
    onLoadExtend(): void {
        this.jpList = "GRAND-MAJOR-MINOR"; // Query top 3 tiers
        super.onLoadExtend();
    }
}
```
