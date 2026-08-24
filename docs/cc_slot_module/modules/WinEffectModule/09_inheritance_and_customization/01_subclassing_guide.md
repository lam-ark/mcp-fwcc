---
id: "cc_slot_module:WinEffectModule:inheritance:subclassing_guide"
title: "WinEffectModule Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ WinEffectModule Subclassing & Customization Guide

---

## 1. Subclassing Guidelines

- Extend `WinEffectModule`.
- Key customization points:
  - Override `initValue()` and `updateCurrentTitle()` for custom tier thresholds.
  - Implement sound hooks (`playSoundStart`, `playSoundCounting`, `playSoundEnd`, `resumeMainBGM`).
