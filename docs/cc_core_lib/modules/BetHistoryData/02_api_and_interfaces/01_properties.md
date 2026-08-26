---
id: "cc_core_lib:BetHistoryData:api:properties"
title: "BetHistoryData Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BetHistoryData", "bet_history_data", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BetHistoryData` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`recordData`** | `any` | Operational field tracking state in `BetHistoryData`. |
| **`detailData`** | `any` | Operational field tracking state in `BetHistoryData`. |
| **`isShowing`** | `boolean` | Boolean flag indicating whether showing is enabled or active in `BetHistoryData`. |
| **`isShowingRecord`** | `boolean` | Boolean flag indicating whether showingrecord is enabled or active in `BetHistoryData`. |
| **`isShowingDetail`** | `boolean` | Boolean flag indicating whether showingdetail is enabled or active in `BetHistoryData`. |
| **`isEnableLoading`** | `boolean` | Boolean flag indicating whether enableloading is enabled or active in `BetHistoryData`. |
| **`isEnableMessage`** | `boolean` | Boolean flag indicating whether enablemessage is enabled or active in `BetHistoryData`. |
| **`isEnablePageIndex`** | `boolean` | Boolean flag indicating whether enablepageindex is enabled or active in `BetHistoryData`. |
| **`isEnableNext`** | `boolean` | Reactive flag indicating whether the 'Next' step navigation button is clickable. |
| **`isEnablePrev`** | `boolean` | Reactive flag indicating whether the 'Previous' step navigation button is clickable. |
| **`isFromHistoryScene`** | `boolean` | Boolean flag indicating whether fromhistoryscene is enabled or active in `BetHistoryData`. |
| **`pageIndex`** | `number` | Numeric counter or index value in `BetHistoryData`. |
| **`messageText`** | `string` | Operational field tracking state in `BetHistoryData`. |
| **`totalPage`** | `number` | Total number of spin steps/sub-rounds in the selected bet history record. |

---

## 2. State Mutation Lifecycle

All state fields in `BetHistoryData` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
