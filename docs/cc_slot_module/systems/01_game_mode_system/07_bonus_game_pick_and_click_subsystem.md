---
id: "cc_slot_module:systems:game_mode:bonus_game_subsystem"
title: "Bonus Game Subsystem: Pick-and-Click Architecture & Lifecycle"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "game_mode", "bonus_game", "pick_and_click", "bonus_table", "bonus_item", "flow", "module_linkage"]
---

# 🎁 Bonus Game Subsystem: Pick-and-Click Architecture & Lifecycle

---

## 1. Subsystem Architecture Map

The **Bonus Game Subsystem** (`assets/cc-common/cc-slot-module/GameMode/BonusGame/`) is an interactive mini-game framework designed for Pick-and-Click rounds (e.g. Chest Opening, Treasure Vault, Wheel Selection):

```mermaid
graph TD
    subgraph BonusGamePrefab Ecosystem
        Dir[1. BonusGameDirectorModule: Master State & Countdown FSM]
        Writer[2. BonusGameWriterModule: Script Command Generator]
        Table[3. BonusGameTableModule: Grid Layout & Item Registry]
        Items[4. BonusGameItemModule Array: Individual Clickable Chests]
    end

    GDS[GameDataStore: bonusGameData] --> Dir
    Dir -->|makeScriptOpenItem / makeScriptShowResult| Writer
    Dir -->|INIT_BONUS_GAME / RESET_BONUS_TABLE| Table
    Table -->|Spawns & Coordinates| Items
    Items -->|CLICK_ITEM event dispatch| Dir
    Dir -->|Countdown Timeout: Auto Pick| Items
```

---

## 2. The 4-Component Bonus Quad

### 1. `BonusGameDirectorModule` (State & Countdown FSM)
* **Role**: Inherits from `GameModeDirectorModule`. Manages the round lifecycle, countdown timer (`labelCountDown`, `defaultCountDown = 15s`), and automatic random selection on timeout (`autoPick()`).
* **Session Hydration**: Reads `this.dataStore.playSession.isResume` and `openedBoxes: number[]` to restore previously picked items upon browser refresh.

### 2. `BonusGameWriterModule` (Action Script Generator)
* **Role**: Generates asynchronous action queues for `ScriptExecutor`:
  - `makeScriptOpenItem(data)`: Plays chest opening animation ➔ reveal prize label ➔ rolling balance update.
  - `makeScriptShowResultFinal(data)`: Summary overlay and win celebration before returning to Normal Game.

### 3. `BonusGameTableModule` (Item Grid Manager)
* **Role**: Manages the grid layout of interactive items (`BonusGameItemModule` instances). Handles node distribution, item shuffling animations, and collective reset/lock operations.

### 4. `BonusGameItemModule` (Clickable Entity)
* **Role**: Attached to each individual chest/box node. Handles hover effects, click event dispatching (`CLICK_ITEM`), Spine opening animations (`open`, `opened`), and prize display labels.

---

## 3. Pick-and-Click Interactive Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Player as User Touch / Click
    participant Item as BonusGameItemModule
    participant Dir as BonusGameDirectorModule
    participant Table as BonusGameTableModule
    participant Net as GameLogic Network

    Dir->>Table: initBonusGame() -> Spawns N Items
    Dir->>Dir: startCountDown(15s)
    
    alt Player Clicks Item
        Player->>Item: Touch Start
        Item->>Dir: emit("CLICK_ITEM", { itemIndex, optionId })
    else Countdown Expires (15s Timeout)
        Dir->>Dir: autoPick() selects remaining unopened chest
    end

    Dir->>Dir: stopCountDown() & blockBonusGame()
    Dir->>Net: sendBonusGameSelection(selectedBox)
    Net-->>Dir: Server Response { prize, multiplier, isGameOver }
    Dir->>Table: openBox(itemIndex, prize)
    Item->>Item: Plays Spine "open" + Spawns Prize Label
    
    alt isGameOver === true
        Dir->>Dir: showBonusSummary() -> transitionGameMode(NORMAL_GAME)
    else More Picks Remaining
        Dir->>Dir: unlockBonusGame() & startCountDown(15s)
    end
```

---

## 4. Reconnection & Hydration Invariants

When a player disconnects midway through a multi-pick bonus game (`isResume = true`):
1. `BonusGameDirectorModule.startBonusGame()` reads `this.dataStore.playSession.bonusData`.
2. It loops through `openedBoxes` and immediately sets those items to their `opened` visual state without playing full introductory animations.
3. Resumes the countdown timer for the remaining picks.
