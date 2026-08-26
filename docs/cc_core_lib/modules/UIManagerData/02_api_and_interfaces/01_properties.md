---
id: "cc_core_lib:UIManagerData:api:properties"
title: "UIManagerData Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["UIManagerData", "uimanager_data", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `UIManagerData` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`bigWinConfig`** | `any` | Operational field tracking state in `UIManagerData`. |
| **`isTrialModeActive`** | `boolean` | Boolean flag indicating whether trialmodeactive is enabled or active in `UIManagerData`. |
| **`isTurboActive`** | `boolean` | Boolean flag indicating whether turboactive is enabled or active in `UIManagerData`. |
| **`isInfoOpen`** | `boolean` | Boolean flag indicating whether infoopen is enabled or active in `UIManagerData`. |
| **`isSettingsOpen`** | `boolean` | Boolean flag indicating whether settingsopen is enabled or active in `UIManagerData`. |
| **`isBetSelectionPanelOpen`** | `boolean` | Boolean flag indicating whether betselectionpanelopen is enabled or active in `UIManagerData`. |
| **`isMenuPanelOpen`** | `boolean` | Boolean flag indicating whether menupanelopen is enabled or active in `UIManagerData`. |
| **`isExitButtonActive`** | `boolean` | Boolean flag indicating whether exitbuttonactive is enabled or active in `UIManagerData`. |
| **`isJackpotTrialActive`** | `boolean` | Boolean flag indicating whether jackpottrialactive is enabled or active in `UIManagerData`. |
| **`isJackpotActive`** | `boolean` | Boolean flag indicating whether jackpotactive is enabled or active in `UIManagerData`. |
| **`isWalletActive`** | `boolean` | Boolean flag indicating whether walletactive is enabled or active in `UIManagerData`. |
| **`isWalletTrialActive`** | `boolean` | Boolean flag indicating whether wallettrialactive is enabled or active in `UIManagerData`. |
| **`isAutoSpinPanelOpen`** | `boolean` | Boolean flag indicating whether autospinpanelopen is enabled or active in `UIManagerData`. |
| **`isPayTablePanelOpen`** | `boolean` | Boolean flag indicating whether paytablepanelopen is enabled or active in `UIManagerData`. |
| **`isBuyFeaturePanelOpen`** | `boolean` | Boolean flag indicating whether buyfeaturepanelopen is enabled or active in `UIManagerData`. |
| **`isUserInteractionEnabled`** | `boolean` | Boolean flag indicating whether userinteractionenabled is enabled or active in `UIManagerData`. |
| **`isDisplayPopup`** | `boolean` | Boolean flag indicating whether displaypopup is enabled or active in `UIManagerData`. |
| **`isDialogMessageOpen`** | `boolean` | Boolean flag indicating whether dialogmessageopen is enabled or active in `UIManagerData`. |
| **`isTrialDialogOpen`** | `boolean` | Boolean flag indicating whether trialdialogopen is enabled or active in `UIManagerData`. |
| **`canShowTurboIntro`** | `boolean` | Boolean flag indicating whether showturbointro is enabled or active in `UIManagerData`. |
| **`isSwitchingMode`** | `boolean` | Boolean flag indicating whether switchingmode is enabled or active in `UIManagerData`. |
| **`config`** | `any): void` | Operational field tracking state in `UIManagerData`. |
| **`isTrial`** | `boolean): void` | Boolean flag indicating whether trial is enabled or active in `UIManagerData`. |
| **`isTurbo`** | `boolean): void` | Boolean flag indicating whether turbo is enabled or active in `UIManagerData`. |
| **`isOpen`** | `boolean): void` | Boolean flag indicating whether open is enabled or active in `UIManagerData`. |
| **`isOpen`** | `boolean): void` | Boolean flag indicating whether open is enabled or active in `UIManagerData`. |
| **`isOpen`** | `boolean): void` | Boolean flag indicating whether open is enabled or active in `UIManagerData`. |
| **`isOpen`** | `boolean): void` | Boolean flag indicating whether open is enabled or active in `UIManagerData`. |
| **`isOpen`** | `boolean): void` | Boolean flag indicating whether open is enabled or active in `UIManagerData`. |
| **`isActive`** | `boolean): void` | Boolean flag indicating whether active is enabled or active in `UIManagerData`. |
| **`isActive`** | `boolean): void` | Boolean flag indicating whether active is enabled or active in `UIManagerData`. |
| **`isActive`** | `boolean): void` | Boolean flag indicating whether active is enabled or active in `UIManagerData`. |
| **`isActive`** | `boolean): void` | Boolean flag indicating whether active is enabled or active in `UIManagerData`. |
| **`isActive`** | `boolean): void` | Boolean flag indicating whether active is enabled or active in `UIManagerData`. |
| **`enabled`** | `boolean): void` | Operational field tracking state in `UIManagerData`. |
| **`isOpen`** | `boolean): void` | Boolean flag indicating whether open is enabled or active in `UIManagerData`. |
| **`isOpen`** | `boolean): void` | Boolean flag indicating whether open is enabled or active in `UIManagerData`. |
| **`isDisplay`** | `boolean): void` | Boolean flag indicating whether display is enabled or active in `UIManagerData`. |
| **`canShow`** | `boolean): void` | Boolean flag indicating whether show is enabled or active in `UIManagerData`. |
| **`isSwitching`** | `boolean): void` | Boolean flag indicating whether switching is enabled or active in `UIManagerData`. |

---

## 2. State Mutation Guardrails

All state fields in `UIManagerData` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
