---
id: "cc_slot_module:PaylineWinFrameModule:recipes:dynamic_tier_colored_win_frames"
title: "Recipe: Dynamic Win Frame Tinting by Win Tier"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "recipes", "win_frames", "tint"]
---

# 💡 Recipe: Dynamic Win Frame Tinting by Win Tier

---

## 1. Context & Use Case

To colorize the glowing win frame according to payout size (e.g. Gold for 5OAK, Silver for 4OAK, Bronze for 3OAK).

---

## 2. Implementation

```typescript
const { ccclass } = cc._decorator;
import { PaylineWinFrameModule } from "PaylineWinFrameModule";

@ccclass
export class DynamicTierWinFrameModule extends PaylineWinFrameModule {
    protected playAnimation(data: { symbol: any, duration: number }): void {
        super.playAnimation(data);
        const { reel, row, position, count } = data.symbol;
        const winFrame = this.getWinFrame(reel, row, position);
        
        if (count >= 5) {
            winFrame.color = cc.Color.YELLOW; // Gold
        } else if (count === 4) {
            winFrame.color = cc.Color.CYAN;   // Silver
        } else {
            winFrame.color = cc.Color.WHITE;
        }
    }
}
```
