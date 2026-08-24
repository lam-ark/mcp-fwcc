---
id: "cc_slot_module:GameConfig:recipe:custom_config_red_cliff"
title: "Recipe: Custom GameConfig for Red Cliff (g9666L)"
category: "cc_slot_module"
tags: ["GameConfig", "gameconfig", "cc_slot_module", "recipes", "red_cliff", "g9666L", "production_code"]
---

# 💡 Recipe: Custom GameConfig for Red Cliff (`g9666L`)

## 1. Concrete Production Implementation

```typescript
const { _decorator } = cc;
import { GameConfig } from "GameConfig";
import { PAY_SYSTEM_TYPE_ENUM } from "../Components/Common/SlotEnum";
const { ccclass } = _decorator;

@ccclass("GameConfig9666")
export default class GameConfig9666 extends GameConfig {
    public GAME_ID: string = "9666";
    public JP_PREFIX_EVENT: string = "9666_";
    public PAY_SYSTEM = PAY_SYSTEM_TYPE_ENUM.ALLWAYS;
    public TOTAL_BET_CREDIT: number = 20;

    // Custom 5-column Megaways Grid Geometry
    public TABLE_FORMAT: number[] = [4, 5, 5, 5, 4];
    public SYMBOL_WIDTH: number = 142;
    public SYMBOL_HEIGHT: number = 150;

    // Custom Win Level Escalations
    public readonly WIN_LEVEL_CONFIG: any = {
        THRESHOLDS: [1, 5, 10],
        COUNT_MONEY_TIME: { 1: 0, 2: 0, 3: 4, 4: 6 },
        WIN_LINE_TIME: { 1: 1, 2: 2, 3: 3.5, 4: 5 },
    };

    // Extended Red Cliff Localization Dictionary
    public EXTEND_GAME_TEXT: any = {
        EN: {
            TITLE: "RED CLIFF",
            FREE_GAME_TITLE: "FREE SPINS FEATURE",
            TOTAL_WIN: "TOTAL WIN",
        },
        VN: {
            TITLE: "XÍCH BÍCH",
            FREE_GAME_TITLE: "VÒNG QUAY MIỄN PHÍ",
            TOTAL_WIN: "TỔNG THẮNG",
        }
    };
}
```
