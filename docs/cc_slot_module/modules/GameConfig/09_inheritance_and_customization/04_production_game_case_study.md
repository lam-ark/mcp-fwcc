---
id: "cc_slot_module:GameConfig:customization:production_game_case_study"
title: "Production Case Study: GameConfig9666 (Red Cliff Slot)"
category: "cc_slot_module"
tags: ["GameConfig", "gameconfig", "cc_slot_module", "customization", "case_study", "red_cliff", "g9666L", "production_code"]
---

# 📖 Production Case Study: GameConfig9666 (Red Cliff Slot)

## 1. Context & Custom Requirements

In **Red Cliff (`g9666L`)**, the game uses a custom **5-column Megaways board layout**, a 25-credit AllWays betting system, offline mock payloads for quick prototyping, and custom cheat overlays for QA testing.

---

## 2. Complete Production Implementation (`GameConfig9666.ts`)

```typescript
const { _decorator } = cc;
import { GameConfig, PAY_SYSTEM_TYPE_ENUM } from '../../../../cc-common/cc-slot-module/SlotModuleExport';
import { installCheatOverlay9666 } from './CheatOverlay9666';
import GameMockupData9666 from '../Mock/GameMockupData9666';
const { ccclass } = _decorator;

@ccclass
export class GameConfig9666 extends GameConfig {
    public GAME_ID = "9666";
    public JP_PREFIX_EVENT = "9666_";
    public PAY_SYSTEM = PAY_SYSTEM_TYPE_ENUM.ALLWAYS;
    public TOTAL_BET_CREDIT: number = 25;

    // Developer-only switch. Keep false for real backend flow.
    public USE_MOCKUP: boolean = false;
    public GAME_MOCKUP_DATA = GameMockupData9666.TutorialNormalGame9666_USD;
    public TUTORIAL_MOCKUP_DATA = GameMockupData9666.TutorialGame9666_USD;

    public readonly WIN_PANEL_EFFECT_CONFIG = {
        // [level 2 minimum, level 3 minimum] in win/totalBet.
        TOTAL_WIN_LEVEL_THRESHOLDS: [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
    };

    protected onLoad(): void {
        installCheatOverlay9666();
    }
}
```

---

## 3. Key Takeaways from Red Cliff Customization
1. **Developer Tooling Hooks**: `onLoad()` installs `CheatOverlay9666` for QA slot testing without interfering with core initialization.
2. **Offline Prototyping**: Uses `USE_MOCKUP` and `GAME_MOCKUP_DATA` allowing UI engineers to build and test animations before backend API readiness.
