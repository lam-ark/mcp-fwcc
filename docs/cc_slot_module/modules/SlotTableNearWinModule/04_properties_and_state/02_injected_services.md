---
id: "cc_slot_module:SlotTableNearWinModule:properties:injected_services"
title: "SlotTableNearWinModule Injected Services"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "properties", "injected_services", "ioc"]
---

# 💉 SlotTableNearWinModule Injected Services

---

## 1. Injected Tokens Matrix

`SlotTableNearWinModule` inherits `@inject` services from `SlotBaseModule`:

| Token / Service | Type | When Provided | Purpose in Module |
| :--- | :--- | :--- | :--- |
| `soundPlayer` | `SlotSoundPlayerModule` | Bootstrap (`GameInit`) | Plays looping tension SFX (`soundNearWinId`) during reel anticipation. |
| `gameConfig` | `GameConfig` | Bootstrap (`GameInit`) | Fallback access to game configuration. |
| `eventManager` | `GameEventManager` | Bootstrap (`GameInit`) | Access to global event notifications. |
| `gameDataStore`| `GameDataStore` | Bootstrap (`GameInit`) | Reactive store state. |
