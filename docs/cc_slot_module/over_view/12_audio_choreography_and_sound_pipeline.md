---
id: "cc_slot_module:overview:audio_choreography_and_sound_pipeline"
title: "Audio Choreography & Sound Subsystem Pipeline"
category: "cc_slot_module"
tags: ["cc_slot_module", "overview", "audio_pipeline", "sound_player", "sound_choreography", "bgm", "sfx", "near_win_sound"]
---

# 🎵 Audio Choreography & Sound Subsystem Pipeline

---

## 1. Multi-Tier Audio Choreography

In casino-grade slot design, audio accounts for up to 50% of the player anticipation and reward experience. `cc-slot-module` manages audio through 3 primary synchronized channels:

```mermaid
graph TD
    SoundSubsystem[Slot Audio Engine]
    
    subgraph 1. BGM Channel (Music)
        SoundSubsystem --> BGM[SlotSoundPlayerModule: Play Mode BGM]
        BGM --> NormalBGM[Normal Game BGM]
        BGM --> FreeBGM[Free Game High-Tension BGM]
        BGM --> BonusBGM[Bonus Game Mini-Game BGM]
    end

    subgraph 2. Table Motion SFX
        SoundSubsystem --> TableSound[SlotTableSoundEffectModule]
        TableSound --> SpinLoop[Reel Spinning Loop SFX]
        TableSound --> ReelStop[Reel Stop Thud SFX]
        TableSound --> NearWin[Near-Win Heartbeat / High Tension SFX]
        TableSound --> ScatterLand[Scatter / Bonus Bell Stinger]
    end

    subgraph 3. Reward & Celebration SFX
        SoundSubsystem --> WinSound[Win Celebration Audio]
        WinSound --> CoinRoll[Coin Count-Up Escalating Roll]
        WinSound --> WinLevelSting[Big Win / Mega Win Fanfares]
        WinSound --> EndWinChime[End Count Summary Chime]
    end
```

---

## 2. Spin Lifecycle Audio Workflow

| Spin Phase | Trigger Signal | Sound Behavior |
| :--- | :--- | :--- |
| **1. Spin Press** | `_startSpinningTable` | Plays button click SFX (`SPIN_CLICK`), applies subtle BGM ducking, and starts the continuous `SPIN_LOOP`. |
| **2. Standard Reel Stop** | `onReelStop` | Stops the reel's spinning loop and plays physical stop impact (`REEL_STOP`). |
| **3. Scatter Land (Anticipation)** | `onReelPreStop` | Plays a high-pitched `SCATTER_LAND` stinger. If 2+ Scatters land, cross-fades into high-tempo `NEAR_WIN_LOOP` tension audio on remaining reels. |
| **4. Win Rollup Counter** | `_showWinPayline` | Plays continuous coin rollup loop (`COIN_ROLL_LOOP`). Audio pitch escalates dynamically as the counter reaches Big Win thresholds. |
| **5. Win Completion** | `_resetOnSpin` | Plays settlement chime (`END_WIN_CHIME`) and restores background music volume back to nominal levels. |

---

## 3. Web & Mobile Audio Management

The audio engine automatically handles mobile browser nuances:
1. **Audio Context Unlock**: Automatically unlocks the Web Audio API on the player's initial touch interaction (iOS Safari / Android Chrome).
2. **Page Visibility Interception**: Automatically pauses audio tracks when the browser tab loses focus (`document.hidden`) and resumes playback cleanly upon return.
3. **Master Volume & Mute State Caching**: Persists sound and music toggle states into Local Storage (`cc.sys.localStorage`) across gaming sessions.
