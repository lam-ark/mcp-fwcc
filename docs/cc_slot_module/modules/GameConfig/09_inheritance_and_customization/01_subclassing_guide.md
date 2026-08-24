---
id: "cc_slot_module:GameConfig:customization:subclassing_guide"
title: "GameConfig Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["GameConfig", "gameconfig", "cc_slot_module", "customization", "subclassing", "TABLE_FORMAT", "PAY_SYSTEM", "WIN_LEVEL_CONFIG"]
---

# 🏗️ GameConfig Subclassing & Customization Guide

## 1. Class Inheritance Declaration

When creating a new slot title (e.g. Red Cliff `g9666L`), create a subclass of `GameConfig` and attach it to **`Canvas/Director`**:

```typescript
const { _decorator } = cc;
import { GameConfig, PAY_SYSTEM_TYPE_ENUM } from "../../../../cc-common/cc-slot-module/SlotModuleExport";
const { ccclass } = _decorator;

@ccclass("GameConfig9666")
export class GameConfig9666 extends GameConfig {
    public GAME_ID = "9666";
    public JP_PREFIX_EVENT = "9666_";
    public PAY_SYSTEM = PAY_SYSTEM_TYPE_ENUM.ALLWAYS;
    public TOTAL_BET_CREDIT: number = 25;
}
```

---

## 2. Core Customization Domains When Building a Game

```mermaid
graph TD
    Subclass[GameConfig9666<br/>Custom Subclass]

    subgraph 1. Math & Rules
        Subclass --> PaySystem[PAY_SYSTEM = ALLWAYS / LINES]
        Subclass --> TotalBetCredit[TOTAL_BET_CREDIT = 25]
        Subclass --> WinLevels[WIN_LEVEL_CONFIG: Ratio 1, 5, 10]
    end

    subgraph 2. Grid Geometry
        Subclass --> TableFormat[TABLE_FORMAT = 4, 5, 5, 5, 4]
        Subclass --> SymbolDimensions[SYMBOL_WIDTH = 142, SYMBOL_HEIGHT = 150]
        Subclass --> SymbolPriority[SYMBOL_CONFIG: Wild=1, Scatter=2]
    end

    subgraph 3. Localization & Market
        Subclass --> Currencies[CURRENCY_CONFIG: VND, USD, THB]
        Subclass --> TextOverrides[EXTEND_GAME_TEXT: EN, VN, TH]
    end
```

---

## 3. Mandatory Overrides Checklist for New Games
1. **`GAME_ID`**: Must match platform game code (used by IoC container, audio player, and WebSocket).
2. **`JP_PREFIX_EVENT`**: Set to `"[GAME_ID]_"` for WebSocket jackpot channel routing.
3. **`TABLE_FORMAT`**: Array defining the number of rows per column (e.g. `[3,3,3,3,3]` for standard 5x3 or `[4,5,5,5,4]` for megaways).
4. **`PAY_SYSTEM`**: Select `PAY_SYSTEM_TYPE_ENUM.ALLWAYS` or `LINES`.
5. **`WIN_LEVEL_CONFIG`**: Tune coin count-up audio durations and big win ratios according to math sheet specs.
