---
id: "cc_slot_module:GameInit:overview:architecture_and_role"
title: "GameInit Bootstrap Architecture & Container Role"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "overview", "architecture", "bootstrap", "ioc", "container"]
---

# 🏛️ GameInit Bootstrap Architecture & Container Role

## 1. Executive Summary & Purpose

`GameInit` (`assets/cc-common/cc-slot-module/Core/GameInit.ts`) is the master **Bootstrap Entry Point** and **IoC Service Provider** for any slot game built on the `cc-common` Slot SDK.

Mounted at the root `Canvas/Director` node, `GameInit` executes on Frame 0 before any visual rendering or Director state machines begin. It instantiates the central data structures, boots the game logic engine (`eno.Game`), registers the singletons into the IoC container via `eno.provide()`, and triggers network authentication.

```mermaid
graph TD
    subgraph Root Entry Point
        Canvas[Canvas / Scene Root]
        DirectorNode[Canvas/Director Node]
        GI[GameInit.ts<br/>Bootstrap Controller]
    end

    subgraph Instantiated & Injected Singletons
        GC[GameConfig.ts<br/>Master Configuration]
        GDS[GameDataStore.ts<br/>Reactive State Store]
        GL[eno.Game<br/>Core Game Logic Engine]
        GEM[GameEventManager<br/>Global Event Bus]
        SSP[SlotSoundPlayerModule<br/>Audio Subsystem]
        UIM[UIManagerModule<br/>HUD Coordinator]
        SCH[eno.Scheduler<br/>Game Timer Engine]
        MF[eno.MoneyFormatter<br/>Currency Engine]
    end

    subgraph Downstream Game Modes
        NormalDirector[NormalGameDirectorModule]
        FreeDirector[FreeGameDirectorModule]
        BonusDirector[BonusGameDirectorModule]
    end

    Canvas --> DirectorNode
    DirectorNode --> GI
    GI -->|1. Reads & Initializes| GC
    GI -->|2. Configures & Sets| GDS
    GI -->|3. Boots Engine| GL
    GI -->|4. Registers via provide()| GEM
    GI -->|5. Injects Services| SSP
    GI -->|6. Resolves| UIM
    GI -->|7. Attaches| SCH
    GI -->|8. Binds| MF

    GEM -. Injected to .-> NormalDirector
    GEM -. Injected to .-> FreeDirector
    GEM -. Injected to .-> BonusDirector
```

---

## 2. Core Responsibilities

1. **Service Registration (IoC Container)**: Populates the `eno` dependency injection registry for the active `gameId` so that downstream `SlotBaseModule` components can access them via `@inject`.
2. **State & Logic Initialization**: Initializes `GameConfig`, sets up `GameDataStore`, loads language packs, and binds custom game text.
3. **Network Connection & Auth**: Connects to the slot game server socket via `connectNetwork.loginScene()` and initializes network event routing.
4. **Lifecycle Teardown & Leak Prevention**: Automatically clears all dependency injection registries and destroys game logic on `onDestroy()`.

---

## 3. Inheritance Hierarchy & Type Relationships

```text
cc.Component (Cocos Creator 2.4.x Engine Base)
 └── GameInit (assets/cc-common/cc-slot-module/Core/GameInit.ts)
```

* **Direct Dependencies**: `GameDataStore`, `GameConfig`, `GameEventManager`, `SlotGameSettings`, `SlotSoundPlayerModule`, `UIManagerModule`, `eno.Game`.
* **Used By**: Executed by the engine scene loader on scene startup; depended upon by all `SlotBaseModule` children.
