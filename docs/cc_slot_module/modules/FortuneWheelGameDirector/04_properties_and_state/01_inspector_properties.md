---
id: "cc_slot_module:FortuneWheelGameDirector:properties:inspector_properties"
title: "FortuneWheelGameDirector Inspector Properties Reference"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "properties", "inspector_properties", "ccclass", "property"]
---

# 🎛️ FortuneWheelGameDirector Inspector Properties Reference

---

## 1. Inherited Inspector Properties from `BonusGameDirectorModule`

`FortuneWheelGameDirector` inherits the following `@property` serialized fields exposed in Cocos Creator Inspector:

| Property Name | Type | Default Value | When Set | Where Read | Impact If Desynced / Null |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `labelCountDown` | `cc.Label` | `null` | Editor Inspector binding to HUD label node. | `BonusGameDirectorModule._updateCountDown()` | Countdown numeric timer will not display on UI. |
| `defaultCountDown` | `Number` | `15` | Editor Inspector field configuring timer seconds. | `BonusGameDirectorModule.startBonusGame()` | Auto-spin trigger timer falls back to 0 or unexpected delay. |

---

## 2. Node Attachment Hierarchy

In the standard Cocos scene hierarchy, `FortuneWheelGameDirector` is mounted directly on the mode root node:

```text
Canvas/Director/GameMode/FortuneWheel
├── FortuneWheelGameDirector (Component)
├── Table/FortuneWheelModule (Wheel Rotation Visual Engine)
└── HUD/CountdownLabel (cc.Label referenced by labelCountDown)
```
