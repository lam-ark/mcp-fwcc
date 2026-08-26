---
id: "cc_core_lib:LightningGame:api:properties"
title: "LightningGame Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["LightningGame", "lightning_game", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `LightningGame` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`spinButton`** | `SpinButtonLightningManager` | Operational field tracking state in `LightningGame`. |
| **`game`** | `Game, mode: number)` | Operational field tracking state in `LightningGame`. |

---

## 2. State Mutation Guardrails

All state fields in `LightningGame` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
