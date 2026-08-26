---
id: "cc_core_lib:JackpotHistoryData:api:properties"
title: "JackpotHistoryData Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["JackpotHistoryData", "jackpot_history_data", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `JackpotHistoryData` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`recordData`** | `any` | Operational field tracking state in `JackpotHistoryData`. |
| **`isShowing`** | `boolean` | Boolean flag indicating whether showing is enabled or active in `JackpotHistoryData`. |
| **`isEnableLoading`** | `boolean` | Boolean flag indicating whether enableloading is enabled or active in `JackpotHistoryData`. |
| **`isEnableMessage`** | `boolean` | Boolean flag indicating whether enablemessage is enabled or active in `JackpotHistoryData`. |
| **`isEnablePageIndex`** | `boolean` | Boolean flag indicating whether enablepageindex is enabled or active in `JackpotHistoryData`. |
| **`isEnableNext`** | `boolean` | Reactive flag indicating whether the 'Next' step navigation button is clickable. |
| **`isEnablePrev`** | `boolean` | Reactive flag indicating whether the 'Previous' step navigation button is clickable. |
| **`pageIndex`** | `number` | Numeric counter or index value in `JackpotHistoryData`. |
| **`messageText`** | `string` | Operational field tracking state in `JackpotHistoryData`. |
| **`totalPage`** | `number` | Total number of spin steps/sub-rounds in the selected bet history record. |

---

## 2. State Mutation Guardrails

All state fields in `JackpotHistoryData` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
