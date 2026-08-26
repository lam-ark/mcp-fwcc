---
id: "cc_slot_mechanics:InstantCashModule:api:properties"
title: "InstantCashModule Inspector Properties & State Schema"
category: "cc_slot_mechanics"
tags: ["InstantCashModule", "instant_cash_module", "cc_slot_mechanics", "properties", "schema"]
---

# 📋 `InstantCashModule` Properties & State Schema

---

## 1. Inspector Properties

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **`lbInstantCash`** | `cc.Label` | Inspector property in `InstantCashModule` managing runtime lbInstantCash. |

---

## 2. State Invariants

- Properties are wired via Cocos Creator Inspector prefabs.
- Must not be mutated directly while the table state is in active spin or cascade mode.
