---
id: "cc_core_lib:TurboButtonData:api:properties"
title: "TurboButtonData Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["TurboButtonData", "turbo_button_data", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `TurboButtonData` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`interactable`** | `boolean` | Boolean flag indicating whether interactable is enabled or active in `TurboButtonData`. |
| **`active`** | `boolean` | Boolean flag indicating whether active is enabled or active in `TurboButtonData`. |
| **`state`** | `number` | Numeric counter or index value in `TurboButtonData`. |
| **`interactable`** | `boolean): void` | Operational field tracking state in `TurboButtonData`. |
| **`state`** | `number): void` | Operational field tracking state in `TurboButtonData`. |
| **`active`** | `boolean): void` | Operational field tracking state in `TurboButtonData`. |

---

## 2. State Mutation Guardrails

All state fields in `TurboButtonData` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
