---
id: "cc_slot_module:NormalGameDirectorModule:director_writer:subsystem_impacts"
title: "NormalGameDirectorModule Subsystem Impact Matrix"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "director_writer", "subsystems", "impact_matrix"]
---

# 🌐 NormalGameDirectorModule Subsystem Impact Matrix

## 1. Subsystems Cross-Reference Matrix

Every action dispatched by `NormalGameDirectorModule` directly affects one or more visual and logical subsystems:

| Phase / Action | `SlotTableModule` (Board) | `PaylineModule` | `WinAmountModule` | `WalletModule` | `SoundPlayerModule` | `CutsceneModule` |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **`JOIN_GAME_SUCCESS`** | Renders Beauty Matrix | Cleared | Shows initial 0 | Unlocks balance | Plays Main BGM | Closed |
| **`NormalSpinTrigger`** | Symbols reset | Paylines hidden | Fades out number | Balance frozen (`PAUSE_WALLET`) | Plays spin click SFX | Closed |
| **`StartSpinning`** | Reels accelerate (`TABLE_START_SPIN`) | Idle | Idle | Frozen | Plays reel loop SFX | Closed |
| **`PreStopSpinningTable`** | Anticipation slow-down | Idle | Idle | Frozen | Plays teaser sound | Closed |
| **`StopSpinningTable`** | Reels land & bounce (`TABLE_STOP_SPIN`) | Calculates win lines (`SETUP_PAYLINES`) | Idle | Frozen | Plays reel stop SFX | Closed |
| **`ShowResultEntry (Regular)`** | Winning symbols animate | Renders win line trails | Counts up win number | Frozen | Plays win line SFX | Closed |
| **`ShowResultEntry (BigWin)`** | Board dims | Blinks winning symbols | Counts up digits | Frozen | Plays Big Win celebration BGM | Plays Spine coin celebration |
| **`TransitionGameMode`** | Board locks | Blinks feature symbols | Frozen | Frozen | Crossfades to Feature BGM | Plays Intro dialogue cutscene |
| **`ShowResultFinal`** | Ready for next spin | Continues idle cycle | Final win displayed | Balance committed (`RESUME_WALLET`) | Restores normal BGM | Closed |
