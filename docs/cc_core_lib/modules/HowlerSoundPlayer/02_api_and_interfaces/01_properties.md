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

## 2. State Mutation Guardrails

All state fields in `HowlerSoundPlayer` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
