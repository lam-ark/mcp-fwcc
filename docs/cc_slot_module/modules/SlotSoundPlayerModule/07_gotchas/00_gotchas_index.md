---
id: "cc_slot_module:SlotSoundPlayerModule:gotchas:index"
title: "SlotSoundPlayerModule Gotchas & Audio Defects Index"
category: "cc_slot_module"
tags: ["SlotSoundPlayerModule", "slot_sound_player", "cc_slot_module", "gotchas", "audio", "index"]
---

# ⚠️ SlotSoundPlayerModule Gotchas & Audio Defects Index

## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_mobile_web_audio_user_gesture_lock`](./01_mobile_web_audio_user_gesture_lock.md)** | Background music and sound effects silent on Safari / iOS Chrome upon game startup. | Mobile browser autoplay policy requires user gesture before WebAudio `AudioContext` can enter running state. | 🔴 Critical (Total Silence on Mobile) |
| **[`02_stale_crossfade_tween_conflict`](./02_stale_crossfade_tween_conflict.md)** | BGM volume suddenly muting or dual tracks overlapping when player rapidly skips cutscenes. | Un-cancelled `_tweenSwitchMusicBGM` tween completing after a subsequent mode switch has already begun. | 🟠 High (Audio Stutter & Overlap) |
