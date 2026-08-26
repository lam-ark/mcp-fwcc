---
id: "cc_core_lib:CommandBridge:api:properties"
title: "CommandBridge Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["CommandBridge", "command_bridge", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `CommandBridge` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`availableEvents`** | `any` | Collection of elements managed by `CommandBridge`. |
| **`_eventMap`** | `any` | Key-value lookup table for items in `CommandBridge`. |
| **`game`** | `Game)` | Operational field tracking state in `CommandBridge`. |
| **`events`** | `string[], callback: Function): void` | Collection of elements managed by `CommandBridge`. |
| **`event`** | `string, callback: Function): void` | Operational field tracking state in `CommandBridge`. |
| **`event`** | `string, callback: Function): void` | Operational field tracking state in `CommandBridge`. |
| **`event`** | `string, ...args: any[]): Promise<void>` | Collection of elements managed by `CommandBridge`. |

---

## 2. State Mutation Lifecycle

All state fields in `CommandBridge` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
