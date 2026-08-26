---
id: "cc_core_lib:GameStateManager:api:properties"
title: "GameStateManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["GameStateManager", "game_state_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `GameStateManager` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`_state`** | `string` | Operational field tracking state in `GameStateManager`. |
| **`gameData`** | `any` | Operational field tracking state in `GameStateManager`. |
| **`serviceId`** | `string` | Operational field tracking state in `GameStateManager`. |
| **`lastSuccessCommandId`** | `string` | Operational field tracking state in `GameStateManager`. |
| **`gameCommandId`** | `string` | Operational field tracking state in `GameStateManager`. |
| **`_lastCommandIds`** | `string[]` | Collection of elements managed by `GameStateManager`. |
| **`gltCounting`** | `number` | Numeric counter or index value in `GameStateManager`. |
| **`useShortParam`** | `boolean` | Boolean flag indicating whether useshortparam is enabled or active in `GameStateManager`. |
| **`serverVersion`** | `string` | Operational field tracking state in `GameStateManager`. |
| **`trialPS`** | `any` | Operational field tracking state in `GameStateManager`. |
| **`_trialMode`** | `boolean` | Boolean flag indicating whether _trialmode is enabled or active in `GameStateManager`. |
| **`_spinTrialDataIndex`** | `number` | Numeric counter or index value in `GameStateManager`. |
| **`_spinTrialData`** | `any` | Operational field tracking state in `GameStateManager`. |
| **`_onWalletUpdate`** | `any` | Operational field tracking state in `GameStateManager`. |
| **`networkBridge`** | `any` | Operational field tracking state in `GameStateManager`. |
| **`token`** | `any` | Authenticated session JWT or bearer token used for backend REST API requests. |
| **`_spinTutorialIndex`** | `number` | Numeric counter or index value in `GameStateManager`. |
| **`_spinTutorialData`** | `any` | Operational field tracking state in `GameStateManager`. |
| **`requestingNewPS`** | `boolean` | Boolean flag indicating whether requestingnewps is enabled or active in `GameStateManager`. |
| **`lastTrialPS`** | `any` | Operational field tracking state in `GameStateManager`. |
| **`spinTimer`** | `null` | Operational field tracking state in `GameStateManager`. |
| **`timeoutLastedState`** | `any` | Operational field tracking state in `GameStateManager`. |
| **`_outGame`** | `any` | Operational field tracking state in `GameStateManager`. |
| **`latestExecuteCommandResult`** | `any` | Operational field tracking state in `GameStateManager`. |
| **`isForceGetLastedState`** | `any` | Boolean flag indicating whether forcegetlastedstate is enabled or active in `GameStateManager`. |
| **`currentPSData`** | `any` | Operational field tracking state in `GameStateManager`. |
| **`hasJoinGameAck`** | `boolean` | Boolean flag indicating whether joingameack is enabled or active in `GameStateManager`. |
| **`isLogOut`** | `boolean` | Boolean flag indicating whether logout is enabled or active in `GameStateManager`. |
| **`STATE_NORMAL`** | `string` | Operational field tracking state in `GameStateManager`. |
| **`STATE_PANIC`** | `string` | Operational field tracking state in `GameStateManager`. |
| **`STATE_DIE`** | `string` | Operational field tracking state in `GameStateManager`. |
| **`gameData`** | `any)` | Operational field tracking state in `GameStateManager`. |
| **`networkBridge`** | `any): void` | Operational field tracking state in `GameStateManager`. |
| **`tutorialData`** | `any): void` | Operational field tracking state in `GameStateManager`. |
| **`tutorialData`** | `any): any` | Operational field tracking state in `GameStateManager`. |
| **`betId`** | `string, betLines?: number): void` | Operational field tracking state in `GameStateManager`. |
| **`currentBetValue`** | `number): void` | Operational field tracking state in `GameStateManager`. |
| **`response`** | `any): void` | Operational field tracking state in `GameStateManager`. |
| **`option`** | `any): void` | Operational field tracking state in `GameStateManager`. |
| **`option`** | `any): void` | Operational field tracking state in `GameStateManager`. |
| **`openCell`** | `any): void` | Operational field tracking state in `GameStateManager`. |
| **`openCell`** | `any): void` | Operational field tracking state in `GameStateManager`. |
| **`openCell`** | `any, totalBet: number): void` | Operational field tracking state in `GameStateManager`. |
| **`metaData`** | `any): void` | Operational field tracking state in `GameStateManager`. |
| **`callbackJP`** | `any): void` | Operational field tracking state in `GameStateManager`. |
| **`eventData`** | `any): boolean` | Operational field tracking state in `GameStateManager`. |
| **`eventData`** | `any): void` | Operational field tracking state in `GameStateManager`. |
| **`reason`** | `any, sendGameMessage?: boolean): void` | Operational field tracking state in `GameStateManager`. |
| **`event`** | `any): void` | Operational field tracking state in `GameStateManager`. |

---

## 2. State Mutation Guardrails

All state fields in `GameStateManager` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
