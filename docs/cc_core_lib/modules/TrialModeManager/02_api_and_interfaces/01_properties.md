---
id: "cc_core_lib:TrialModeManager:api:properties"
title: "TrialModeManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["TrialModeManager", "trial_mode_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `TrialModeManager` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`_commandBridge`** | `any` | Operational field tracking state in `TrialModeManager`. |
| **`dataStore`** | `any` | Central reactive state store (`GameDataStore`) containing session data, bet matrices, and server responses. |
| **`currentOption`** | `number | null` | Operational field tracking state in `TrialModeManager`. |
| **`tutorialOptions`** | `number[]` | Collection of elements managed by `TrialModeManager`. |
| **`finishedAllOption`** | `boolean` | Boolean flag indicating whether finishedalloption is enabled or active in `TrialModeManager`. |
| **`trialModeData`** | `TrialModeData` | Operational field tracking state in `TrialModeManager`. |
| **`uiManager`** | `any` | Operational field tracking state in `TrialModeManager`. |
| **`betManager`** | `any` | Operational field tracking state in `TrialModeManager`. |
| **`config`** | `any` | Operational field tracking state in `TrialModeManager`. |
| **`_jackpotTrialManager`** | `JackpotTrialManager` | Operational field tracking state in `TrialModeManager`. |
| **`trialData`** | `TrialData[]` | Collection of elements managed by `TrialModeManager`. |
| **`totalOption`** | `number` | Numeric counter or index value in `TrialModeManager`. |
| **`trialJpl`** | `any` | Operational field tracking state in `TrialModeManager`. |
| **`jackpotReset`** | `boolean` | Boolean flag indicating whether jackpotreset is enabled or active in `TrialModeManager`. |
| **`actionOK`** | `any` | Operational field tracking state in `TrialModeManager`. |
| **`actionCancel`** | `any` | Operational field tracking state in `TrialModeManager`. |
| **`maxTrialSession`** | `number` | Numeric counter or index value in `TrialModeManager`. |
| **`trialSessionCount`** | `number` | Numeric counter or index value in `TrialModeManager`. |
| **`canResetWalletTrial`** | `boolean` | Boolean flag indicating whether resetwallettrial is enabled or active in `TrialModeManager`. |
| **`totalSpinTrial`** | `number` | Numeric counter or index value in `TrialModeManager`. |
| **`game`** | `Game)` | Operational field tracking state in `TrialModeManager`. |
| **`data`** | `TrialData[]): void` | Collection of elements managed by `TrialModeManager`. |
| **`data`** | `any): void` | Operational field tracking state in `TrialModeManager`. |
| **`cutsceneType`** | `number): void` | Operational field tracking state in `TrialModeManager`. |
| **`option`** | `number): void` | Operational field tracking state in `TrialModeManager`. |
| **`message`** | `string, hasAction?: boolean): void` | Operational field tracking state in `TrialModeManager`. |

---

## 2. State Mutation Guardrails

All state fields in `TrialModeManager` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
