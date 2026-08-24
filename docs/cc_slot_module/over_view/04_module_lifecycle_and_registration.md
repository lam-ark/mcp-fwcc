---
id: "cc_slot_module:overview:lifecycle_and_registration"
title: "Module Lifecycle & GameMode Registration Pipeline"
category: "cc_slot_module"
tags: ["cc_slot_module", "SlotBaseModule", "lifecycle", "setupModule", "GameModeDirectorModule", "registration", "resetAllEffectAndTasks", "onLoadExtend"]
---

# 🔄 Module Lifecycle & GameMode Registration Pipeline

## 1. End-to-End Module Lifecycle Flowchart

The lifecycle of a `SlotBaseModule` component progresses through 7 distinct deterministic phases:

```mermaid
sequenceDiagram
    autonumber
    participant Engine as Cocos Engine 2.4
    participant Node as cc.Node
    participant Module as SlotBaseModule
    participant Director as GameModeDirectorModule
    participant Logic as GameLogic (eno.Game)

    rect rgb(235, 245, 255)
        Note over Engine, Module: Phase 1 & 2: Instantiation & Inversion of Control
        Engine->>Node: Instantiates Node from Scene / Prefab
        Engine->>Module: onLoad()
        Module->>Module: applyInjections(this, gameId)
        Module->>Logic: gameLogic.on("RESET_ALL_EFFECT_AND_TASKS", resetAllEffectAndTasks)
        Module->>Module: onLoadExtend() [Custom Initializations]
        Module->>Module: registerEvents() [Global Event Subscriptions]
    end

    rect rgb(245, 255, 235)
        Note over Director, Module: Phase 3: GameMode Registration & Binding
        Director->>Director: onExtendedLoad() -> setupModules()
        Director->>Module: setupModule(this.moduleEvent, this.gameMode)
        Module->>Module: Store this.moduleEvent & this.gameMode
    end

    rect rgb(255, 250, 235)
        Note over Director, Module: Phase 4 & 5: Spin Loop Execution & State Updates
        Director->>Module: moduleEvent.emit("TABLE_INIT") / "START_SPIN"
        Module->>Module: Execute animations / update visual state
        Director->>Module: moduleEvent.emit("TABLE_STOPPED")
    end

    rect rgb(255, 235, 235)
        Note over Logic, Module: Phase 6 & 7: Interruption Reset & Teardown
        Logic-->>Module: emit("RESET_ALL_EFFECT_AND_TASKS") -> resetAllEffectAndTasks()
        Engine->>Module: onDestroy() -> targetOff(this)
    end
```

---

## 2. Phase-by-Phase Lifecycle Breakdown

### Phase 1: Engine Mounting (`onLoad`)
* **Trigger**: Cocos Creator Engine activates the node in the scene.
* **Internal Action**:
  1. Finds the scoped `gameId` via `NodeUtils.getGameIdFromNode(this.node)`.
  2. Resolves `@inject` decorators with `applyInjections(this, gameId)`.
  3. Binds the global `RESET_ALL_EFFECT_AND_TASKS` listener.

### Phase 2: Post-Injection Hook (`onLoadExtend`)
* **Trigger**: Called immediately at the end of `SlotBaseModule.onLoad()`.
* **Developer Responsibility**: Subclasses instantiate sub-components, initialize internal state variables, or build custom node pools. Injected services (`this.gameLogic`, `this.eventManager`, `this.soundPlayer`) are guaranteed to be populated.

### Phase 3: Registration via Director (`setupModule`)
* **Trigger**: Invoked when `GameModeDirectorModule` initializes its `moduleList`.
* **Internal Logic**:
  ```typescript
  setupModule(moduleEvent: GameModuleEvent, gameMode): void {
      if (this.moduleEvent !== null) {
          error(`[ModuleRegistry] Module ${this.node.name} is registered to multiple GameMode. Please clone module or use GameEventManager to control event.`);
      }
      this.moduleEvent = moduleEvent;
      this.gameMode = gameMode;
  }
  ```

> [!IMPORTANT]
> **Single GameMode Registration Guard**: A single `cc.Node` instance of `SlotBaseModule` **cannot** be registered to multiple GameModes. If Normal Game and Free Game require identical table modules, either clone the prefab node in the scene hierarchy or use `this.eventManager` for cross-mode event orchestration.

### Phase 4: Event Subscription (`registerEvents`)
* **Trigger**: Called right after `onLoadExtend()`.
* **Developer Responsibility**: Bind listeners to `this.eventManager` and `this.moduleEvent`.

### Phase 5: Fast-Play & Disconnect Reset (`resetAllEffectAndTasks`)
* **Trigger**: Dispatched by `this.gameLogic` when:
  1. Player triggers Fast Play (FTR / Turbo skip).
  2. Network connection drops or resynchronization occurs.
  3. Player exits a feature abruptly.
* **Developer Responsibility**: Subclasses must stop active `cc.tween` instances, stop symbol spine animations, clear particle systems, and return pooled nodes.

### Phase 6: Destruction & Teardown (`onDestroy`)
* **Trigger**: Node removed from scene or scene unloads.
* **Developer Responsibility**: Subclasses must unbind all event listeners via `this.eventManager.targetOff(this)` to avoid engine memory leaks.
