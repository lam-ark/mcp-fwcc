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

## 2. State Mutation Lifecycle

All state fields in `PromotionData` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
