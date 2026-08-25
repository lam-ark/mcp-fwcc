---
id: "cc_slot_module:PortraitBetModule:recipes:01_custom_portrait_bet_red_cliff"
title: "Custom Portrait Bet in Red Cliff"
category: "cc_slot_module"
tags: ["PortraitBetModule", "portraitbetmodule", "cc_slot_module", "recipes", "red_cliff"]
---

# 💡 Custom Portrait Bet in Red Cliff

---

## 1. Implementation

```typescript
const { ccclass } = cc._decorator;
import { PortraitBetModule } from 'assets/cc-common/cc-slot-module/BasePortrait/PortraitBet/PortraitBetModule';

@ccclass('PortraitBetModule9666')
export class PortraitBetModule9666 extends PortraitBetModule {
    onMaxBetClick(): void {
        super.onMaxBetClick();
        this.soundPlayer.playSFXClick();
    }
}
```
