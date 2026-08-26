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

## 2. State Mutation Guardrails

All state fields in `BetHistoryDetailRespinPortraitData` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
