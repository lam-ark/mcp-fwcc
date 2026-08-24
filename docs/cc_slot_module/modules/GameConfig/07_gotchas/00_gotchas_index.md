---
id: "cc_slot_module:GameConfig:gotchas:index"
title: "GameConfig Gotchas & Engine Configuration Pitfalls"
category: "cc_slot_module"
tags: ["GameConfig", "gameconfig", "cc_slot_module", "gotchas", "engine_defects", "index"]
---

# ⚠️ GameConfig Gotchas & Engine Configuration Pitfalls

## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_missing_currency_format_crash`](./01_missing_currency_format_crash.md)** | `MoneyFormatter` crashing with `TypeError: Cannot read property 'DECIMAL_COUNT' of undefined`. | Server returns a currency code (e.g. `MYR`, `PHP`) not declared in `CURRENCY_CONFIG`. | 🔴 Critical (Crash on Wallet Init) |
| **[`02_table_format_column_mismatch`](./02_table_format_column_mismatch.md)** | Server returning 5-column matrix while `TABLE_FORMAT` is configured with 6 columns causing index out-of-bounds. | Desynchronization between frontend `TABLE_FORMAT` array and backend server paytable matrix dimensions. | 🔴 Critical (Matrix Parsing Crash) |
| **[`03_win_level_threshold_ordering`](./03_win_level_threshold_ordering.md)** | Win celebrations firing Level 4 Mega Win sound for small 2x wins. | Declaring `THRESHOLDS` array out of ascending order (e.g. `[10, 5, 1]`). | 🟠 High (Incorrect Win Level Calculation) |
