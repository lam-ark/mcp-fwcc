---
id: "cc_core_lib:BetData:api:properties"
title: "BetData Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BetData", "bet_data", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BetData` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`floatUtils`** | `any` | Collection of elements managed by `BetData`. |
| **`betKey`** | `string` | Operational field tracking state in `BetData`. |
| **`extraBetKey`** | `string` | Operational field tracking state in `BetData`. |
| **`mainBets`** | `any` | Collection of elements managed by `BetData`. |
| **`extraBets`** | `any` | Collection of elements managed by `BetData`. |
| **`totalCredit`** | `number` | Numeric counter or index value in `BetData`. |
| **`betDenom`** | `number` | Numeric counter or index value in `BetData`. |
| **`totalBet`** | `number` | Numeric counter or index value in `BetData`. |
| **`maxBetLine`** | `number` | Numeric counter or index value in `BetData`. |
| **`betLineNumber`** | `number` | Numeric counter or index value in `BetData`. |
| **`enableBetChange`** | `boolean` | Boolean flag indicating whether enablebetchange is enabled or active in `BetData`. |
| **`minBetEnable`** | `boolean` | Boolean flag indicating whether minbetenable is enabled or active in `BetData`. |
| **`maxBetEnable`** | `boolean` | Boolean flag indicating whether maxbetenable is enabled or active in `BetData`. |
| **`enableExtraBetChange`** | `boolean` | Boolean flag indicating whether enableextrabetchange is enabled or active in `BetData`. |
| **`minExtraBetEnable`** | `boolean` | Boolean flag indicating whether minextrabetenable is enabled or active in `BetData`. |
| **`maxExtraBetEnable`** | `boolean` | Boolean flag indicating whether maxextrabetenable is enabled or active in `BetData`. |
| **`_maxBetEnable`** | `boolean` | Boolean flag indicating whether _maxbetenable is enabled or active in `BetData`. |
| **`_minBetEnable`** | `boolean` | Boolean flag indicating whether _minbetenable is enabled or active in `BetData`. |
| **`_maxExtraBetEnable`** | `boolean` | Boolean flag indicating whether _maxextrabetenable is enabled or active in `BetData`. |
| **`_minExtraBetEnable`** | `boolean` | Boolean flag indicating whether _minextrabetenable is enabled or active in `BetData`. |
| **`_extraBetIndexData`** | `{ [key: string]: string[]` | Collection of elements managed by `BetData`. |

---

## 2. State Mutation Guardrails

All state fields in `BetData` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
