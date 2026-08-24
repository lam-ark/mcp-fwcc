---
id: "cc_slot_module:GameDataStore:customization:override_points_matrix"
title: "GameDataStore Extension Points Matrix"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 GameDataStore Extension Points Matrix

## 1. Extension Points Matrix

| Method Name | Default Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`parseDataPS(data)`** | Stores data in `playSession` | `YES` | `MANDATORY` | Decompress short server keys or calculate extra derived totals. |
| **`mapDataPS(data)`** | Virtual hook | `YES` | None | Map shorthand backend property names via `mapNewKeys()`. |
| **`getWinLevel(win)`** | Divides by totalBet & compares thresholds | `YES` | Optional | Custom progressive win multiplier tiers. |
| **`getJackpotInfo()`** | Decodes semicolon-delimited strings | `YES` | Optional | Supporting custom multi-jackpot packet formats. |
| **`resetWinAmount()`** | Clears `winAmount` in normal game | `YES` | `RECOMMENDED` | Resetting custom feature bonus counters. |
