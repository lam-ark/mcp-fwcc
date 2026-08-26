---
id: "cc_core_lib:Game:api:properties"
title: "Game Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["Game", "game", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `Game` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`_timeStamp`** | `string` | Operational field tracking state in `Game`. |
| **`_gameConfig`** | `any` | Operational field tracking state in `Game`. |
| **`_gameId`** | `number` | Numeric counter or index value in `Game`. |
| **`_dataModel`** | `DataModel` | Operational field tracking state in `Game`. |
| **`_eventManager`** | `EventManager` | Operational field tracking state in `Game`. |
| **`_dataStore`** | `CoreDataStore` | Operational field tracking state in `Game`. |
| **`_commandBridge`** | `CommandBridge` | Operational field tracking state in `Game`. |
| **`_gameModeManager`** | `GameModeManager` | Operational field tracking state in `Game`. |
| **`_networkBridge`** | `NetworkBridge` | Operational field tracking state in `Game`. |
| **`_gameStateManager`** | `GameStateWrap` | Operational field tracking state in `Game`. |
| **`_betManager`** | `BetManager` | Operational field tracking state in `Game`. |
| **`_promotionManager`** | `PromotionManager` | Operational field tracking state in `Game`. |
| **`_walletManager`** | `WalletManager` | Operational field tracking state in `Game`. |
| **`_jackpotManager`** | `JackpotManager` | Operational field tracking state in `Game`. |
| **`_dialogManager`** | `DialogManager` | Operational field tracking state in `Game`. |
| **`_waitingSceneManager`** | `WaitingSceneManager` | Operational field tracking state in `Game`. |
| **`_turboButtonManager`** | `TurboButtonManager` | Operational field tracking state in `Game`. |
| **`_coreUIManager`** | `CoreUIManager` | Operational field tracking state in `Game`. |
| **`_trialModeManager`** | `TrialModeManager` | Operational field tracking state in `Game`. |
| **`_gameInfoManager`** | `GameInfoManager` | Operational field tracking state in `Game`. |
| **`_gameSettingManager`** | `GameSettingManager` | Operational field tracking state in `Game`. |
| **`_exitButtonManager`** | `ExitButtonManager` | Operational field tracking state in `Game`. |
| **`_jackpotHistoryManager`** | `JackpotHistoryManager` | Operational field tracking state in `Game`. |
| **`_betHistoryManager`** | `BetHistoryManager` | Operational field tracking state in `Game`. |
| **`showMessageForceClose`** | `boolean` | Boolean flag indicating whether showmessageforceclose is enabled or active in `Game`. |
| **`joinGameSuccess`** | `boolean` | Boolean flag indicating whether joingamesuccess is enabled or active in `Game`. |
| **`logOutUser`** | `boolean` | Boolean flag indicating whether logoutuser is enabled or active in `Game`. |
| **`networkWaiting`** | `boolean` | Boolean flag indicating whether networkwaiting is enabled or active in `Game`. |
| **`_hidePromotionPopupCB`** | `any` | Operational field tracking state in `Game`. |
| **`_isConsoleTest`** | `boolean` | Boolean flag indicating whether _isconsoletest is enabled or active in `Game`. |
| **`_backToRealModeCB`** | `any` | Operational field tracking state in `Game`. |
| **`_scheduler`** | `any` | Operational field tracking state in `Game`. |
| **`_moneyFormatter`** | `any` | Operational field tracking state in `Game`. |
| **`loadConfigAsync`** | `any` | Operational field tracking state in `Game`. |
| **`gameCommonUtils`** | `any` | Collection of elements managed by `Game`. |
| **`config`** | `any)` | Operational field tracking state in `Game`. |
| **`config`** | `any): void` | Operational field tracking state in `Game`. |
| **`network`** | `any): void` | Operational field tracking state in `Game`. |
| **`logger`** | `{ log: any` | Operational field tracking state in `Game`. |
| **`warn`** | `any` | Operational field tracking state in `Game`. |
| **`error`** | `any` | Operational field tracking state in `Game`. |

---

## 2. State Mutation Lifecycle

All state fields in `Game` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
