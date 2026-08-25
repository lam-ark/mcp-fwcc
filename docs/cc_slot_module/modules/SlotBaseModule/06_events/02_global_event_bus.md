---
id: "cc_slot_module:SlotBaseModule:events:global_event_bus"
title: "SlotBaseModule Global Event Bus (GameEventManager) Deep Specification"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "events", "global_bus", "eventManager", "GameEventManager", "GameUIEvents"]
---

# 🌐 SlotBaseModule Global Event Bus (`GameEventManager`) Deep Specification

---

## 1. Architectural Philosophy & Global Bus Role

In the `cc-slot-module` framework, `eventManager` (an instance of `GameEventManager`) serves as the **Global Event Bus** across the entire slot game application.

It is automatically injected into every component inheriting from `SlotBaseModule` via the Dependency Injection system:

```typescript
@inject(GameEventManager) eventManager: GameEventManager;
```

When a node loads (`onLoad`), `applyInjections(this, gameId)` derives `gameId` from the scene hierarchy (`NodeUtils.getGameIdFromNode(this.node)`) and assigns the corresponding game-scoped `GameEventManager` singleton into `this.eventManager`.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          GameEventManager (Singleton)                        │
│                     Scope: Game-Wide across `gameId` boundary                │
└───────▲───────────────────────▲────────────────────────▲───────────────────▲┘
        │                       │                        │                   │
        │ emit/on               │ emit/on                │ emit/on           │ emit/on
┌───────┴───────────────┐ ┌─────┴────────────────┐ ┌─────┴─────────────┐ ┌───┴──────────┐
│  GameModeDirector     │ │   SlotTableModule    │ │  WinAmountModule  │ │ WalletModule   │
│  (Normal/Free Mode)   │ │   (Table / Reels)    │ │  (HUD Win Display)│ │ (HUD / Balance)│
└───────────────────────┘ └──────────────────────┘ └───────────────────┘ └────────────────┘
```

### Core Roles of `eventManager`:
1. **Cross-Subsystem Communication**: Bridges reel spin logic (Director/Table) with decoupled HUD components such as Bottom Bar (Spin Button, Bet Panel), Wallet (Balance presentation), Jackpot (Prize meters), Win Amount count-up overlays, and Cutscenes (Intro/Celebration modals).
2. **Game Mode Transitions**: Broadcasts high-level mode orchestration signals (`SWITCH_GAME_MODE`, `EXIT_GAME_MODE`, `RESUME_NORMAL_GAME_MODE`).
3. **Asynchronous Pipeline Synchronization**: Supports `await emit(...)` enabling Directors to sequence visual updates and count-up effects before proceeding to subsequent spin phases.

---

## 2. Technical Anatomy of `GameEventManager`

Below is the complete implementation of `GameEventManager.ts`:

```typescript
const { error, log, warn } = cc;

type EventEntry = {
    listener: Function;
    context: any;
};

export class GameEventManager {
    private events: Record<string, EventEntry[]> = {};
    private _logger: any = { log, warn, error };
    private _logTag: string = '[EventManager]';

    on(event: string, listener: Function, context: any = null): void {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push({ listener, context });
    }

    off(event: string, listener: Function, context: any = null): void {
        if (!this.events[event]) return;
        this.events[event] = this.events[event].filter(
            entry => entry.listener !== listener || entry.context !== context
        );
    }

    async emit(event: string, ...args: any[]): Promise<void> {
        const listeners = this.events[event];
        if (!listeners || listeners.length === 0) {
            this._logger && this._logger.warn(this._logTag, 'No listeners for', event);
            return Promise.resolve();
        }

        const executions = listeners.map(({ listener, context }) => {
            const boundFn = context ? listener.bind(context) : listener;
            const ctxName = (context && context.constructor && context.constructor.name) || 'UnknownContext';
            this._logger && this._logger.log(this._logTag, 'Trigger', event, '→', ctxName);

            try {
                const result = boundFn(...args);
                return result instanceof Promise ? result : Promise.resolve();
            } catch (err) {
                error(err);
                this._logger && this._logger.error(this._logTag, 'Error in', event, 'listener', err);
                return Promise.resolve(); // Fault-tolerant: does not reject other listeners
            }
        });

        await Promise.all(executions);
    }

    targetOff(context: any): void {
        for (const event in this.events) {
            this.events[event] = this.events[event].filter(entry => entry.context !== context);
        }
    }

    setLogger(logger: any, logTag: string): void {
        if (logger) {
            this._logger = logger;
            this._logTag = logTag;
            this._logger.addFilter(logTag);
        }
    }

    destroy(): void {
        this.events = {};
    }
}
```

### Key Technical Characteristics:
1. **Async & Promise Concurrency**: When dispatching via `await this.eventManager.emit("EVENT_NAME", payload)`, all listeners execute concurrently. If a listener returns a `Promise`, `emit` blocks until all registered listener Promises resolve.
2. **Listener Error Isolation**: Each listener execution is wrapped in a `try/catch` block. An uncaught exception within one listener is logged via `_logger.error` without breaking sibling listener executions or throwing unhandled promise rejections to the caller.
3. **Context Target Clearing (`targetOff(this)`)**: Sweeps all registered event topics and purges all entries matching the given `context` instance in a single pass.
4. **Built-in Diagnostic Logging**: Emits structured console traces formatted with target class names (`Trigger EVENT → SlotTableModule`) for rapid debugging.

---

## 3. Standard Global Events Dictionary (`GameUIEvents`)

Global events are cataloged in the `GameUIEvents` constant dictionary:

### A. Wallet & Balance Presentation (`GameUIEvents.WALLET`)

| Event Constant | Payload | Engine & UI Effect |
| :--- | :--- | :--- |
| `WALLET.SYNC_WALLET` | None | Triggers wallet HUD component to re-read and render active player balance. |
| `WALLET.PAUSE_WALLET` | None | Freezes wallet display updates during active spin presentation. |
| `WALLET.RESUME_WALLET` | `isForce?: boolean` | Unfreezes wallet display and syncs final credited balance after round settlement. |

### B. Win Amount Rolling Count-Up (`GameUIEvents.WIN_AMOUNT`)

| Event Constant | Payload | Engine & UI Effect |
| :--- | :--- | :--- |
| `WIN_AMOUNT.UPDATE_WIN_AMOUNT` | `{ winAmount, time, winLevel }` | Plays animated count-up number roll on the main Win Amount bar. |
| `WIN_AMOUNT.SYNC_WIN_AMOUNT` | `winAmount?: number` | Immediately snaps win amount label to value (used on session restore). |
| `WIN_AMOUNT.FADE_OUT_NUMBER` | None | Fades out previous spin win value prior to new spin initiation. |

### C. Jackpot Meters (`GameUIEvents.JACKPOT`)

| Event Constant | Payload | Engine & UI Effect |
| :--- | :--- | :--- |
| `JACKPOT.UPDATE_JACKPOT_VALUE` | `jackpotData` | Updates animated Jackpot meters (Mini, Minor, Major, Grand). |
| `JACKPOT.PAUSE_JACKPOT` | None | Pauses jackpot increment streaming during jackpot win celebration. |
| `JACKPOT.RESUME_JACKPOT` | `isForce?: boolean` | Resumes real-time jackpot stream updates from the server. |
| `JACKPOT.UPDATE_TRIAL_JACKPOT_VALUE`| `jackpotData` | Updates simulated jackpot meters in Trial/Demo mode. |
| `JACKPOT.PAUSE_TRIAL_JACKPOT` | None | Pauses trial jackpot updates. |
| `JACKPOT.RESUME_TRIAL_JACKPOT` | `isForce?: boolean` | Resumes trial jackpot updates. |

### D. Game Mode Orchestration (`GameUIEvents.GAME_MODE`)

| Event Constant | Payload | Engine & UI Effect |
| :--- | :--- | :--- |
| `GAME_MODE.SWITCH_GAME_MODE` | `targetMode: number` | Initiates transition pipeline to a target game mode (e.g. Free Game). |
| `GAME_MODE.EXIT_GAME_MODE` | None | Exits active feature mode and transitions back to Normal Game mode. |
| `GAME_MODE.RESUME_NORMAL_GAME_MODE`| None | Forces immediate recovery to Normal Game mode on reset or error fallback. |

### E. Celebration Cutscenes (`GameUIEvents.CUTSCENES`)

| Event Constant | Payload | Engine & UI Effect |
| :--- | :--- | :--- |
| `CUTSCENES.PLAY_CUTSCENE` | `{ cutsceneType, cutsceneData }` | Mounts and displays full-screen overlay celebration modals (Big Win, Mega Win, Free Game Intro). |
| `CUTSCENES.CLOSE_CUTSCENE` | `data?: any` | Closes and unmounts the active cutscene modal. |

### F. Control Deck & Spin Buttons (`GameUIEvents.SPIN_BUTTON` & `SPIN_TIMES`)

| Event Constant | Payload | Engine & UI Effect |
| :--- | :--- | :--- |
| `SPIN_BUTTON.SET_UP_BUTTON` | `{ gameMode, node }` | Registers spin button control node corresponding to the active Game Mode. |
| `SPIN_TIMES.SET_UP_SPIN_TIMES` | `{ gameMode, node }` | Registers spin times badge node corresponding to the active Game Mode. |

---

## 4. Subclass Subscription Pattern

### Registering Listeners in `registerEvents()`

Because `this.eventManager` is injected during `onLoad()`, subclasses should register global event subscriptions inside the `registerEvents()` hook:

```typescript
import { SlotBaseModule } from "cc-slot-module/Core/SlotBaseModule";
import { GameUIEvents } from "cc-slot-module/Core/GameUIEvents";

const { ccclass } = cc._decorator;

@ccclass
export class CustomWalletModule extends SlotBaseModule {

    protected registerEvents(): void {
        // Subscribe to global wallet events
        this.eventManager.on(GameUIEvents.WALLET.SYNC_WALLET, this.onSyncWallet, this);
        this.eventManager.on(GameUIEvents.WALLET.PAUSE_WALLET, this.onPauseWallet, this);
        this.eventManager.on(GameUIEvents.WALLET.RESUME_WALLET, this.onResumeWallet, this);
    }

    private onSyncWallet(): void {
        const walletData = this.gameLogic.getDataModel().WalletData;
        this.updateBalanceLabel(walletData.balance);
    }

    private onPauseWallet(): void {
        this.isBalanceLocked = true;
    }

    private onResumeWallet(isForce: boolean = false): void {
        this.isBalanceLocked = false;
        this.onSyncWallet();
    }

    private updateBalanceLabel(balance: number): void {
        // Label text update
    }

    onDestroy(): void {
        // Mandatory: Purge all event registrations for this context
        if (this.eventManager) {
            this.eventManager.targetOff(this);
        }
        super.onDestroy && super.onDestroy();
    }
}
```

---

## 5. Critical Invariants & Teardown Rules

1. **Mandatory `targetOff(this)`**: Subclasses registering listeners via `this.eventManager.on(...)` MUST invoke `this.eventManager.targetOff(this)` within `onDestroy()`. Failing to do so retains reference leaks in `GameEventManager.events` and triggers phantom callback executions on destroyed nodes.
2. **Do Not Subclass `GameEventManager`**: `GameEventManager` is a singleton service container. Do not create custom subclasses of `GameEventManager` for specific games.
3. **Do Not Route Mode-Internal Events Over `eventManager`**: Keep table reel stops, payline highlights, and multiplier animations on `this.moduleEvent` to maintain mode isolation.
