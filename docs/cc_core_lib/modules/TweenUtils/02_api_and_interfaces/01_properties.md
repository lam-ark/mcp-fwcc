---
id: "cc_core_lib:TweenUtils:api:properties"
title: "TweenUtils Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["TweenUtils", "tween_utils", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `TweenUtils` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`node`** | `cc.Node, duration: number, opacity: number, options?: ITweenOptions): cc.Tween` | Scene graph node reference associated with `TweenUtils`. |
| **`node`** | `cc.Node, duration: number, options?: ITweenOptions): cc.Tween` | Scene graph node reference associated with `TweenUtils`. |
| **`node`** | `cc.Node, duration: number, options?: ITweenOptions): cc.Tween` | Scene graph node reference associated with `TweenUtils`. |
| **`node`** | `cc.Node, duration: number, alpha: number, options?: ITweenOptions): cc.Tween` | Scene graph node reference associated with `TweenUtils`. |
| **`node`** | `cc.Node, duration: number, options?: ITweenOptions): cc.Tween` | Scene graph node reference associated with `TweenUtils`. |
| **`target`** | `cc.Node, duration: number, options?: ITweenOptions): cc.Tween` | Scene graph node reference associated with `TweenUtils`. |
| **`node`** | `cc.Node, duration: number, scale: number, options?: ITweenOptions): cc.Tween` | Scene graph node reference associated with `TweenUtils`. |
| **`node`** | `cc.Node, duration: number, scale: number, options?: ITweenOptions): cc.Tween` | Scene graph node reference associated with `TweenUtils`. |
| **`node`** | `cc.Node, duration: number, positions: cc.Vec2[] | cc.Vec3[], options?: ITweenOptions & { isRotate?: boolean` | Collection of elements managed by `TweenUtils`. |

---

## 2. State Mutation Guardrails

All state fields in `TweenUtils` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
