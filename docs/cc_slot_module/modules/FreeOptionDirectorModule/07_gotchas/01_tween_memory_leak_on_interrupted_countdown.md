---
id: "cc_slot_module:FreeOptionDirectorModule:gotcha:tween_memory_leak_on_interrupted_countdown"
title: "Gotcha: Repeating Tween Timer Leak Across Scene Transitions"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "gotchas", "tween", "memory_leak"]
---

# ⚠️ Gotcha: Repeating Tween Timer Leak Across Scene Transitions

## 1. Defect Symptom
`_repeatCountDown` tween callbacks continue ticking in the background, logging errors against destroyed label components.

---

## 2. Root Cause Analysis
`repeatForever()` tweens are managed by Cocos TweenManager and persist until explicitly stopped.

---

## 3. Recommended Resolution
Always invoke `stopCountDown()` inside `optionClick()`, `_runAutoTrigger()`, and `onDestroy()`.
