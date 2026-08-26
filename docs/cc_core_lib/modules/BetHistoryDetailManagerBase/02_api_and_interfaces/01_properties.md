---
id: "cc_core_lib:BetHistoryDetailManagerBase:api:properties"
title: "BetHistoryDetailManagerBase Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BetHistoryDetailManagerBase", "bet_history_detail_manager_base", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BetHistoryDetailManagerBase` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`historyManager`** | `any` | Reference to the parent `BetHistoryManager` orchestrating modal dialogs, pagination bars, and view switching. |
| **`modelData`** | `any` | Parsed round snapshot payload containing `{ spinId, bet, win, matrix, steps, freeSpins, multipliers }`. |
| **`summaryName`** | `string` | Layout identifier or node name for the summary recap view displaying total round statistics. |
| **`normalName`** | `string` | Layout identifier or node name for the Base/Normal Game matrix spin replay view. |
| **`freeName`** | `string` | Layout identifier or node name for the Free Spins feature series replay view. |
| **`topUpName`** | `string` | Layout identifier or node name for the Top-Up / Respin feature replay view. |
| **`bonusName`** | `string` | Layout identifier or node name for the Bonus Mini-Game pick-and-click replay view. |
| **`freeOptionName`** | `string` | Layout identifier or node name for the Free Game Volatility Option selection replay view. |
| **`gameId`** | `string` | Unique game identifier string (e.g. `'9666'`, `'9000'`, `'cc1-red-cliff'`) used for scoped storage and API endpoints. |
| **`token`** | `string` | Authenticated session JWT or bearer token used for backend REST API requests. |
| **`userId`** | `string` | Unique player account identifier. |
| **`url`** | `string` | Backend API gateway base URL for fetching round history and detailed matrix snapshots. |
| **`totalPage`** | `number` | Total number of spin steps/sub-rounds in the selected bet history record. |
| **`itemPerPage`** | `number` | Maximum number of history summary rows or step items displayed per page (default: `10`). |
| **`currentIndex`** | `number` | Zero-based index of the currently displayed spin step or history page. |
| **`isEnableNext`** | `boolean` | Reactive flag indicating whether the 'Next' step navigation button is clickable. |
| **`isEnablePrev`** | `boolean` | Reactive flag indicating whether the 'Previous' step navigation button is clickable. |
| **`gameModeData`** | `any` | Contextual game mode configuration and payout tier metadata for the current replay. |
| **`isShowSummaryView`** | `boolean` | Boolean state flag determining whether the high-level summary overview is active vs step-by-step matrix replay. |
| **`currentData`** | `any` | Operational field tracking state in `BetHistoryDetailManagerBase`. |
| **`tokenType`** | `string` | Operational field tracking state in `BetHistoryDetailManagerBase`. |
| **`sessionId`** | `string` | Operational field tracking state in `BetHistoryDetailManagerBase`. |
| **`betHistoryDetailId`** | `string` | Operational field tracking state in `BetHistoryDetailManagerBase`. |
| **`game`** | `Game, historyManager: any)` | Operational field tracking state in `BetHistoryDetailManagerBase`. |
| **`sessionData`** | `any): void` | Operational field tracking state in `BetHistoryDetailManagerBase`. |
| **`index`** | `number): void` | Operational field tracking state in `BetHistoryDetailManagerBase`. |
| **`betHistoryDetailId`** | `string, res: any): void` | Operational field tracking state in `BetHistoryDetailManagerBase`. |
| **`betHistoryDetailId`** | `string, pageIndex: number, res: any): void` | Operational field tracking state in `BetHistoryDetailManagerBase`. |
| **`data`** | `any): any` | Operational field tracking state in `BetHistoryDetailManagerBase`. |
| **`data`** | `any): any` | Operational field tracking state in `BetHistoryDetailManagerBase`. |
| **`gameModeData`** | `any, scroll: any): void` | Contextual game mode configuration and payout tier metadata for the current replay. |
| **`str`** | `string): string` | Operational field tracking state in `BetHistoryDetailManagerBase`. |

---

## 2. State Mutation Lifecycle

All state fields in `BetHistoryDetailManagerBase` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
