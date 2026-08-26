---
id: "cc_core_lib:JackpotHistoryManager:api:properties"
title: "JackpotHistoryManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["JackpotHistoryManager", "jackpot_history_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `JackpotHistoryManager` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`modelData`** | `JackpotHistoryData` | Parsed round snapshot payload containing `{ spinId, bet, win, matrix, steps, freeSpins, multipliers }`. |
| **`betIds`** | `string` | Collection of elements managed by `JackpotHistoryManager`. |
| **`gameId`** | `string` | Unique game identifier string (e.g. `'9666'`, `'9000'`, `'cc1-red-cliff'`) used for scoped storage and API endpoints. |
| **`jpPrefix`** | `string` | Operational field tracking state in `JackpotHistoryManager`. |
| **`url`** | `string` | Backend API gateway base URL for fetching round history and detailed matrix snapshots. |
| **`totalPage`** | `number` | Total number of spin steps/sub-rounds in the selected bet history record. |
| **`currentPage`** | `number` | Numeric counter or index value in `JackpotHistoryManager`. |
| **`itemPerPage`** | `number` | Maximum number of history summary rows or step items displayed per page (default: `10`). |
| **`jpList`** | `string` | Collection of elements managed by `JackpotHistoryManager`. |
| **`customParams`** | `any` | Collection of elements managed by `JackpotHistoryManager`. |
| **`game`** | `Game)` | Operational field tracking state in `JackpotHistoryManager`. |
| **`data`** | `any): void` | Operational field tracking state in `JackpotHistoryManager`. |
| **`index`** | `number): void` | Operational field tracking state in `JackpotHistoryManager`. |
| **`res`** | `any): void` | Collection of elements managed by `JackpotHistoryManager`. |
| **`page`** | `number, quantity: number, callback: Function, callbackErr: Function): void` | Operational field tracking state in `JackpotHistoryManager`. |
| **`requestParams`** | `any, callback: Function, callbackErr: Function): void` | Collection of elements managed by `JackpotHistoryManager`. |

---

## 2. State Mutation Guardrails

All state fields in `JackpotHistoryManager` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
