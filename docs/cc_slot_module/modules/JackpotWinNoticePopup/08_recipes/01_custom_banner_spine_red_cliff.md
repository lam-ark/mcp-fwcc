---
id: "cc_slot_module:JackpotWinNoticePopup:recipes:01_custom_banner_spine_red_cliff"
title: "Custom Banner Spine in Red Cliff"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "recipes", "red_cliff"]
---

# 💡 Custom Banner Spine in Red Cliff

---

## 1. Implementation

```typescript
const { ccclass, property } = cc._decorator;
import { JackpotWinNoticePopup } from 'assets/cc-common/cc-slot-module/Popup/NotifyJackpot/JackpotWinNoticePopup';

@ccclass('JackpotWinNoticePopup9666')
export class JackpotWinNoticePopup9666 extends JackpotWinNoticePopup {
    @property(sp.Skeleton)
    goldDragonSpine: sp.Skeleton = null;

    showInfo(): void {
        super.showInfo();
        if (this.goldDragonSpine) {
            this.goldDragonSpine.setAnimation(0, 'dragon_fly', false);
        }
    }
}
```
