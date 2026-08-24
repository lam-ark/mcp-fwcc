---
id: "cc_slot_module:systems:game_mode:inter_module_communication_4_channels"
title: "Inter-Module Communication: 4 Channels Architecture"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "game_mode", "communication_channels", "event_bus", "data_binding", "script_pipeline", "flow"]
---

# 📡 Inter-Module Communication: 4 Channels Architecture

---

## 1. Multi-Tier Communication Architecture Overview

To achieve high cohesion, low coupling, and zero race conditions, the `cc-common` Slot Framework segregates all runtime data and message flows into **4 specialized communication channels**:

```mermaid
graph TD
    subgraph Channel 1: Reactive Data Flow
        GDS[GameDataStore] -->|registeredKeys + onDataUpdate| BDM[BaseDataModule]
    end

    subgraph Channel 2: Command Script Pipeline
        Dir[Director] -->|runAction / makeScript| Wrt[Writer]
        Wrt -->|command string array| Exec[ScriptExecutor]
        Exec -->|Promise Chaining| Dir
    end

    subgraph Channel 3: Scoped Module Event Bus
        DirBus[Director: moduleEvent] -->|SYNC_TABLE, BLINK_ALL_PAYLINES| UIMods[Attached moduleList]
    end

    subgraph Channel 4: Global Event Bus
        DirGlobal[Director] <-->|PAUSE_WALLET, UPDATE_JACKPOT| EventMgr((Global EventManager))
    end
```

---

## 2. Granular Breakdown of the 4 Channels

```mermaid
sequenceDiagram
    autonumber
    participant Socket as Network Socket
    participant GDS as GameDataStore
    participant BDM as BaseDataModule (TableData)
    participant Wrt as NormalGameWriterModule
    participant Exec as ScriptExecutor
    participant Dir as NormalGameDirectorModule
    participant Bus as Scoped moduleEvent
    participant Sub as SlotTableModule
    participant Global as Global EventManager

    Socket->>GDS: mapNewKeys(serverPayload)
    Note over GDS: Channel 1: Reactive Data Flow
    GDS->>BDM: onDataUpdate(matrix, payLines)
    BDM->>BDM: parseDataPS() deep clones matrix
    
    Dir->>Wrt: makeScriptStopSpinningTable()
    Note over Wrt,Exec: Channel 2: Command Script Pipeline
    Wrt-->>Exec: [{ command: "_stopSpinningTable" }, { command: "_setUpPaylines" }]
    Exec->>Dir: Invokes Dir._stopSpinningTable()
    
    Note over Dir,Sub: Channel 3: Scoped Module Event Bus
    Dir->>Bus: emit("TABLE_STOP_SPIN")
    Bus->>Sub: SlotTableModule stops reels & updates symbols
    Sub-->>Dir: Promise resolves
    
    Note over Dir,Global: Channel 4: Global Event Bus
    Dir->>Global: emit(GameUIEvents.WALLET.RESUME_WALLET)
    Global->>Dir: Promise.all() awaits HUD updates
```

### 🔹 Channel 1: Reactive Data Flow (`GameDataStore` ➔ `BaseDataModule`)
* **Mechanism**: Direct observer pattern invoking `onDataUpdate(data)` on all registered `BaseDataModule` instances. Zero string parsing overhead.
* **Payload Isolation**: Emits **Deep-Cloned** slices (`JSON.parse(JSON.stringify(val))`), preventing mutations in UI models from polluting the central reactive state.
* **Purpose**: Synchronizes domain state (matrices, winnings, active bet, free spin counters) across UI components.

### 🔹 Channel 2: Command Script Pipeline (`Director` ➔ `Writer` ➔ `ScriptExecutor`)
* **Mechanism**: Command Pattern paired with Sequential Asynchronous Promise Chaining.
* **Payload Structure**: Plain JSON arrays specifying method execution names and optional parameters:
  ```typescript
  [
      { command: "_syncJackpot" },
      { command: "_playSureWinEffect" },
      { command: "_playPreStopSpinningEffect" }
  ]
  ```
* **Purpose**: Completely decouples **choreography flow logic (Writer)** from **visual animation rendering (Director)**, enabling unit testing of script flows in headless Node.js environments without loading Cocos scenes.

### 🔹 Channel 3: Scoped Module Event Bus (`this.moduleEvent: GameModuleEvent`)
* **Mechanism**: Local pub/sub event instance created via `new GameModuleEvent()` inside each `GameModeDirectorModule` and propagated to all child nodes in `this.moduleList`.
* **Standard Topics**: `SYNC_TABLE`, `TABLE_START_SPIN`, `TABLE_STOP_SPIN`, `BLINK_ALL_PAYLINES`, `SHOW_ALL_PAYLINES`, `CLEAR_PAYLINES`.
* **Purpose**: Strict memory and event isolation between game modes. Events dispatched in `FreeGameDirectorModule` will never collide with or trigger listeners in `NormalGameDirectorModule`.

### 🔹 Channel 4: Global Event Bus (`this.eventManager: EventManager` & `this.gameLogic`)
* **Mechanism**: Application-wide asynchronous event dispatcher where `emit()` returns `Promise.all()` over all registered asynchronous listeners.
* **Standard Topics**:
  - `GameUIEvents.WALLET.PAUSE_WALLET`, `RESUME_WALLET`
  - `GameUIEvents.JACKPOT.UPDATE_JACKPOT_VALUE`, `PAUSE_JACKPOT`
  - `GameUIEvents.CUTSCENES.SHOW_CUTSCENE`, `CLOSE_CUTSCENE`
  - `SlotCustomEvent.CHANGE_GAME_MODE`, `EXIT_GAME_MODE`
* **Purpose**: Coordinates top-level subsystems operating outside individual game modes (e.g. Player Balance HUD, Progressive Jackpot Banners, Dialog Popups, Fullscreen Win Cutscenes).

---

## 3. Comprehensive Comparison Matrix

| Metric | Channel 1: Reactive Data | Channel 2: Command Script | Channel 3: Scoped Bus | Channel 4: Global Bus |
| :--- | :--- | :--- | :--- | :--- |
| **Sender** | `GameDataStore` | `GameModeDirectorModule` | `GameModeDirectorModule` | Any Component / Subsystem |
| **Receiver** | `BaseDataModule` instances | `ScriptExecutor` | Attached `moduleList` nodes | Entire Scene Subsystems |
| **Dispatch Latency** | Instantaneous (<0.05ms) | Asynchronous Sequential | Instantaneous (<0.05ms) | Asynchronous `Promise.all()` |
| **Memory Isolation** | High (Deep-Cloned Slices) | High (Command Strings) | High (Instance-scoped Bus) | Global (Application-wide) |
| **Primary Scope** | Domain State Layer | Execution Orchestration | Intra-GameMode Boundaries | Cross-Subsystem Coordination |
| **Failure Impact** | Desynced UI display data | Broken execution progression | Local visual glitch in mode | System-wide freeze or missing cutscene |
