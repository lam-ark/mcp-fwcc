---
id: "cc_slot_module:IntroGameModule:properties_and_state:injected_services"
title: "IntroGameModule Injected Services"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "properties", "injected_services"]
---

# 💉 IntroGameModule Injected Services

---

## 1. Injected Dependencies

| Service | Type | Injection Token | Purpose |
| :--- | :--- | :--- | :--- |
| `gameConfig` | `GameConfig` | `@inject(GameConfig)` | Obtains master `GAME_ID` if not explicitly specified. |
