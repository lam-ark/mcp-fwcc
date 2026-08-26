---
id: "cc_slot_mechanics:BuyFeatureModule:api:properties"
title: "BuyFeatureModule Inspector Properties & State Schema"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "properties", "schema"]
---

# 📋 `BuyFeatureModule` Properties & State Schema

---

## 1. Inspector Properties

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **`lbContent`** | `cc.Label` | Inspector property in `BuyFeatureModule` managing runtime lbContent. |
| **`lbBetValue`** | `cc.Label` | Inspector property in `BuyFeatureModule` managing runtime lbBetValue. |
| **`lbTotalBet`** | `cc.Label` | Inspector property in `BuyFeatureModule` managing runtime lbTotalBet. |
| **`btnIncreaseBet`** | `cc.Button` | Inspector property in `BuyFeatureModule` managing runtime btnIncreaseBet. |
| **`btnDecreaseBet`** | `cc.Button` | Inspector property in `BuyFeatureModule` managing runtime btnDecreaseBet. |
| **`btnBuyFeature`** | `cc.Button` | Inspector property in `BuyFeatureModule` managing runtime btnBuyFeature. |

---

## 2. State Invariants

- Properties are wired via Cocos Creator Inspector prefabs.
- Must not be mutated directly while the table state is in active spin or cascade mode.
