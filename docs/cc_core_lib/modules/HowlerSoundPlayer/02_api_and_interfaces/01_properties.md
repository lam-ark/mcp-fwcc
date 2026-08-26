---
id: "cc_core_lib:HowlerSoundPlayer:api:properties"
title: "HowlerSoundPlayer Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["HowlerSoundPlayer", "howler_sound_player", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `HowlerSoundPlayer` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`currentMusic`** | `any` | Currently playing background music sound ID or audio descriptor. |
| **`_musicTween`** | `any` | Active `cc.Tween` instance handling BGM volume fading or cross-fading. |

---

## 2. State Mutation Lifecycle

All state fields in `HowlerSoundPlayer` are initialized during instantiation/registration and mutated during explicit lifecycle method calls. Direct property mutation outside defined methods is strictly discouraged.
