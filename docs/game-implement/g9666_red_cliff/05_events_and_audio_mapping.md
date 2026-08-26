---
id: "game-implement:9666:events_audio"
title: "Red Cliff (g9666) - Custom Events Dictionary & Sound Player Mapping"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
section: "events_audio"
tags: ["game_implement", "9666", "events", "audio", "bgm", "sfx", "event_bus"]
created_at: "2026-08-25"
author: "ARK Slot Engineering Team"
---

# 5. 🔊 Custom Events Dictionary & Sound Player Mapping

---

## 5.1 Custom Event Bus Mapping

| Event Name | Source Module | Listener Modules | Payload / Parameters | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `COLLECT_SCATTER` | `NormalGameDirectorModule9666` | Scatter Collector UI | `{ count, matrixIndexes, formatMatrix }` | Triggers visual fly-in particle from reel Scatters to FG counter. |
| `COLLECT_WILD_MULTIPLIER` | `NormalGameDirectorModule9666` | Top Sub-Reel Multiplier | `SlotSymbolManager` | Gathers wild multipliers from active sub-reel symbols. |
| `RESET_MULTIPLIER` | `NormalGameDirectorModule9666` | Multiplier HUD | `isInstant: boolean` | Resets progressive multiplier indicator back to x1. |
| `APPLY_MULTIPLIER_TO_WIN_AMOUNT` | `NormalGameDirectorModule9666` | WinAmountModule | `isFirstSpin: boolean` | Multiplies cascade step win amount by active multiplier. |
| `COMMIT_RESPIN_WIN_AMOUNT` | `NormalGameDirectorModule9666` | WinAmountModule | `none` | Commits respin win amount to the cumulative session balance. |
| `UPDATE_MEGAWAY` | `SlotTableModule9666` | MegawaysCounter HUD | `waysCount: number` | Dynamically updates ways counter on the HUD header. |
| `PLAY_MC_STATE` | `NormalGameDirectorModule9666` | Mascot Controller | `SpineStateMc9666` enum | Triggers character mascot animations on major events. |

---

## 5.2 Sound Keys & Audio Mapping
- **BGM Keys**:
  - `BGM_NORMAL`: Main base game background music.
  - `BGM_FREEGAME`: Free Spins mode battle music.
  - `BGM_BIGWIN`: Big Win celebration theme.
- **SFX Keys**:
  - `BIGWIN_START`, `BIGWIN_COUNT`, `BIGWIN_END`: Multi-milestone celebration sound effects.
  - `TOTAL_WIN_START`, `TOTAL_WIN_END`: Free Spins total win presentation sounds.
  - `SCATTER_HIT_1` to `SCATTER_HIT_6`: Escalating pitch SFX on landing Scatter symbols.
  - `REEL_STOP_1` to `REEL_STOP_6`: Reel stop thuds.
