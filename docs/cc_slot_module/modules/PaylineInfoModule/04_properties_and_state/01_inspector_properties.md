---
id: "cc_slot_module:PaylineInfoModule:properties_and_state:inspector_properties"
title: "PaylineInfoModule Inspector Properties Specification"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ PaylineInfoModule Inspector Properties Specification

---

## 1. Property Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `useAcrossAllGameModes` | `boolean` | `false` | If true, works across all game modes; otherwise restricted to `gameMode`. |
| `gameMode` | `GAME_MODE_ENUM` | `NORMAL_GAME` | Specific target game mode when `useAcrossAllGameModes = false`. |
| `lbLeft` | `cc.Label` | `null` | Left label displaying Line ID / Hit Count text. |
| `lbRight` | `cc.Label` | `null` | Right label displaying formatted payout amount. |
| `sprSymbol` | `cc.Sprite` | `null` | Thumbnail sprite displaying winning symbol icon. |
| `smallSymbolPrefix` | `string` | `""` | Optional string prefix for thumbnail sprite lookup keys. |
| `smallSymbolFrames` | `cc.SpriteFrame[]` | `[]` | Array of small symbol sprite frames. |
