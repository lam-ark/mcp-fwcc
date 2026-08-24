---
id: "cc_slot_module:SlotSymbolModule:game_flow:spine_animation_priority_matrix"
title: "SlotSymbolModule Spine Animation Tracks & Priority Matrix"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "game_flow", "spine", "animation_matrix", "priority"]
---

# 🎭 SlotSymbolModule Spine Animation Tracks & Priority Matrix

---

## 1. Standard Spine Animation Names Dictionary (`SymbolAnimationName`)

| Animation Type | Standard Track Name | Loop Setting | When Triggered |
| :--- | :--- | :--- | :--- |
| **Appear** | `animName.appear` (`"appear"`) | `false` | Symbol lands on grid upon reel bounce. Followed by `idle`. |
| **Idle** | `animName.idle` (`"idle"`) | `true` | Standard resting breathing animation for special Wild / Scatter symbols. |
| **Win** | `animName.win` (`"win"`) | `true` | Symbol participates in active winning payline or cluster. |
| **Disappear** | `animName.disappear` (`"disappear"`) | `false` | Cascading explosion / symbol elimination in avalanche games. |

---

## 2. Animation Track Management (`setAnimation` vs `addAnimation`)

* **`playAnimationAppear()`**: Calls `playAnimation(appear, false)` on Track 0, then queues `addAnimation(idle, true)` so the Spine skeleton smoothly transitions into idle loop upon finishing the appear burst.
* **Fallback Safety**: If the requested animation name does not exist in the skeleton (`!SpineUtils.hasAnimation(this.spine, name)`), the module automatically falls back to static sprite rendering via `stopAnimation()`.
