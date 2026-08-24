---
id: "cc_slot_module:WinEffectModule:properties_and_state:inspector_properties"
title: "WinEffectModule Inspector Properties Specification"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ WinEffectModule Inspector Properties Specification

---

## 1. Property Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `superRate` | `number` | `25` | Bet multiplier threshold for Super Win promotion. |
| `megaRate` | `number` | `40` | Bet multiplier threshold for Mega Win promotion. |
| `delayShowTime` | `number` | `1` | Grace period in seconds before tap-to-skip unlocks. |
| `delayHideTime` | `number` | `1` | Hold delay in seconds on final score before closing. |
| `animDuration` | `number` | `9` | Total rolling duration of the money count-up tween. |
| `winInfo` | `cc.Node` | `null` | Container holding label and title sprite nodes. |
| `winAmount` | `cc.Node` | `null` | Label node displaying counting numeric win amount. |
| `overlayNode` | `cc.Node` | `null` | Fullscreen background blocker / dimmer sprite. |
| `fastParticle` | `cc.Node` | `null` | Fast particle node used during Turbo / Fast-To-Result modes. |
| `coinsEffect` | `cc.Node` | `null` | Particle node hosting `CoinsEffect` component. |
| `title` | `cc.Node` | `null` | Sprite node displaying active win title banner. |
| `titleFrame` | `cc.SpriteFrame[]` | `[]` | Array of sprite frames indexed by `WinEffectLevelEnum`. |
