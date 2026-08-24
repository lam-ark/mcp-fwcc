---
id: "cc_slot_module:SlotButtonModule:properties_and_state:inspector_properties"
title: "SlotButtonModule & Subclasses Inspector Properties Specification"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "SlotButtonSpine", "SlotButtonSprite", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ SlotButtonModule & Subclasses Inspector Properties Specification

---

## 1. Base Class: `SlotButtonModule` Properties

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `gameMode` | `GAME_MODE_ENUM` | `NORMAL_GAME` | Game mode type associated with this button (`NORMAL_GAME`, `FREE_GAME`, `LIGHTNING_GAME`). |
| `spinButtonTouch` | `cc.Node` | `null` | Target touch hitbox area. |
| `display` | `cc.Node` | `null` | Rendering node hosting `SlotButtonSpine` or `SlotButtonSprite`. |

---

## 2. Specialized Subclass: `SlotButtonNormal` Properties

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `textSpin` | `cc.Sprite` | `null` | Sprite node displaying interactive helper text. |
| `textHoldToAuto` | `cc.SpriteFrame` | `null` | Texture frame displayed when idle ("HOLD TO AUTO"). |
| `textPressToStop` | `cc.SpriteFrame` | `null` | Texture frame displayed while spinning ("PRESS TO STOP"). |
| `skipSound` | `boolean` | `false` | If `true`, suppresses audio triggers on spin clicks. |
| `sfxSpinId` | `string` | `"BTN_SPIN"` | Sound effect identifier for spin clicks. |
| `holdToAutoSpin` | `boolean` | `true` | Enables/disables long-press auto spin activation. |
| `holdTime` | `number` | `0.7` | Hold duration in seconds required to trigger auto spin. |

---

## 3. View Renderer: `SlotButtonSpine` Properties

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `animIdle` | `string` | `"Spin"` | Idle looping animation name. |
| `animStop` | `string` | `"Stop"` | Fast-stop active animation name. |
| `animHover` | `string` | `"Hover"` | Desktop mouseover highlight animation name. |
| `animSpinToStop` | `string` | `"Spin_To_Stop"` | Transition animation from spin to stop. |
| `animHolder` | `string` | `"Hold"` | Hold animation name during long-press. |
| `spineBtnSpin` | `sp.Skeleton` | `null` | Primary button Spine Skeleton component. |
| `spineHover` | `sp.Skeleton` | `null` | Hover effect overlay Spine Skeleton component. |

---

## 4. View Renderer: `SlotButtonSprite` Properties

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `normal` | `cc.SpriteFrame` | `null` | Idle normal button texture. |
| `pressed` | `cc.SpriteFrame` | `null` | Depressed / clicked button texture. |
| `hover` | `cc.SpriteFrame` | `null` | Desktop mouse hover button texture. |
| `disabled` | `cc.SpriteFrame` | `null` | Inactive / grayed-out button texture. |
| `stopNormal` | `cc.SpriteFrame` | `null` | Stop button idle texture. |
| `stopHover` | `cc.SpriteFrame` | `null` | Stop button hover texture. |
| `stopPress` | `cc.SpriteFrame` | `null` | Stop button depressed texture. |
