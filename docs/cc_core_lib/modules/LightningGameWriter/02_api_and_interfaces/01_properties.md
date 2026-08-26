---
id: "cc_core_lib:LightningGameWriter:api:properties"
title: "LightningGameWriter Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["LightningGameWriter", "lightning_game_writer", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `LightningGameWriter` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`game`** | `Game)` | Operational field tracking state in `LightningGameWriter`. |

---

## 2. State Mutation Guardrails

All state fields in `LightningGameWriter` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
