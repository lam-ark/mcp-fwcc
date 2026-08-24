---
id: "cc_slot_module:SlotTableSoundEffectModule:properties:inspector_properties"
title: "SlotTableSoundEffectModule Inspector Properties"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ SlotTableSoundEffectModule Inspector Properties

---

## 1. Property Schema

| Property | Type | Default | When Set | Where Read | Impact If Desynced |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `sfxReelStopId` | `string` | `"REEL_STOP"` | Cocos Editor | `playSfxReelStop` | Missing click sound on reel stop. |
| `sfxScatterIds` | `string[]` | `["SCATTER_1", ...]` | Cocos Editor | `playSfxSpecialSymbol` | Missing sound on Scatter landing or array bounds error. |
| `sfxBonusIds` | `string[]` | `["BONUS_1", ...]` | Cocos Editor | `playSfxSpecialSymbol` | Missing sound on Bonus landing. |
| `sfxJackpotIds` | `string[]` | `["JACKPOT_1", ...]` | Cocos Editor | `playSfxSpecialSymbol` | Missing sound on Jackpot landing. |
