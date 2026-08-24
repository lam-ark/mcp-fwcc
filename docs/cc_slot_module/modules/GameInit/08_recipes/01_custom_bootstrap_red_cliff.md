---
id: "cc_slot_module:GameInit:recipe:custom_bootstrap_red_cliff"
title: "Recipe: Custom Bootstrap for Red Cliff Slot (g9666L)"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "recipes", "red_cliff", "g9666L", "production_code"]
---

# 💡 Recipe: Custom Bootstrap for Red Cliff Slot (`g9666L`)

## 1. Custom Game Initialization Pattern

In production games such as Red Cliff (`g9666L`), games customize bootstrap parameters by overriding `GameConfig` properties while reusing the core `GameInit` pipeline:

```typescript
const { _decorator } = cc;
import { GameConfig } from "GameConfig";
const { ccclass } = _decorator;

@ccclass("GameConfig9666")
export default class GameConfig9666 extends GameConfig {
    public GAME_ID: string = "9666";
    public JP_PREFIX_EVENT: string = "9666_";
    public TABLE_FORMAT: number[] = [4, 5, 5, 5, 4]; // Custom 5-reel megaways layout
    public SYMBOL_WIDTH: number = 142;
    public SYMBOL_HEIGHT: number = 150;

    public EXTEND_GAME_TEXT: any = {
        EN: {
            FREE_GAME_AWARDED: "YOU WON {0} FREE SPINS!",
            TOTAL_WIN: "TOTAL WIN",
        },
        VN: {
            FREE_GAME_AWARDED: "BẠN ĐÃ NHẬN ĐƯỢC {0} VÒNG QUAY MIỄN PHÍ!",
            TOTAL_WIN: "TỔNG THẮNG",
        }
    };
}
```
