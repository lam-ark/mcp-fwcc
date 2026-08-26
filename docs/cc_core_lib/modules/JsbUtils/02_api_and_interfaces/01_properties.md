---
id: "cc_core_lib:JsbUtils:api:properties"
title: "JsbUtils Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["JsbUtils", "jsb_utils", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `JsbUtils` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`text`** | `string): void` | Operational field tracking state in `JsbUtils`. |
| **`url`** | `string, spriteA: any, defaultAvatar: any, AvatarAtlas: any): void` | Backend API gateway base URL for fetching round history and detailed matrix snapshots. |
| **`avatarSprite`** | `any, ava: any, atlas: any, prefix?: string, leadingZeroLength?: number, avatarDefault?: string): boolean` | Operational field tracking state in `JsbUtils`. |

---

## 2. State Mutation Lifecycle

All state fields in `JsbUtils` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
