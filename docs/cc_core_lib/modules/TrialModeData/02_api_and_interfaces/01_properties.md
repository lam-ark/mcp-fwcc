---
id: "cc_core_lib:TrialModeData:api:properties"
title: "TrialModeData Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["TrialModeData", "trial_mode_data", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `TrialModeData` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`tutorialOptions`** | `any[]` | Collection of elements managed by `TrialModeData`. |
| **`isPopupDisplay`** | `boolean` | Boolean flag indicating whether popupdisplay is enabled or active in `TrialModeData`. |
| **`isButtonTrialActive`** | `boolean` | Boolean flag indicating whether buttontrialactive is enabled or active in `TrialModeData`. |
| **`isButtonBackToRealActive`** | `boolean` | Boolean flag indicating whether buttonbacktorealactive is enabled or active in `TrialModeData`. |
| **`message`** | `string` | Operational field tracking state in `TrialModeData`. |
| **`tutorialPopupAction`** | `boolean` | Boolean flag indicating whether tutorialpopupaction is enabled or active in `TrialModeData`. |
| **`tutorialPopupActive`** | `boolean` | Boolean flag indicating whether tutorialpopupactive is enabled or active in `TrialModeData`. |
| **`tutorialPopupMessage`** | `string` | Operational field tracking state in `TrialModeData`. |
| **`currentState`** | `number` | Numeric counter or index value in `TrialModeData`. |
| **`isDisplay`** | `boolean): void` | Boolean flag indicating whether display is enabled or active in `TrialModeData`. |
| **`options`** | `any[]): void` | Collection of elements managed by `TrialModeData`. |
| **`isActive`** | `boolean): void` | Boolean flag indicating whether active is enabled or active in `TrialModeData`. |
| **`isActive`** | `boolean): void` | Boolean flag indicating whether active is enabled or active in `TrialModeData`. |
| **`active`** | `boolean): void` | Operational field tracking state in `TrialModeData`. |
| **`hasAction`** | `boolean): void` | Boolean flag indicating whether action is enabled or active in `TrialModeData`. |
| **`message`** | `string): void` | Operational field tracking state in `TrialModeData`. |
| **`state`** | `number): void` | Operational field tracking state in `TrialModeData`. |

---

## 2. State Mutation Guardrails

All state fields in `TrialModeData` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
