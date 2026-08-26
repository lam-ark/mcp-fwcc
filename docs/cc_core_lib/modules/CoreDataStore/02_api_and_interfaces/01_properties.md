---
id: "cc_core_lib:CoreDataStore:api:properties"
title: "CoreDataStore Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["CoreDataStore", "core_data_store", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `CoreDataStore` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`_isTrialMode`** | `boolean` | Boolean flag indicating whether _istrialmode is enabled or active in `CoreDataStore`. |
| **`autoSpin`** | `boolean` | Boolean flag indicating whether autospin is enabled or active in `CoreDataStore`. |
| **`_hasPromotion`** | `boolean` | Boolean flag indicating whether _haspromotion is enabled or active in `CoreDataStore`. |
| **`currency`** | `string` | Operational field tracking state in `CoreDataStore`. |
| **`serverVersion`** | `string` | Operational field tracking state in `CoreDataStore`. |
| **`bigWinConfig`** | `any` | Operational field tracking state in `CoreDataStore`. |
| **`playSession`** | `any` | Operational field tracking state in `CoreDataStore`. |
| **`allowCountFTR`** | `boolean` | Boolean flag indicating whether allowcountftr is enabled or active in `CoreDataStore`. |
| **`allowShowTurboIntro`** | `boolean` | Boolean flag indicating whether allowshowturbointro is enabled or active in `CoreDataStore`. |
| **`extendData`** | `any` | Operational field tracking state in `CoreDataStore`. |
| **`game`** | `Game)` | Operational field tracking state in `CoreDataStore`. |
| **`data`** | `any, isResume?: boolean): void` | Operational field tracking state in `CoreDataStore`. |
| **`data`** | `any): void` | Operational field tracking state in `CoreDataStore`. |
| **`mode`** | `number): boolean` | Operational field tracking state in `CoreDataStore`. |
| **`playSession`** | `any): void` | Operational field tracking state in `CoreDataStore`. |
| **`mode`** | `number): number | null` | Operational field tracking state in `CoreDataStore`. |
| **`data`** | `any): void` | Operational field tracking state in `CoreDataStore`. |
| **`bigWinConfig`** | `any): void` | Operational field tracking state in `CoreDataStore`. |
| **`mode`** | `number): void` | Operational field tracking state in `CoreDataStore`. |
| **`value`** | `boolean): void` | Operational field tracking state in `CoreDataStore`. |
| **`value`** | `boolean): void` | Operational field tracking state in `CoreDataStore`. |
| **`value`** | `boolean): void` | Operational field tracking state in `CoreDataStore`. |
| **`currency`** | `string): void` | Operational field tracking state in `CoreDataStore`. |
| **`serverVersion`** | `string): void` | Operational field tracking state in `CoreDataStore`. |
| **`value`** | `boolean): void` | Operational field tracking state in `CoreDataStore`. |
| **`value`** | `boolean): void` | Operational field tracking state in `CoreDataStore`. |

---

## 2. State Mutation Guardrails

All state fields in `CoreDataStore` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
