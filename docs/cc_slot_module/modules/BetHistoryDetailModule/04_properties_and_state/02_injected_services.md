---
id: "cc_slot_module:BetHistoryDetailModule:properties:injected_services"
title: "BetHistoryDetailModule Injected Services"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "properties", "injected_services", "ioc"]
---

# 💉 BetHistoryDetailModule Injected Services

---

## 1. Injected Services Table

| Service Token | Type | Purpose |
| :--- | :--- | :--- |
| `moneyFormatter` | `MoneyFormatter` | Formats raw numeric wins into formatted currency strings (e.g. `$1,250.00`). |
| `gameLogic` | `any` | Event dispatcher and data model provider. |
| `soundPlayer` | `SlotSoundPlayerModule` | Audio SFX player. |
| `observer` | `Observer` | Reactive observer binding. |
| `eventManager` | `GameEventManager` | Global UI event bus. |
