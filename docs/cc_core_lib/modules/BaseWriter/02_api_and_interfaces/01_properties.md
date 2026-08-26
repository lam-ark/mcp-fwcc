---
id: "cc_core_lib:BaseWriter:api:properties"
title: "BaseWriter Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BaseWriter", "base_writer", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BaseWriter` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`game`** | `Game` | Operational field tracking state in `BaseWriter`. |
| **`dataStore`** | `CoreDataStore` | Central reactive state store (`GameDataStore`) containing session data, bet matrices, and server responses. |
| **`name`** | `string` | Operational field tracking state in `BaseWriter`. |
| **`game`** | `Game)` | Operational field tracking state in `BaseWriter`. |

---

## 2. State Mutation Guardrails

All state fields in `BaseWriter` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
