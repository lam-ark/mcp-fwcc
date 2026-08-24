---
id: "cc_slot_module:SlotGameSettings:gotchas:index"
title: "SlotGameSettings Gotchas Index"
category: "cc_slot_module"
tags: ["SlotGameSettings", "slot_game_settings", "cc_slot_module", "gotchas", "fast_to_result", "index"]
---

# ⚠️ SlotGameSettings Gotchas Index

## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_fast_to_result_unhandled_skips`](./01_fast_to_result_unhandled_skips.md)** | Visual artifacts or lingering spine tweens remaining on screen when player triggers fast-to-result (FTR) spin. | Custom visual modules failing to check `gameSettings.isFastToResult` inside animation callbacks. | 🟠 High (Visual De-sync) |
