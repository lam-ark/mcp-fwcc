---
id: "cc_core_lib:ConnectNetwork:api:properties"
title: "ConnectNetwork Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["ConnectNetwork", "connect_network", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `ConnectNetwork` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`gameId`** | `string` | Unique game identifier string (e.g. `'9666'`, `'9000'`, `'cc1-red-cliff'`) used for scoped storage and API endpoints. |
| **`mock`** | `any` | Operational field tracking state in `ConnectNetwork`. |
| **`network`** | `any): void` | Operational field tracking state in `ConnectNetwork`. |

---

## 2. State Mutation Guardrails

All state fields in `ConnectNetwork` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
