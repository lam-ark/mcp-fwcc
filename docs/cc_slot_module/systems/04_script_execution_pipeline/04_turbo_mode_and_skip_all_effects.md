---
id: "cc_slot_module:systems:script_pipeline:turbo_mode_and_skip_all_effects"
title: "Turbo Mode & Fast-To-Result (skipAllEffects)"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "script_pipeline", "turbo_mode", "fast_stop", "skipAllEffects", "performance", "flow"]
---

# ⚡ Turbo Mode & Fast-To-Result (`skipAllEffects`)

---

## 1. Fast Stop & Turbo Execution Flow

When Turbo mode is enabled or when the player taps the screen to fast-stop an active spin, the framework accelerates the timeline through **Fast-To-Result (FTR)**:

```mermaid
sequenceDiagram
    autonumber
    participant UI as Player Click / Turbo Toggle
    participant Settings as SlotGameSettings
    participant Director as BaseGameDirector
    participant Subsystems as Table & HUD Subsystems
    participant Exec as ScriptExecutor

    UI->>Settings: isTurboActive = true / Fast Stop Clicked
    UI->>Director: skipAllEffects()
    Director->>Subsystems: resetAllEffectAndTasks()
    Note over Subsystems: 1. Aborts active cc.tween instances<br/>2. Cuts Spine victory animations<br/>3. Completes money rolling counts instantly
    Director->>Exec: Shortens delay timers & fast-tracks Promise resolutions
    Subsystems-->>Director: Table stops at target matrix instantly
    Director-->>UI: Next spin enabled immediately
```

---

## 2. Granular Subsystem Acceleration Breakdown

### 1. Table & Reel Subsystem (`SlotTableModule`)
* **Normal Mode**: Reels decelerate sequentially with column-by-column delays ($0.2\text{s}$ per reel) and bounce landing curves (`easeBackOut`).
* **Turbo / Fast Stop Mode**: Delays between columns are set to $0\text{s}$, and deceleration curves are shortened to immediate snap-stops ($<0.1\text{s}$).

### 2. Payline & Win Presentation Subsystem (`PaylineInfoModule`)
* **Normal Mode**: Blinks all winning paylines for $2.0\text{s}$, then enters cyclical single-line presentation.
* **Turbo Mode**: Skips cyclical line blinking entirely, displaying final total win instantly.

### 3. Wallet & Win Amount Rolling (`WalletModule` & `WinAmountModule`)
* **Normal Mode**: Performs numeric count-up tween over $1.5\text{s} - 4.0\text{s}$ using `MoneyTween`.
* **Turbo Mode**: Sets label text directly to target total without tween delay.

---

## 3. Developer Invariant Rules for Fast Stop

1. **Always Implement `resetAllEffectAndTasks()`**: Custom game components must override `resetAllEffectAndTasks()` to cancel local tweens, stop custom Spine skeleton tracks, and clear timeout callbacks (`this.unscheduleAllCallbacks()`).
2. **Never Leave Unresolved Promises**: Any visual promise that is interrupted by `skipAllEffects()` must invoke its `resolve()` callback rather than remaining pending forever, ensuring `ScriptExecutor` can progress cleanly.
