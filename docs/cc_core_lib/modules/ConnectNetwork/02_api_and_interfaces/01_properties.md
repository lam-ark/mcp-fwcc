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

## 2. State Mutation Lifecycle

All state fields in `ConnectNetwork` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
