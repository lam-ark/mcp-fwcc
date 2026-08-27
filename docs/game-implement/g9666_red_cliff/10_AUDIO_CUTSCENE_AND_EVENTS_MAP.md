---
id: "game-implement:9666:audio:audio_cutscene_events_map"
title: "Red Cliff (g9666) Audio, Cutscene & Master Events Map"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "SlotSoundPlayerModule9666", "SoundConvertList9666", "SpineMcStateController9666", "audio", "cutscenes", "events"]
---

# 🎵 Red Cliff (g9666) Audio, Cutscene & Master Events Map

---

## 1. Cutscene & MC Spine State Controller (`SpineMcStateController9666`)

The master character Spine controller manages transitions between game states:

| State Enum (`SpineStateMc9666`) | Spine Animation | Trigger Context |
| :--- | :--- | :--- |
| **`NormalIdle`** | `idle` | Normal game baseline state. |
| **`FreeSpinIdle`** | `free_spin_idle` | Free game baseline state. |
| **`TransitionFreespin`** | `transition_freespin` | 3+ Scatters collected; transitioning into Free Game. |
| **`Expand`** | `expand` | Top horizontal reel lands `K2` Stack Wild. |
| **`SureWin`** | `sure_win` | Sure-win anticipation trigger. |

---

## 2. Audio Mapping & Sound Player (`SlotSoundPlayerModule9666`)

Maps game event bus triggers to audio clip playback via `SoundConvertList9666`:
- `SPIN_START`: Reel start spin SFX.
- `REEL_BEGIN_STOP`: Anticipation stop sound for individual reels.
- `COLLECT_WILD_MULTIPLIER`: Multiplier particle flight & punch impact SFX.
- `SHOW_PAYLINE_WIN_AMOUNT`: Payline win tally sound.
- `SHOW_TOTAL_WIN_EFFECT`: Level 1/2/3 win celebration stingers.
