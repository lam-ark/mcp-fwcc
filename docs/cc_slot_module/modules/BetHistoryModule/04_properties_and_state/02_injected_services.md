---
id: "cc_slot_module:BetHistoryModule:properties:injected_services"
title: "BetHistoryModule Injected Services"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "properties", "injected_services", "ioc"]
---

# 💉 BetHistoryModule Injected Services

---

## 1. Injected Tokens Table

| Service Token | Type | Source Provider | Purpose in Module |
| :--- | :--- | :--- | :--- |
| `gameLogic` | `any` | Inherited from `SlotBaseModule` | Access to `getDataModel().BetHistoryData`, event emission, and localization. |
| `soundPlayer` | `SlotSoundPlayerModule` | Inherited from `SlotBaseModule` | Audio SFX trigger on pagination and button clicks. |
| `observer` | `Observer` | Inherited from `SlotBaseModule` | Watches state fields on `modelData` and binds update handlers. |
| `eventManager` | `GameEventManager` | Inherited from `SlotBaseModule` | Subscribes to global UI events such as `OPEN_BET_DETAIL`. |
