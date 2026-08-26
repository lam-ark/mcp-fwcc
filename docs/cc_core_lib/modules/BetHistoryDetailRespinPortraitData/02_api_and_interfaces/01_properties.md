---
id: "cc_core_lib:BetHistoryDetailRespinPortraitData:api:properties"
title: "BetHistoryDetailRespinPortraitData Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BetHistoryDetailRespinPortraitData", "bet_history_detail_respin_portrait_data", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BetHistoryDetailRespinPortraitData` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`sessionId`** | `string` | Operational field tracking state in `BetHistoryDetailRespinPortraitData`. |
| **`gameModeData`** | `any[]` | Contextual game mode configuration and payout tier metadata for the current replay. |
| **`currentData`** | `{ [key: string]: any` | Operational field tracking state in `BetHistoryDetailRespinPortraitData`. |

---

## 2. State Mutation Lifecycle

All state fields in `BetHistoryDetailRespinPortraitData` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
