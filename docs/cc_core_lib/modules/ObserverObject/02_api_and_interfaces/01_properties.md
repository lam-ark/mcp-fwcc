---
id: "cc_core_lib:ObserverObject:api:properties"
title: "ObserverObject Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["ObserverObject", "observer_object", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `ObserverObject` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`listeners`** | `Map<any, any>` | Collection of elements managed by `ObserverObject`. |
| **`contextListeners`** | `Map<any, any>` | Collection of elements managed by `ObserverObject`. |
| **`rootObj`** | `any, obj: any, key: string, basePath: string): void` | Operational field tracking state in `ObserverObject`. |
| **`rootObj`** | `any, path: string, oldValue: any, newValue: any): void` | Operational field tracking state in `ObserverObject`. |
| **`target`** | `any, rootObj?: any, path?: string, visited?: WeakSet<any>): void` | Operational field tracking state in `ObserverObject`. |
| **`obj`** | `any): any` | Operational field tracking state in `ObserverObject`. |
| **`rootObj`** | `any, childObj: any, path: string): any` | Operational field tracking state in `ObserverObject`. |
| **`obj`** | `any): boolean` | Operational field tracking state in `ObserverObject`. |
| **`target`** | `any, targetPath: string, callback: CallbackFunction, context?: any, options?: WatchOptions): Function` | Operational field tracking state in `ObserverObject`. |
| **`target`** | `any, callback: CallbackFunction, context?: any): Function` | Operational field tracking state in `ObserverObject`. |
| **`target`** | `any, path?: string, paths?: string[], visited?: WeakSet<any>): string[]` | Collection of elements managed by `ObserverObject`. |
| **`obj`** | `any, callback: Function, context?: any): void` | Operational field tracking state in `ObserverObject`. |
| **`obj`** | `any, context: any): void` | Operational field tracking state in `ObserverObject`. |
| **`obj`** | `any): void` | Operational field tracking state in `ObserverObject`. |

---

## 2. State Mutation Guardrails

All state fields in `ObserverObject` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
