---
id: "cc_slot_module:SoundPlayerModuleImpl:gotchas:ios_autoplay_block"
title: "SoundPlayerModuleImpl Gotcha: iOS Safari AudioContext Autoplay Blocking"
category: "cc_slot_module"
tags: ["SoundPlayerModuleImpl", "sound_player_module_impl", "cc_slot_module", "gotchas", "ios_audio"]
---

# ⚠️ SoundPlayerModuleImpl Gotcha: iOS Safari AudioContext Autoplay Blocking

---

## 1. Symptom & Fix
On iOS Safari, `AudioContext` starts in suspended mode until user interaction. `SoundPlayerModuleImpl` sets up `_waitForUserGesture()` to capture the first `TOUCH_START` event, invoking `_resumeContextGesture()` to resume the context cleanly.
