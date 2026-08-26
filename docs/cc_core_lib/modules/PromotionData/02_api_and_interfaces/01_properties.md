---
id: "cc_core_lib:PromotionData:api:properties"
title: "PromotionData Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["PromotionData", "promotion_data", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `PromotionData` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`promotionBetId`** | `string` | Operational field tracking state in `PromotionData`. |
| **`promotionCode`** | `string` | Operational field tracking state in `PromotionData`. |
| **`promotionRemain`** | `number` | Numeric counter or index value in `PromotionData`. |
| **`lastPromotionRemain`** | `number` | Numeric counter or index value in `PromotionData`. |
| **`promotionTotal`** | `number` | Numeric counter or index value in `PromotionData`. |
| **`errorCode`** | `string` | Operational field tracking state in `PromotionData`. |
| **`isActive`** | `boolean` | Boolean flag indicating whether active is enabled or active in `PromotionData`. |

---

## 2. State Mutation Guardrails

All state fields in `PromotionData` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
