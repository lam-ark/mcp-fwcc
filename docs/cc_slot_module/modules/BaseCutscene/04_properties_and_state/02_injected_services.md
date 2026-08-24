---
id: "cc_slot_module:BaseCutscene:properties_and_state:injected_services"
title: "BaseCutscene Injected Services"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "properties", "injected_services"]
---

# 💉 BaseCutscene Injected Services

---

## 1. Injected Services

| Service | Type | Injection Token | Purpose |
| :--- | :--- | :--- | :--- |
| `dataStore` | `GameDataStore` | `@inject(GameDataStore)` | Accesses current session bets and win records. |
| `moneyFormatter` | `eno.MoneyFormatter` | `@inject(eno.MoneyFormatter)` | Formats numeric currencies into localized strings. |
| `moneyTween` | `eno.MoneyTween` | `@inject(eno.MoneyTween)` | Drives number rolling count-up animations. |
| `gameSettings` | `SlotGameSettings` | `@inject(SlotGameSettings)` | Reads Turbo / Fast-to-Result flags. |
