---
id: "cc_slot_module:overview:dual_event_bus_system"
title: "Dual Event Bus System: Global vs Scoped Module Events"
category: "cc_slot_module"
tags: ["cc_slot_module", "SlotBaseModule", "eventManager", "moduleEvent", "GameEventManager", "GameModuleEvent", "events", "pubsub", "scope_isolation"]
---

# 📡 Dual Event Bus Architecture in `SlotBaseModule`

## 1. The Dual-Bus Design Rationale

In modern slot games, multiple game modes (Normal Game, Free Game, Bonus Pick Game) frequently coexist within the scene graph. If all modules listened to a single flat global event bus, an event such as `TABLE_STOPPED` or `SHOW_BEAUTY_MATRIX` fired by a Free Game spin would accidentally trigger callbacks in the inactive Normal Game module.

To solve this, `cc-common` implements a **Dual Event Bus** topology:

```mermaid
graph TD
    subgraph Global Scope (Engine & Game Wide)
        GEM[GameEventManager<br/>this.eventManager]
        Network[Network Socket / Auth]
        Wallet[WalletModule]
        Bet[BetModule]
        Popups[PopupController / Settings]
    end

    subgraph Normal Game Mode Scope
        DirectorNormal[NormalGameDirectorModule]
        BusNormal[GameModuleEvent<br/>this.moduleEvent - Normal]
        TableNormal[SlotTableModule - Normal]
        ReelsNormal[SlotReelModules]
        PaylineNormal[PaylineInfoModule - Normal]
    end

    subgraph Free Game Mode Scope
        DirectorFree[FreeGameDirectorModule]
        BusFree[GameModuleEvent<br/>this.moduleEvent - Free]
        TableFree[SlotTableModule - Free]
        MultiplierFree[MultiplierModule]
        FreeBanner[IntroFreeGameModule]
    end

    GEM <---> Wallet
    GEM <---> Bet
    GEM <---> Popups
    GEM <---> DirectorNormal
    GEM <---> DirectorFree

    DirectorNormal -->|Instantiates & Binds| BusNormal
    BusNormal <---> TableNormal
    BusNormal <---> ReelsNormal
    BusNormal <---> PaylineNormal

    DirectorFree -->|Instantiates & Binds| BusFree
    BusFree <---> TableFree
    BusFree <---> MultiplierFree
    BusFree <---> FreeBanner
```

---

## 2. Comparison: Global Bus vs Scoped Bus

| Feature | Global Event Bus (`this.eventManager`) | Scoped Module Bus (`this.moduleEvent`) |
| :--- | :--- | :--- |
| **Backing Class** | `GameEventManager` (`Core/GameEventManager.ts`) | `GameModuleEvent` (`GameMode/GameModuleEvent.ts`) |
| **Availability** | Injected immediately at `onLoad()` Frame 0. | Attached later during `setupModule(moduleEvent, gameMode)` by the active Director. |
| **Scope** | Cross-mode, Global Scene, Network, Wallet, HUD. | Strictly isolated to sibling modules within the same `GameMode`. |
| **Asynchronicity** | `emit()` returns a `Promise.all()` over async listeners. | Synchronous or callback-driven fast event distribution. |
| **Typical Topics** | `UPDATE_WALLET`, `AUTH_SUCCESS`, `SPIN_CLICKED`, `OPEN_INFO_PANEL`, `RESET_MULTIPLIER`. | `TABLE_INIT`, `START_SPIN`, `TABLE_STOPPED`, `CLEAR_PAYLINES`, `BEFORE_RESET_TABLE`. |
| **Cleanup Mechanism** | `this.eventManager.targetOff(this)` in `onDestroy()`. | Cleaned automatically when the `GameMode` node is torn down or reset. |

---

## 3. Practical Usage Guide & Code Examples

### A. Publishing and Subscribing on Scoped Bus (`this.moduleEvent`)
Used for intra-mode communication (e.g. Table informing PaylineInfo that reels finished rolling):

```typescript
// 1. In SlotTableModule.ts:
protected onAllReelsStopped(): void {
    // Notify only sibling modules belonging to this specific GameMode
    if (this.moduleEvent) {
        this.moduleEvent.emit("TABLE_STOPPED", {
            matrix: this.getMatrix(),
            winLines: this.getWinLines()
        });
    }
}

// 2. In PaylineInfoModule.ts:
protected registerEvents(): void {
    if (this.moduleEvent) {
        this.moduleEvent.on("TABLE_STOPPED", this.onTableStopped, this);
    }
}
```

### B. Publishing and Subscribing on Global Bus (`this.eventManager`)
Used for system-level notifications (e.g. Updating user balance or resetting multipliers across modes):

```typescript
// 1. Resetting multiplier when exiting Free Game into Normal Game
// FreeGameDirectorModule9666.ts:
override async _gameExit(): Promise<void> {
    await super._gameExit();
    this.eventManager.emit("RESET_MULTIPLIER", false);
}

// 2. Listening to Multiplier Reset in HUD
// MultiplierModule9666.ts:
protected registerEvents(): void {
    this.eventManager.on("RESET_MULTIPLIER", this.onResetMultiplier, this);
}

onDestroy(): void {
    if (this.eventManager) {
        this.eventManager.targetOff(this);
    }
}
```

---

## 4. Memory Leak Protection: The `targetOff` Mandate

Whenever a module binds listeners using `this.eventManager.on(..., this)`, it creates a persistent reference inside the `GameEventManager` registry.

> [!WARNING]
> **MANDATORY CLEANUP**: If a dynamically instantiated module (or popup) is destroyed without calling `targetOff(this)`, the global `GameEventManager` retains the callback reference. This causes:
> 1. Ghost callbacks executing on destroyed `cc.Node` instances.
> 2. Critical memory leaks preventing garbage collection of large textures and Spine skeletons.

Always include cleanup in `onDestroy()`:
```typescript
onDestroy(): void {
    if (this.eventManager) {
        this.eventManager.targetOff(this);
    }
    if (this.gameLogic) {
        this.gameLogic.targetOff(this);
    }
}
```
