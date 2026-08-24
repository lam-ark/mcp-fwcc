---
id: "cc_slot_module:GameInit:overview:lifecycle_flowchart"
title: "GameInit Lifecycle Flowchart & Bootstrap Sequence"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "overview", "lifecycle", "flowchart", "bootstrap", "sequence"]
---

# 🔄 GameInit Lifecycle Flowchart & Bootstrap Sequence

## 1. Complete Bootstrap Sequence Diagram

```mermaid
sequenceDiagram
    autonumber
    participant Engine as Cocos Engine
    participant GI as GameInit.ts
    participant GC as GameConfig.ts
    participant GDS as GameDataStore.ts
    participant GL as eno.Game (GameLogic)
    participant IoC as eno.provide (Container)
    participant Net as Network (connectNetwork)

    Note over Engine, GI: Frame 0 (onLoad Phase)
    Engine->>GI: onLoad()
    GI->>GI: setupTest()
    GI->>GC: getGameConfig()
    GI->>GDS: getDataStore() -> setConfig(_gameConfig)
    GI->>GL: new Game(_gameConfig) -> setLanguage()
    GI->>GI: setupLogger()
    GI->>GI: setupScheduler() -> _gameLogic.setScheduler()
    GI->>GI: setupMoneyFormatter() -> _gameLogic.setMoneyFormatter()
    GI->>GI: setupEventManager() -> new GameEventManager()
    GI->>IoC: provide(Game, _gameLogic, gameId)
    GI->>IoC: provide(GameDataStore, _dataStore, gameId)
    GI->>IoC: provide(GameEventManager, _eventManager, gameId)
    GI->>IoC: provide(SlotSoundPlayerModule, soundPlayer, gameId)
    GI->>GI: setupGameText()

    Note over Engine, Net: Frame 1 (start Phase & Network Auth)
    Engine->>GI: start()
    GI->>Net: connectNetwork.loginScene(gameId, callback: setUpGame)
    Net-->>GI: Auth Success Callback -> setUpGame()
    GI->>GL: _gameLogic.initNetwork(network)
    
    Note over Engine, GI: Scene Teardown Phase
    Engine->>GI: onDestroy()
    GI->>GL: _gameLogic.destroy()
    GI->>GI: _eventManager.destroy()
    GI->>IoC: clearGameDependencies(gameId)
```

---

## 2. Execution Stage Breakdown

1. **`onLoad()` (Synchronous Frame 0)**:
   * Instantiates the core data models and service singletons.
   * Registers all 12 core tokens into `eno.provide(Token, Instance, gameId)`.
2. **`start()` (Frame 1)**:
   * Kicks off `this.connect()` to initialize socket connection and session handshake.
3. **`setUpGame()` (Post-Login Callback)**:
   * Binds socket packet routers to `_gameLogic.initNetwork(network)`.
4. **`onDestroy()` (Scene Unload)**:
   * Calls `clearGameDependencies(gameId)` to prevent singleton memory leaks across scene reloads.
