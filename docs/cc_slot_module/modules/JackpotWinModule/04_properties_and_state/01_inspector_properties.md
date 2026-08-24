---
id: "cc_slot_module:JackpotWinModule:properties_and_state:inspector_properties"
title: "JackpotWinModule Inspector Properties Specification"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ JackpotWinModule Inspector Properties Specification

---

## 1. Property Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `delayShowTime` | `number` | `2` | Initial unskippable lock duration in seconds. |
| `delayHideTime` | `number` | `1` | Hold time on final count before modal exit. |
| `animDuration` | `number` | `10` | Full duration of money count-up tween. |
| `winAmount` | `cc.Node` | `null` | Label node displaying jackpot score count. |
| `title` | `cc.Node` | `null` | Sprite or Spine banner displaying jackpot tier name. |
| `coinsEffect` | `cc.Node` | `null` | Node hosting particle systems. |
