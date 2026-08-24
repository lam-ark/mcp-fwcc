---
id: "cc_slot_module:SlotSymbolModule:customization:override_points_matrix"
title: "SlotSymbolModule Override Points Matrix"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "customization", "override_points"]
---

# 📋 SlotSymbolModule Override Points Matrix

---

## 1. Extension Points Summary

| Hook Method | Base Behavior | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `onLoadExtend()` | Empty virtual hook | `YES` | Optional | Cache game-specific child nodes or particles. |
| `initExtend(code, size)` | Empty virtual hook | `YES` | Optional | Configure custom visual skins or audio triggers. |
| `onDestroyExtend()` | Empty virtual hook | `YES` | Optional | Dispose custom node events or timers. |
| `playAnimation(name, loop)` | Plays Spine track | `YES` | `MANDATORY` | Inject custom sound stingers or particle VFX. |
| `resetBeforeBackToPool()` | Resets pose and nulls skeleton | `YES` | `MANDATORY` | Reset custom game modifiers. |
