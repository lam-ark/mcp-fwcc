---
id: "cc_slot_module:systems:cutscenes_and_celebration_system:index"
title: "Cutscenes & Celebratory Overlays Subsystem Architecture Master Guide"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "cutscenes", "celebration", "win_effect", "jackpot", "total_win", "index"]
---

# 🎆 Cutscenes & Celebratory Overlays Subsystem Architecture Master Guide

---

## 1. Subsystem Architectural Mission

The **Cutscenes & Celebratory Overlays Subsystem** manages all modal dialogs, celebratory win particle animations, mode transitions, and jackpot banners. It coordinates fullscreen UI overlays, audio ducking, rolling number tween counters (`MoneyTween`), and touch-to-skip fast-forward interactions without breaking the asynchronous command pipeline of the game.

```mermaid
graph TD
    Director[GameDirector / Mode Writer / ScriptExecutor] -->|GameUIEvents.CUTSCENES.PLAY_CUTSCENE| CC[CutsceneController]
    CC -->|1. Looks up cutsceneType Map| Registry[Cutscene Map Registry]
    Registry -->|2. Invokes play(data, callback)| TargetCutscene[BaseCutscene Instance]
    
    TargetCutscene -->|SHOW_FULL_DISPLAY_CUTSCENE| EventMgr[GameEventManager]
    TargetCutscene -->|Spawns Coins & Particles| Coins[CoinsEffect / ParticleSystem]
    TargetCutscene -->|Rolling Count-up| Tween[MoneyTween / MoneyFormatter]
    
    User[Player Screen Tap] -->|onClick / SKIP| TargetCutscene
    TargetCutscene -->|Fast-forwards number| TargetCutscene
    
    TargetCutscene -->|exit() -> callback()| CC
    CC -->|Resolves Promise<void>| Director
```

---

## 2. Core Architectural Pillars

1. **Centralized Cutscene Registry (`CutsceneController`)**:
   - Manages a typed `Map<number, BaseCutscene>` resolving cutscene requests by enum (`CUTSCENE_TYPE_ENUM`).
   - Converts callback-driven cutscenes into asynchronous `Promise<void>` steps for `ScriptExecutor`.
2. **Unified Base Class Lifecycle (`BaseCutscene`)**:
   - Implements standardized `init()`, `play()`, `enter()`, `skip()`, and `exit()` lifecycle hooks.
   - Emits `SHOW_FULL_DISPLAY_CUTSCENE` and `HIDE_FULL_DISPLAY_CUTSCENE` to notify UI layers to disable background inputs.
3. **Dynamic Win Tiers & Multiplier Scaling (`WinEffectModule`)**:
   - Evaluates win ratios against bet multipliers to dynamically switch banners between **BIG WIN**, **MEGA WIN** ($\ge 40\times$), and **SUPER WIN** ($\ge 25\times$).
   - Seamlessly falls back to fast particles when Turbo / Fast-to-Result (FTR) is active.
4. **Resilient Touch-to-Skip & Auto-Finish**:
   - Configurable `delayShowTime` prevents accidental skip on initial frame, followed by immediate jump to final win amounts on user tap.

---

## 3. Subsystem Chapter Index

| Chapter | Topic | Key Focus Area |
| :--- | :--- | :--- |
| **[`01_cutscene_queue_and_orchestration`](./01_cutscene_queue_and_orchestration.md)** | Cutscene Queue & Execution | Architecture of `CutsceneController`, Promise conversion, and lifecycle coordination. |
| **[`02_win_effect_tiers_and_coin_roll_mechanics`](./02_win_effect_tiers_and_coin_roll_mechanics.md)** | Win Effect Tiers & Coin Roll | Multiplier tier thresholds, `MoneyTween.runBigWinNumber`, and `CoinsEffect` particle systems. |
| **[`03_mode_transition_and_total_win_dialogues`](./03_mode_transition_and_total_win_dialogues.md)** | Mode Transitions & Total Win | `IntroGameModule` splash, `IntroFreeGameModule` countdown, and `TotalWinModule` summary tally. |
| **[`04_skip_fast_to_result_and_interrupt_handling`](./04_skip_fast_to_result_and_interrupt_handling.md)** | Skip, Turbo & Interrupt Handling | Fast-To-Result fast effects, touch acceleration, and clean teardown on scene switches. |
| **[`05_custom_cutscene_creation_guide`](./05_custom_cutscene_creation_guide.md)** | Custom Cutscene Guide | Step-by-step tutorial for subclassing `BaseCutscene` and registering new game cutscenes. |
