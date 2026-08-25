---
id: "cc_slot_module:BetHistoryDetailModule:recipes:01_custom_step_renderer_red_cliff"
title: "Custom Step Renderer in Red Cliff Slot"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "recipes", "red_cliff", "g9666L"]
---

# 💡 Custom Step Renderer in Red Cliff Slot (`g9666L`)

---

## 1. Production Recipe

```typescript
const { ccclass, property } = cc._decorator;
import { BetHistoryDetailModule } from 'assets/cc-common/cc-slot-module/Popup/BetHistory/BetHistoryDetailModule';

@ccclass('BetHistoryDetailModule9666')
export class BetHistoryDetailModule9666 extends BetHistoryDetailModule {
    @property(cc.Node)
    multiplierBadge: cc.Node = null;

    updateGameModeInfo(data: any): void {
        super.updateGameModeInfo(data);
        if (this.multiplierBadge && data && data.customData) {
            const mult = data.customData.wildMultiplier || 1;
            this.multiplierBadge.active = mult > 1;
        }
    }
}
```
