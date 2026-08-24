---
id: "cc_slot_module:GameConfig:overview:architecture_and_role"
title: "GameConfig Master Configuration Architecture & Role"
category: "cc_slot_module"
tags: ["GameConfig", "gameconfig", "cc_slot_module", "overview", "architecture", "configuration", "constants", "pay_system"]
---

# 🏛️ GameConfig Master Configuration Architecture & Role

## 1. Executive Summary & Purpose

`GameConfig` (`assets/cc-common/cc-slot-module/Core/GameConfig.ts`) is the central **Mathematical, Geometric, and Gameplay Configuration Container** in the `cc-common` Slot SDK.

Mounted at `Canvas/Director`, it defines all fundamental slot parameters: grid format (`TABLE_FORMAT`), symbol rendering dimensions (`SYMBOL_WIDTH`, `SYMBOL_HEIGHT`), pay system rules (`PAY_SYSTEM`), win level ratio thresholds (`WIN_LEVEL_CONFIG`), currency formatting matrices (`CURRENCY_CONFIG`), and special symbol priority mapping (`SYMBOL_CONFIG`).

```mermaid
graph TD
    GC[GameConfig.ts<br/>Master Configuration]

    subgraph Geometric & Rendering Domain
        GC -->|TABLE_FORMAT: 3x3x3x3x3| Table[SlotTableModule]
        GC -->|SYMBOL_WIDTH / HEIGHT| Symbol[SlotSymbolManager]
        GC -->|SYMBOL_CONFIG: Priority 1..4| Depth[Symbol Z-Order & Spine Render]
    end

    subgraph Mathematical & Pay System Domain
        GC -->|PAY_SYSTEM: ALLWAYS / LINES| PayCalc[Payline / Payout Engines]
        GC -->|WIN_LEVEL_CONFIG: Ratio 1, 5, 10| WinFx[WinEffectModule / Celebration]
        GC -->|TOTAL_BET_CREDIT: 25| Bet[BetModule & Wallet]
    end

    subgraph Localization & Currency Domain
        GC -->|CURRENCY_CONFIG: VND, USD, THB| Formatter[MoneyFormatter / MoneyTween]
        GC -->|GAME_TEXT & EXTEND_GAME_TEXT| Text[GameText Localization Engine]
    end
```

---

## 2. Core Responsibilities

1. **Grid Geometry Definition**: Supplies `TABLE_FORMAT` array (e.g. `[3, 3, 3, 3, 3]` or `[4, 5, 5, 5, 4]`) to `SlotTableModule` for reel generation.
2. **Win Level Escalation Tuning**: Configures `WIN_LEVEL_CONFIG` ratios determining Level 1 (Small Win), Level 2 (Medium Win), Level 3 (Big Win), and Level 4 (Mega/Super Win) animations and coin counting durations.
3. **Multi-Currency Formatting Schema**: Stores `CURRENCY_CONFIG` specifying prefix symbols, decimal counts, and cent unit handling for VND, USD, and THB.
4. **Symbol Z-Index & Hierarchy Rules**: Enforces `SYMBOL_CONFIG` priority order so Wilds and Scatters render consistently on top of low-pay symbols.
