---
id: "cc_slot_module:GameDirector:game_flow:spin_phase_breakdown"
title: "GameDirector Mode Lifecycle & Global State Management"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "game_flow", "mode_lifecycle", "state_management"]
---

# 🌀 GameDirector Mode Lifecycle & Global State Management

## 1. Global Mode Flow Orchestration

`GameDirector` coordinates top-level mode switching and application lifecycle:

```mermaid
sequenceDiagram
    autonumber
    actor Player
    participant Director as GameDirector (Root)
    participant Normal as NormalGame Node
    participant Free as FreeGame Node
    participant UI as Global UI Manager

    Note over Director,UI: 1. Game Initialization
    Director->>Director: start() -> registerUIEvents() & setUpGameMode()
    Director->>Normal: onSwitchGameMode(NORMAL_GAME) -> enter()
    Director->>UI: UPDATE_GAME_MODE_UI (NORMAL_GAME)

    Note over Player,UI: 2. Feature Mode Switch
    Normal->>Director: SWITCH_GAME_MODE (FREE_GAME)
    Director->>Normal: active = false
    Director->>Free: active = true & enter()
    Director->>UI: UPDATE_GAME_MODE_UI (FREE_GAME)

    Note over Player,UI: 3. Feature Mode Exit
    Free->>Director: EXIT_GAME_MODE
    Director->>Free: exit() & active = false
    Director->>Normal: active = true & onBackToGameMode(FREE_GAME)
    Director->>UI: UPDATE_GAME_MODE_UI (NORMAL_GAME)
```
