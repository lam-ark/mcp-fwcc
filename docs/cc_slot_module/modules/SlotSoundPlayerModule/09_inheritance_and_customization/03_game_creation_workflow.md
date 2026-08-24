---
id: "cc_slot_module:SlotSoundPlayerModule:customization:game_creation_workflow"
title: "Game Creation Workflow: Sound Bank Integration"
category: "cc_slot_module"
tags: ["SlotSoundPlayerModule", "slot_sound_player", "cc_slot_module", "customization", "workflow", "audio", "sound_bank", "checklist"]
---

# 🚀 Game Creation Workflow: Sound Bank Integration

Follow this 5-step checklist when setting up audio for a new slot title:

---

## Step 1: Create Audio Node Structure
Under `Canvas/Director`:
1. Select or create `Canvas/Director/SlotSound`.
2. Attach `SlotSoundPlayerModule` (or `SlotSoundPlayerModule[GameId]`).

---

## Step 2: Populate Music List (`musicList`)
In the Cocos Creator Inspector:
* Add item with `soundId: "BGM_MAIN"` ➔ Assign Base Game BGM asset.
* Add item with `soundId: "BGM_FREE"` ➔ Assign Free Spin BGM asset.
* Add item with `soundId: "BGM_BONUS"` ➔ Assign Bonus Feature BGM asset.

---

## Step 3: Populate SFX List (`sfxList`)
Map all gameplay sound tokens:
* `BTN_GENERAL`: Standard button click sound.
* `BTN_SPIN`: Spin button press sound.
* `REEL_SPIN`: Reel loop audio clip.
* `REEL_STOP_1`..`REEL_STOP_5`: Pitch-staggered reel stop clicks.
* `WIN_LEVEL_1`..`WIN_LEVEL_4`: Tiered win celebration music loops.

---

## Step 4: Wire Mobile User Gesture Node
Assign `Canvas/Director/waitingScene` or full-canvas overlay node to the `userGestureNode` property in the Inspector to guarantee WebAudio unlocks on first touch.

---

## Step 5: Test Background & Foreground Transitions
1. Test switching browser tabs ➔ Verify audio pauses immediately on `cc.game.EVENT_HIDE`.
2. Return to tab ➔ Verify audio resumes seamlessly on `cc.game.EVENT_SHOW`.
