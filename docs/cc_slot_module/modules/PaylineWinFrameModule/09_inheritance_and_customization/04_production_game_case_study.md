---
id: "cc_slot_module:PaylineWinFrameModule:inheritance:production_game_case_study"
title: "PaylineWinFrameModule Production Case Study (Red Cliff g9666L)"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "inheritance", "case_study", "red_cliff"]
---

# 🎮 PaylineWinFrameModule Production Case Study (Red Cliff `g9666L`)

---

## 1. Production Context

In Red Cliff (`g9666L`), flaming dragon borders ignite around high-paying winning symbols.

---

## 2. Production Subclass

```typescript
const { ccclass } = cc._decorator;
import { PaylineWinFrameModule } from "PaylineWinFrameModule";

@ccclass
export default class PaylineWinFrameModule9666 extends PaylineWinFrameModule {
    protected playAnimation(data: { symbol: any, duration: number }): void {
        const { reel, row, position } = data.symbol;
        const winFrame = this.getWinFrame(reel, row, position);
        const animName = (data.symbol.symbolCode === "JP") ? "flame_jackpot" : "flame_normal";
        winFrame.emit("PLAY_ANIMATION", animName, data.duration);
    }
}
```
