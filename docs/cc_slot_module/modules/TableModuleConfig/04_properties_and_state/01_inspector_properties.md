---
id: "cc_slot_module:TableModuleConfig:properties:inspector_properties"
title: "TableModuleConfig Inspector Properties"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ TableModuleConfig Inspector Properties

## 1. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Role |
| :--- | :--- | :--- | :--- |
| **`SYMBOL_WIDTH`** | `number` | `180` | Width of symbol slots / horizontal column pitch. |
| **`SYMBOL_HEIGHT`**| `number` | `160` | Height of symbol slots / vertical row pitch. |
| **`BUFFER_TOP`** | `number` | `1` | Extra symbols above viewport. |
| **`BUFFER_BOT`** | `number` | `1` | Extra symbols below viewport. |
| **`TABLE_FORMAT`** | `number[]` | `[3, 3, 3, 3, 3]` | Row count per column across the table. |
| **`RANDOM_SYMBOLS_CODE`**| `string[][]` | `[["2","3","4","5"],...]` | Fallback symbol pool for random matrix generation. |
| **`SCATTER_SYMBOL`**| `string` | `"A"` | Symbol ID designated as Scatter. |
| **`BONUS_SYMBOL`** | `string` | `"R"` | Symbol ID designated as Bonus trigger. |
| **`JACKPOT_SYMBOL`**| `string` | `"JP"` | Symbol ID designated as Jackpot. |
| **`WILD_SYMBOL`** | `string` | `"K"` | Symbol ID designated as Wild. |
| **`NEAR_WIN_DELAY_TIME`** | `number` | `1` | Extra spin delay on intermediate anticipated reels. |
| **`NEAR_WIN_DELAY_TIME_LAST_REEL`** | `number` | `2` | Extra spin delay on the final anticipated reel. |
