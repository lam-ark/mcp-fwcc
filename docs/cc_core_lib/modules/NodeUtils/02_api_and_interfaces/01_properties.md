---
id: "cc_core_lib:NodeUtils:api:properties"
title: "NodeUtils Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["NodeUtils", "node_utils", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `NodeUtils` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`node`** | `cc.Node, color: cc.Color): void` | Scene graph node reference associated with `NodeUtils`. |
| **`node`** | `cc.Node, index: number, forceUpdate?: boolean): void` | Scene graph node reference associated with `NodeUtils`. |
| **`parent`** | `cc.Node): void` | Scene graph node reference associated with `NodeUtils`. |
| **`spaceNode`** | `cc.Node, targetNode: cc.Node): cc.Vec3 | null` | Scene graph node reference associated with `NodeUtils`. |
| **`node`** | `cc.Node, component: string): any | null` | Scene graph node reference associated with `NodeUtils`. |
| **`node`** | `cc.Node, alpha: number): void` | Scene graph node reference associated with `NodeUtils`. |
| **`node`** | `cc.Node): number` | Scene graph node reference associated with `NodeUtils`. |
| **`node`** | `cc.Node, opacity: number): void` | Scene graph node reference associated with `NodeUtils`. |
| **`node`** | `cc.Node): number` | Scene graph node reference associated with `NodeUtils`. |
| **`node`** | `cc.Node, opacity: number): void` | Scene graph node reference associated with `NodeUtils`. |
| **`node`** | `cc.Node, newParent: cc.Node): void` | Scene graph node reference associated with `NodeUtils`. |
| **`node`** | `cc.Node): string` | Scene graph node reference associated with `NodeUtils`. |

---

## 2. State Mutation Lifecycle

All state fields in `NodeUtils` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
