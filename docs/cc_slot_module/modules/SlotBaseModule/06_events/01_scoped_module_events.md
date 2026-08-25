---
id: "cc_slot_module:SlotBaseModule:events:scoped_module_events"
title: "SlotBaseModule Scoped Module Events (GameModuleEvent) Deep Specification"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "events", "scoped_events", "moduleEvent", "GameModuleEvent", "GameMode"]
---

# 📡 SlotBaseModule Scoped Module Events (`GameModuleEvent`) Deep Specification

---

## 1. Architectural Philosophy & Purpose of `moduleEvent`

In the Cocos Creator Slot Framework (`cc-slot-module`), each game mode (e.g., `NormalGame`, `FreeGame`, `BonusGame`, `TopBarMiniGame`) operates as an autonomous modular ecosystem containing its own Director, Table, Reels, Paylines, Symbols, and Visual FX.

`moduleEvent` (an instance of `GameModuleEvent`, subclassing `GameEventManager`) functions as the **Mode-Scoped Event Bus**. It provides isolated, intra-mode pub/sub messaging strictly bounded within a single GameMode hierarchy.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          Normal Game Director                               │
│                         (GameModeDirectorModule)                            │
│                                                                             │
│               Instantiates: this.moduleEvent = new GameModuleEvent()        │
│                                │                                            │
│            setupModules() via SlotBaseModule.setupModule(...)               │
│         ┌──────────────────────┼──────────────────────┐                     │
│         ▼                      ▼                      ▼                     │
│  SlotTableModule        SlotReelModule        SlotTablePaylineModule        │
│  (Normal Reels)         (Normal Matrix)       (Normal Payline Visuals)      │
└─────────────────────────────────────────────────────────────────────────────┘
                                  ▲
                       ISOLATED / ZERO EVENT BLEED
                                  ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           Free Game Director                                │
│                         (GameModeDirectorModule)                            │
│                                                                             │
│               Instantiates: this.moduleEvent = new GameModuleEvent()        │
│                                │                                            │
│            setupModules() via SlotBaseModule.setupModule(...)               │
│         ┌──────────────────────┼──────────────────────┐                     │
│         ▼                      ▼                      ▼                     │
│  SlotTableModule        SlotReelModule        SlotMultiplierModule          │
│  (Free Reels Instance)  (Free Matrix State)   (Free Multiplier Overlay)     │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Why Scoped `moduleEvent` Over Global `eventManager`?
1. **Prevent Event Bleeding & Pollution**: When Free Game emits `TABLE_START_SPIN`, using a global event bus would inadvertently trigger hidden Normal Game reels in the background. `moduleEvent` guarantees complete message boundary isolation.
2. **Autonomous Lifecycle**: Each game mode dynamically creates, resets, and destroys its own event bus when entering, resuming, or exiting without interfering with other modes.
3. **Prefab Reusability**: The same `SlotTableModule` prefab can be instantiated in both Normal Game and Free Game mode hierarchies; each instance only responds to the director that injected its specific `moduleEvent`.

---

## 2. Lifecycle & Dynamic Injection Mechanism

Unlike `eventManager`, which is automatically injected via the `@inject(GameEventManager)` decorator during `onLoad()`, `moduleEvent` is **NOT** available during `onLoad()`.

### The Step-by-Step Injection Pipeline:
1. `GameModeDirectorModule.onExtendedLoad()` executes `this.setupModules()`.
2. `setupModules()` creates a dedicated instance of `GameModuleEvent`:
   ```typescript
   this.moduleEvent = new GameModuleEvent();
   this.moduleEvent.setLogger(this.logger, '[ModuleEvent]');
   ```
3. The Director iterates over its `moduleList` (an array of `cc.Node` references configured in the Cocos Creator Inspector) and injects the bus into each child module:
   ```typescript
   this.moduleList.forEach(moduleNode => {
       const baseModule = moduleNode.getComponent(SlotBaseModule);
       if (baseModule) {
           baseModule.setupModule(this.moduleEvent, this.gameMode);
       }
   });
   ```
4. `SlotBaseModule.setupModule()` assigns the reference and verifies multi-mode safety guards:
   ```typescript
   setupModule(moduleEvent: GameModuleEvent, gameMode: any): void {
       if (this.moduleEvent !== null) {
           error(`[ModuleRegistry] Module ${this.node.name} is registered to multiple GameMode. Please clone module or use GameEventManager to control event.`);
       }
       this.moduleEvent = moduleEvent;
       this.gameMode = gameMode;
   }
   ```

> [!WARNING]
> **Golden Invariant**: Never invoke `this.moduleEvent.on(...)` or `this.moduleEvent.emit(...)` inside `onLoad()` or `onLoadExtend()`. At `onLoad()`, `this.moduleEvent` is `null`. Attempting to register listeners during `onLoad()` triggers a fatal runtime error: `TypeError: Cannot read properties of null (reading 'on')`.

---

## 3. Standard Scoped Events Catalog (`cc-slot-module`)

Below is the canonical catalog of scoped events coordinated via `moduleEvent` between `GameModeDirectorModule` and child modules (`SlotTableModule`, `SlotReelModule`, `SlotTablePaylineModule`, etc.):

### A. Reel Spin & Table Motion Control

| Event Name | Sender | Receiver | Payload | Description & Engine Behavior |
| :--- | :--- | :--- | :--- | :--- |
| `TABLE_INIT` | Director | Table / Reels | None | Initializes column positions, reels, and initial symbol grids when Game Mode boots. |
| `SHOW_BEAUTY_MATRIX` | Director | Table / Reels | `data?: any` | Renders the default static presentation matrix upon entering the scene. |
| `TABLE_START_SPIN` | Director | Table / Reels | None | Triggers reel acceleration and endless spin loop animations. |
| `TABLE_STOP_SPIN` | Director | Table / Reels | `stopData: { matrix, ... }` | Supplies server matrix data and triggers staggered column reel deceleration. |
| `TABLE_STOPPED` | Table | Director / Paylines | `{ matrix }` | Emitted when all reel columns complete deceleration, bounce-back, and reach full rest. |
| `TABLE_FAST_STOP` | Director | Table / Reels | None | Bypasses spin delays and forces all reels to snap/brake to their final stopping positions immediately. |
| `TABLE_STOP_SPIN_WITH_RANDOM_MATRIX` | Director | Table / Reels | None | Forces table stoppage with randomized fallback symbols upon fatal errors or emergency force-stop. |
| `SYNC_TABLE` | Director | Table / Reels | `matrixData, gameMode` | Synchronizes symbol states on the reels when resuming an active play session. |
| `BEFORE_RESET_TABLE` | Director | Table / Reels / VFX | None | Notifies all table components to clear temporary states before beginning a new spin sequence. |

### B. Paylines, Win Presentation & Highlights

| Event Name | Sender | Receiver | Payload | Description & Engine Behavior |
| :--- | :--- | :--- | :--- | :--- |
| `SETUP_PAYLINES` | Director | Paylines Module | `paylineConfig` | Injects payline definitions and grid coordinates into the payline rendering engine. |
| `BLINK_ALL_PAYLINES` | Director | Paylines / Symbols | None | Concurrently blinks/flashes all winning symbol combinations on the reel matrix. |
| `SHOW_ALL_PAYLINES` | Director | Paylines Module | None | Displays all winning line traces and connecting overlay lines simultaneously. |
| `SHOW_BONUS_PAYLINE` | Director | Paylines / Symbols | None | Highlights Bonus trigger symbols transitioning into Bonus Game mode. |
| `SHOW_SCATTER_PAYLINE` | Director | Paylines / Symbols | None | Highlights Scatter trigger symbols transitioning into Free Spins mode. |
| `SHOW_JACKPOT_PAYLINE` | Director | Paylines / Symbols | `jackpotData` | Highlights winning Jackpot symbol combinations on the grid. |
| `CLEAR_PAYLINES` | Director / Table | Paylines Module | None | Clears and hides all payline traces, animated frames, and symbol dimming overlays. |

### C. Special Game Features & Mechanics

| Event Name | Sender | Receiver | Payload | Description & Engine Behavior |
| :--- | :--- | :--- | :--- | :--- |
| `TABLE_START_RESPIN` | Director | Table / Reels | `respinData` | Triggers a respin sequence on specific designated locked or unlocked reel columns. |
| `TABLE_STOP_RESPIN` | Director | Table / Reels | `stopData` | Stops respinning reels and locks settled symbols in place. |
| `SHOW_MULTIPLIER` | Director | Multiplier Module | `multiplierVal` | Triggers multiplier increase animation and badge display. |
| `SHOW_TRANSFORM_SYMBOL` | Director | Table / Symbols | `transformData` | Triggers transformation effects (e.g., Mystery Symbols revealing Wilds). |
| `UPDATE_MEGAWAY` | Director | Table / Reels | `megawayData` | Dynamically updates Megaways win-ways counter based on variable reel row heights. |

---

## 4. Subclass Implementation Pattern

### Overriding `setupModule` for Scoped Listener Registration

Because `this.moduleEvent` is assigned during `setupModule()`, subclasses should override `setupModule()` to bind their scoped event listeners:

```typescript
import { SlotBaseModule } from "cc-slot-module/Core/SlotBaseModule";
import { GameModuleEvent } from "cc-slot-module/GameMode/GameModuleEvent";

const { ccclass } = cc._decorator;

@ccclass
export class CustomSlotTableModule extends SlotBaseModule {

    /**
     * Override setupModule to receive mode-scoped event bus and bind listeners
     */
    setupModule(moduleEvent: GameModuleEvent, gameMode: any): void {
        super.setupModule(moduleEvent, gameMode);
        
        // Register scoped Game Mode event listeners
        this.moduleEvent.on("TABLE_START_SPIN", this.onStartSpin, this);
        this.moduleEvent.on("TABLE_STOP_SPIN", this.onStopSpin, this);
        this.moduleEvent.on("TABLE_FAST_STOP", this.onFastStop, this);
    }

    private async onStartSpin(): Promise<void> {
        // Trigger reel acceleration tween
    }

    private async onStopSpin(stopData: any): Promise<void> {
        // Trigger staggered reel deceleration and settle animations
    }

    private onFastStop(): void {
        // Instantly snap reels to target positions
    }

    onDestroy(): void {
        // Clean up listeners when module is destroyed
        if (this.moduleEvent) {
            this.moduleEvent.targetOff(this);
        }
        super.onDestroy && super.onDestroy();
    }
}
```

### Asynchronous Event Dispatch (`async emit`)

`GameModuleEvent` inherits `GameEventManager.emit(...)`, which executes all registered listener callbacks with `Promise.all(...)`. This allows Directors to orchestrate sequential visual sequences cleanly:

```typescript
// Inside GameModeDirectorModule
async _stopSpinningTable(data: any): Promise<void> {
    // Await complete reel stoppage and bounce animations before moving to settlement
    await this.moduleEvent.emit("TABLE_STOP_SPIN", data);
}
```

---

## 5. Lifecycle Teardown & Memory Management

1. **Director Destruction**: When `GameModeDirectorModule` is destroyed (`onDestroy`), it invokes `this.moduleEvent.destroy()` to wipe all event listeners registered in that mode's bus:
   ```typescript
   onDestroy(): void {
       if (this.moduleEvent) {
           this.moduleEvent.destroy();
           this.moduleEvent = null;
       }
       super.onDestroy();
   }
   ```
2. **Child Module Destruction**: Subclasses should invoke `this.moduleEvent.targetOff(this)` in their `onDestroy()` hook to remove their context bindings and eliminate memory leak vectors.
