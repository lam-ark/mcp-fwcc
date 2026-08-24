---
id: "cc_slot_module:SlotSoundPlayerModule:gotcha:mobile_web_audio_user_gesture_lock"
title: "Gotcha: Mobile WebAudio Autoplay Policy Lock"
category: "cc_slot_module"
tags: ["SlotSoundPlayerModule", "slot_sound_player", "cc_slot_module", "gotchas", "web_audio", "ios_safari", "autoplay", "userGestureNode"]
---

# 🛑 Gotcha: Mobile WebAudio Autoplay Policy Lock

## 1. Symptom & Visual Defect
On iOS Safari or Android Chrome, the game boots with zero audio. BGM and spin button clicks produce no sound until the user taps the screen.

---

## 2. Root Cause & Browser Security Policy
Modern mobile browsers mandate that an `AudioContext` cannot start in `running` state without an explicit user gesture (touch/click).

---

## 3. Standard Code Solution & Fix
`SoundPlayerModuleImpl` includes automatic `userGestureNode` resolution. Always ensure a transparent touch layer node is wired to the `userGestureNode` inspector property:

```typescript
// SoundPlayerModuleImpl.ts:
if (!this._hasAudioContext) {
    this._waitForUserGesture(); // Attaches touchstart to userGestureNode to resume AudioContext
}
```
