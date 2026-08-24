---
id: "cc_slot_module:SlotTableNearWinModule:properties:inspector_properties"
title: "SlotTableNearWinModule Inspector Properties"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ SlotTableNearWinModule Inspector Properties

---

## 1. Property Definitions

| Property | Type | Default | When Set | Where Read | Impact If Desynced |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `nearWinEffect` | `cc.Node` | `null` | Cocos Editor | `_getAnimNearWin`, `_playNearWinEffect` | Null reference crash when anticipation activates. |
| `useSpine` | `boolean` | `true` | Cocos Editor | `_getAnimNearWin`, `_playNearWinAnim` | Incorrect component lookup (`sp.Skeleton` vs `cc.Animation`). |
| `animationName` | `string` | `"animation"` | Cocos Editor | `_playNearWinAnim` | Spine animation fails to play on loop. |
| `startAtScatterCount`| `number`| `2` | Cocos Editor | `_isNearWinScatter` | Anticipation triggers too early or late. |
| `stopAtScatterCount` | `number` | `5` | Cocos Editor | `_isNearWinScatter` | Anticipation fails to stop when full line is formed. |
| `startAtBonusCount` | `number` | `2` | Cocos Editor | `_isNearWinBonus` | Near-win logic mismatch for Bonus features. |
| `stopAtBonusCount` | `number` | `5` | Cocos Editor | `_isNearWinBonus` | Boundary threshold mismatch for Bonus features. |
| `startAtJackpotCount`| `number`| `4` | Cocos Editor | `_isNearWinJp` | Near-win logic mismatch for Jackpots. |
| `stopAtJackpotCount` | `number`| `5` | Cocos Editor | `_isNearWinJp` | Boundary threshold mismatch for Jackpots. |
| `isSkipNearWinTurbo` | `boolean` | `true` | Cocos Editor | `setupNearWin`, `_isNearWinBonus` | Anticipation plays during Turbo spins, slowing gameplay. |
| `soundNearWinId` | `string` | `"NEAR_WIN"` | Cocos Editor | `_playSoundNearWin`, `_stopSoundNearWin` | Audio fails to play or sound key not registered. |
