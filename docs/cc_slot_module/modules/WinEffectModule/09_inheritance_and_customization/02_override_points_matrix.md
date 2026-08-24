---
id: "cc_slot_module:WinEffectModule:inheritance:override_points_matrix"
title: "WinEffectModule Override Points & Extension Matrix"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 WinEffectModule Override Points & Extension Matrix

---

## 1. Extension Points Matrix

| Method | Super Required | Purpose |
| :--- | :--- | :--- |
| `initValue` | Recommended | Initialize custom multipliers. |
| `updateCurrentTitle` | Optional | Custom escalation conditions. |
| `showFastEffectWin` | Optional | Custom Turbo mode particle/VFX. |
| `playSoundStart` | Hook | Play victory intro SFX. |
| `playSoundEnd` | Hook | Play victory triumph SFX. |
| `resumeMainBGM` | Hook | Restore base game music. |
