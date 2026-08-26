---
id: "cc_core_lib:CocosSoundPlayer:api:properties"
title: "CocosSoundPlayer Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["CocosSoundPlayer", "cocos_sound_player", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `CocosSoundPlayer` Detailed Properties & Schema

---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`musicAudioNode`** | `cc.Node` | Scene graph node reference associated with `CocosSoundPlayer`. |
| **`musicAudioSource`** | `cc.AudioSource` | Operational field tracking state in `CocosSoundPlayer`. |
| **`currentMusic`** | `any` | Currently playing background music sound ID or audio descriptor. |
| **`_musicTween`** | `any` | Active `cc.Tween` instance handling BGM volume fading or cross-fading. |

---

## 2. State Mutation Guardrails

All state fields in `CocosSoundPlayer` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
