---
id: "cc_slot_module:SlotReelModule:customization:override_points_matrix"
title: "SlotReelModule Override Points Matrix"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "customization", "override_points", "hooks"]
---

# 📋 SlotReelModule Override Points Matrix

---

## 1. Extension Points & Hook Methods

| Hook Method | Base Behavior | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `customizeNewSymbol(symbol)` | Empty virtual hook | `YES (Recommended)` | Optional | Trigger custom Spine skins or particles when new symbol spawns. |
| `playStopAnimation()` | Two-phase bounce tween | `YES` | `MANDATORY` | Custom column landing VFX and sound triggers. |
| `getPositionStopStep()` | Computes bounce offset | `YES` | Optional | Custom bounce distance and easing curves. |
| `onReelPreStop()` | Emits `reelPreStopCB` | `YES` | `MANDATORY` | Column pre-stop anticipation teasers. |
| `resetReel()` | Coordinate offset reset | `YES` | `MANDATORY` | Clean up custom column VFX and restore resting anchors. |
