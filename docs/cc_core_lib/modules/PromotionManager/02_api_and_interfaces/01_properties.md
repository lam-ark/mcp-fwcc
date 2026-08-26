---
id: "cc_core_lib:PromotionManager:api:properties"
title: "PromotionManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["PromotionManager", "promotion_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `PromotionManager` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`config`** | `any` | Operational field tracking state in `PromotionManager`. |
| **`dataStore`** | `CoreDataStore` | Central reactive state store (`GameDataStore`) containing session data, bet matrices, and server responses. |
| **`promotionData`** | `PromotionData` | Operational field tracking state in `PromotionManager`. |
| **`game`** | `Game)` | Operational field tracking state in `PromotionManager`. |
| **`promotionString`** | `string): void` | Operational field tracking state in `PromotionManager`. |
| **`data`** | `PromotionDataObject): void` | Operational field tracking state in `PromotionManager`. |
| **`errorCode`** | `string): void` | Operational field tracking state in `PromotionManager`. |

---

## 2. State Mutation Guardrails

All state fields in `PromotionManager` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
