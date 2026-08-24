---
id: "cc_slot_module:GameEventManager:overview:architecture_and_role"
title: "GameEventManager Asynchronous Global Event Bus Architecture"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "overview", "architecture", "event_bus", "pubsub", "async"]
---

# 🏛️ GameEventManager Asynchronous Global Event Bus Architecture

## 1. Executive Summary & Purpose

`GameEventManager` (`assets/cc-common/cc-slot-module/Core/GameEventManager.ts`) is the **Asynchronous Global Event Bus** of the `cc-common` Slot SDK.

Unlike traditional synchronous event emitters (`cc.EventTarget` or `Node.emit`), `GameEventManager.emit()` returns a `Promise<void>` that uses `Promise.all()` to asynchronously await all subscribers. This guarantees that asynchronous tasks (such as rolling wallet counters, playing sound effects, or waiting for network acknowledgments) finish before downstream state machines proceed.

```mermaid
graph LR
    Publisher[Publisher Module<br/>e.g. FreeGameDirector] -->|await emit('RESET_MULTIPLIER', false)| GEM[GameEventManager<br/>Global Event Bus]

    GEM -->|Parallel Execution via Promise.all| Sub1[MultiplierModule<br/>Async Tween Update]
    GEM -->|Parallel Execution via Promise.all| Sub2[PaylineInfoModule<br/>Label State Refresh]
    GEM -->|Parallel Execution via Promise.all| Sub3[BetModule<br/>Bet Stepper Sync]
```

---

## 2. Core Responsibilities

1. **Asynchronous Parallel Coordination**: Uses `Promise.all()` over all listeners so async animations run simultaneously without blocking each other.
2. **Context Binding & Isolation**: Supports bound execution context (`context`) to ensure `this` correctly points to the subscriber instance.
3. **Safe Error Handling**: Catches exceptions in individual listeners so a bug in one UI component will not crash other subscribers.
4. **Mass Unsubscription (`targetOff`)**: Enables rapid, leak-free listener cleanup when a component or modal node is destroyed.

---

## 3. Where is `GameEventManager` Used in SDK?

`GameEventManager` serves as the global backbone connecting **Directors ↔ GUI HUD ↔ Cutscenes ↔ Popups ↔ Network**:

| Event Domain (`GameUIEvents`) | Topics Dispatched / Listened | Participating Modules & Systems |
| :--- | :--- | :--- |
| **🎮 Game Mode Control** | `SWITCH_GAME_MODE`, `EXIT_GAME_MODE` | `GameModeDirectorModule` ➔ Switches between Normal, Free, and Bonus Game directors. |
| **💰 Win Presentation** | `UPDATE_WIN_AMOUNT`, `SYNC_WIN_AMOUNT`, `FADE_OUT_NUMBER` | `GameModeDirectorModule` ➔ `WinAmountModule`, `PaylineInfoModule`. |
| **💳 Wallet & Credits** | `PAUSE_WALLET`, `RESUME_WALLET`, `SYNC_WALLET` | `GameModeDirectorModule` pauses wallet during spin count-ups, resumes upon celebration finish. |
| **🎆 Cutscenes & FX** | `PLAY_CUTSCENE`, `CLOSE_CUTSCENE`, `SHOW_FULL_DISPLAY_CUTSCENE` | Triggers Big Win, Mega Win, Free Spin intro banners; disables `SlotButtonNormal` and `TrialButton`. |
| **🎰 Jackpot Sync** | `PAUSE_JACKPOT`, `RESUME_JACKPOT`, `UPDATE_JACKPOT_VALUE` | Syncs progressive & trial jackpot tickers with `JackpotModule`. |
| **⚡ Turbo & History** | `LOAD_CACHE_TURBO`, `OPEN_BET_DETAIL`, `ON_SCROLL_CLICK` | `TurboButton`, `BetHistoryModule`, `BetHistoryDetailModule`. |
| **🔥 Game-Specific** | `RESET_MULTIPLIER` | Red Cliff `FreeGameDirectorModule9666` ➔ `MultiplierModule9666`. |

---

## 4. How to Use `GameEventManager` (Standard Pattern)

Every component inheriting from `SlotBaseModule` automatically receives `this.eventManager` via `@inject(GameEventManager)`.

### Step 1: Subscribing to an Event
Subclasses bind listeners in `registerEvents()`:
```typescript
protected registerEvents(): void {
    // Listen to win amount updates from GameDirector
    this.eventManager.on(GameUIEvents.WIN_AMOUNT.UPDATE_WIN_AMOUNT, this.onUpdateWinAmount, this);
    
    // Listen to custom mode signals
    this.eventManager.on("RESET_MULTIPLIER", this.onResetMultiplier, this);
}
```

### Step 2: Emitting an Asynchronous Event
Publishers dispatch events and await parallel completion:
```typescript
// FreeGameDirectorModule.ts:
async showWinResult(data: any): Promise<void> {
    // 1. Pause wallet rolling
    this.eventManager.emit(GameUIEvents.WALLET.PAUSE_WALLET);

    // 2. Animate win count-up and await finish
    await this.eventManager.emit(GameUIEvents.WIN_AMOUNT.UPDATE_WIN_AMOUNT, data);

    // 3. Resume wallet rolling with final balance
    this.eventManager.emit(GameUIEvents.WALLET.RESUME_WALLET);
}
```

### Step 3: Mandatory Cleanup on Destruction
To prevent memory leaks and ghost callbacks, always clean up in `onDestroy()`:
```typescript
onDestroy(): void {
    if (this.eventManager) {
        this.eventManager.targetOff(this);
    }
}
```
