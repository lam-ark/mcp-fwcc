---
id: "cc_slot_module:GameConfig:properties:inspector_properties"
title: "GameConfig Master Properties & Configuration Schema"
category: "cc_slot_module"
tags: ["GameConfig", "gameconfig", "cc_slot_module", "properties", "configuration", "constants", "currency", "win_level", "symbol_config"]
---

# 🎛️ GameConfig Master Properties & Configuration Schema

`GameConfig` defines **25+ core properties** organized into 10 functional domains. Below is the exhaustive reference breakdown:

---

## 1. Core Identity & Jackpot Prefix
| Property Name | TypeScript Type | Default Value | Purpose & Consumers |
| :--- | :--- | :--- | :--- |
| **`GAME_ID`** | `string` | `"9864"` | Unique platform game ID. Used for IoC container scoping (`eno.provide(Token, Inst, gameId)`), scheduler keys, and network auth. |
| **`JP_PREFIX_EVENT`** | `string` | `"9864_"` | Prefix prepended to WebSocket jackpot broadcast topics (e.g. `9864_UPDATE_JACKPOT`). |

---

## 2. Pay System & Bet Mathematics
| Property Name | TypeScript Type | Default Value | Purpose & Formula |
| :--- | :--- | :--- | :--- |
| **`PAY_SYSTEM`** | `PAY_SYSTEM_TYPE_ENUM` | `ALLWAYS` (`1`) | Payout evaluation model: `ALLWAYS` (ways to win) vs `LINES` (fixed paylines). |
| **`TOTAL_BET_CREDIT`**| `number` | `25` | Base credit multiplier used when `PAY_SYSTEM === ALLWAYS`. Total Bet = `betValue * TOTAL_BET_CREDIT`. |
| **`LINE_NUMBER`** | `number` | `25` | Total active paylines used when `PAY_SYSTEM === LINES`. Total Bet = `betValue * LINE_NUMBER`. |
| **`DEFAULT_BET`** | `string` | `"1"` | Initial `betKey` index selected when player enters the game. |
| **`DEFAULT_EXTRA_BET`**| `string` | `"0"` | Initial `extraBetKey` index. Formula: `betId = betKey + extraBetKey` (e.g. `"10"`). |
| **`MIN_BET_CIRCULAR`** | `boolean` | `false` | If `true`, clicking bet decrease at minimum bet wraps around to maximum bet. |
| **`MAX_BET_CIRCULAR`** | `boolean` | `false` | If `true`, clicking bet increase at maximum bet wraps around to minimum bet. |
| **`MIN_EXTRA_BET_CIRCULAR`** | `boolean` | `false` | Circular stepper behavior for extra bet minimum. |
| **`MAX_EXTRA_BET_CIRCULAR`** | `boolean` | `false` | Circular stepper behavior for extra bet maximum. |

---

## 3. Grid Geometry & Table Dimensions
| Property Name | TypeScript Type | Default Value | Purpose & Consumers |
| :--- | :--- | :--- | :--- |
| **`TABLE_FORMAT`** | `number[]` | `[3, 3, 3, 3, 3]` | Array of row heights per column. Length defines column count (5), values define rows (3x5 grid). Read by `SlotTableModule`. |
| **`SYMBOL_WIDTH`** | `number` | `140` | Horizontal pixel spacing of a single symbol cell. |
| **`SYMBOL_HEIGHT`**| `number` | `160` | Vertical pixel spacing of a single symbol cell. |

---

## 4. Win Level Ratio & Celebration Engine (`WIN_LEVEL_CONFIG`)
```typescript
public readonly WIN_LEVEL_CONFIG: any = {
    THRESHOLDS: [1, 5, 10],
    COUNT_MONEY_TIME: { 1: 0, 2: 0, 3: 4, 4: 6 },
    WIN_LINE_TIME: { 1: 1, 2: 2, 3: 4, 4: 6 },
};
```
* **`THRESHOLDS: [1, 5, 10]`**: Cutoff ratios of `totalWin / totalBet`:
  * `rate < 1` ➔ **Level 1** (Small Win / Normal Payout).
  * `1 <= rate < 5` ➔ **Level 2** (Medium Win).
  * `5 <= rate < 10` ➔ **Level 3** (Big Win).
  * `rate >= 10` ➔ **Level 4** (Mega / Super Win).
* **`COUNT_MONEY_TIME`**: Duration in seconds to run rolling number tweeners for each win level.
* **`WIN_LINE_TIME`**: Duration in seconds to highlight paylines on the reel matrix.

---

## 5. Special Symbol Layering & Priority (`SYMBOL_CONFIG`)
Defines the Z-Index render order and symbol character IDs:
```typescript
public readonly SYMBOL_CONFIG: any = {
    Wild:    { Priority: 1, Id: "K" },
    Scatter: { Priority: 2, Id: "A" },
    Bonus:   { Priority: 3, Id: "N/A" },
    Jackpot: { Priority: 4, Id: "JP" }
};
```
> **Rendering Rule**: `SlotSymbolManager` sorts overlapping Spine overlays by `Priority` (Priority 1 Wild renders on top of Priority 2 Scatter).

---

## 6. Multi-Currency Formatting Schema (`CURRENCY_CONFIG`)
Defines decimal counts, prefixes, and cent unit handling for all supported currencies:
```typescript
public DEFAUT_CURRENCY: string = "USD";
public CURRENCY_CONFIG: any = {
    VND: {
        MONEY_FORMAT:  { DECIMAL_COUNT: 0, CURRENCY_PREFIX: "", TRIM_ZERO: true },
        WALLET_FORMAT: { TRIM_ZERO: true, IS_SHORT_FORMAT: false },
        BET_FORMAT:    { DECIMAL_COUNT: 0, TRIM_ZERO: true, IS_SHORT_FORMAT: false }
    },
    USD: {
        MONEY_FORMAT:  { DECIMAL_COUNT: 2, CURRENCY_PREFIX: "$", TRIM_ZERO: false, CENT_UNIT: 0.5, CENT_SUFFIX: "¢" },
        WALLET_FORMAT: { DECIMAL_COUNT: 2, CURRENCY_PREFIX: "$", TRIM_ZERO: false, CENT_UNIT: 0.5, CENT_SUFFIX: "¢" },
        BET_FORMAT:    { DECIMAL_COUNT: 2, IS_SHORT_FORMAT: false }
    },
    THB: {
        MONEY_FORMAT:  { DECIMAL_COUNT: 2, CURRENCY_PREFIX: "฿", TRIM_ZERO: false },
        WALLET_FORMAT: { DECIMAL_COUNT: 2, IS_SHORT_FORMAT: false },
        BET_FORMAT:    { DECIMAL_COUNT: 0, IS_SHORT_FORMAT: false }
    }
};
```

---

## 7. Trial Mode Simulation Configuration
| Property Name | TypeScript Type | Default Value | Description |
| :--- | :--- | :--- | :--- |
| **`DEFAULT_WALLET_TRIAL`** | `object` | `{ VND: 200000000, USD: 1000000, THB: 3000000 }` | Starting virtual credit balance in Trial Play mode. |
| **`DEFAULT_TRIAL_JACKPOT`**| `object` | Multi-tier jackpot mock | Virtual jackpot values per tier (Grand, Major, Minor, Mini). |
| **`DEFAULT_TRIAL_BET_ID`** | `string` | `'55'` | Default wager step selected in trial mode. |
| **`MAX_TRIAL_SESSION`** | `number` | `20` | Max trial spins allowed before prompting real play login. |
| **`ENTER_TRIAL_MODE_DELAY_TIME`** | `number` | `0.5` | Delay in seconds during transition into trial mode. |
| **`BACK_TO_REAL_MODE_DELAY_TIME`** | `number` | `1.0` | Delay in seconds during transition back to real mode. |

---

## 8. Free Game & Bonus Game Console Test Configuration
| Property Name | TypeScript Type | Default Value | Purpose |
| :--- | :--- | :--- | :--- |
| **`FREE_OPTION_CONFIG`** | `object` | `{ OPTIONS: [1, 2], TIMER: 30 }` | Mock options and countdown timer for Free Spin mode selection in console test. |
| **`BONUS_GAME_CONFIG`** | `object` | `{ TOTAL_ITEM: 12, MAX_OPEN_ITEM: 9, BONUS_TYPE: 1 }` | Pick-and-click item counts and bonus mode archetype. |

---

## 9. Buy Feature & Extra Bet Mapping
| Property Name | TypeScript Type | Default Value | Purpose |
| :--- | :--- | :--- | :--- |
| **`HAS_BUY_FEATURE`** | `boolean` | `false` | Enables the Buy Feature button in UI HUD if `true`. |
| **`MAP_EXTRA_BET_FEATURE`** | `object \| null` | `null` | Maps extra bet keys to associated feature modifiers. |

---

## 10. Localization & Storage Keys
| Property Name | TypeScript Type | Default Value | Purpose |
| :--- | :--- | :--- | :--- |
| **`DEFAULT_LANGUAGE`** | `string` | `"EN"` | Default language code (`EN`, `VN`, `TH`, `ZH`, `ID`). |
| **`GAME_TEXT`** | `any` | `GameText` class | Master text string dictionary. |
| **`EXTEND_GAME_TEXT`** | `any` | `null` | Game-specific text override dictionary per locale. |
| **`STORAGE_KEY_BGM`** | `string` | `"enableBackgroundMusic"` | LocalStorage key storing BGM toggle state. |
| **`STORAGE_KEY_SFX`** | `string` | `"enableSound"` | LocalStorage key storing SFX toggle state. |
