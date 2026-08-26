---
id: "cc_core_lib:BetHistoryDetailData:api:properties"
title: "BetHistoryDetailData Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BetHistoryDetailData", "bet_history_detail_data", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BetHistoryDetailData` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`sessionId`** | `string` | Operational field tracking state in `BetHistoryDetailData`. |
| **`gameModeData`** | `any[]` | Contextual game mode configuration and payout tier metadata for the current replay. |
| **`currentData`** | `{ [key: string]: any` | Operational field tracking state in `BetHistoryDetailData`. |

---

## 2. State Mutation Lifecycle

All state fields in `BetHistoryDetailData` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
