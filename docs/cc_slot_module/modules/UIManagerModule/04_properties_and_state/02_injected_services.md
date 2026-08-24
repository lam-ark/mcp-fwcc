---
id: "cc_slot_module:UIManagerModule:properties_and_state:injected_services"
title: "UIManagerModule Injected Services"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "properties", "injected_services"]
---

# 💉 UIManagerModule Injected Services

---

## 1. Injected Dependencies

| Service | Type | Injection Scope | Purpose |
| :--- | :--- | :--- | :--- |
| `dataStore` | `GameDataStore` | `@inject` | Reactive game data store. |
| `gameSettings` | `SlotGameSettings` | `@inject` | Global game settings flags (`isTrialMode`, `isAutoSpin`). |
